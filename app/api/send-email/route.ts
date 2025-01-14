import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

interface EmailRequest {
  name: string;
  email: string;
  additionalInfo?: string;
}

const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

export async function POST(req: Request) {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Missing required environment variables');
    }

    const body = await req.json();
    const { name, email, additionalInfo } = body as EmailRequest;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    const transporter = createTransporter();

    const mailOptions = {
      from: `Brailliant <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: ['richardmshan@gmail.com', 'tejjas15@gmail.com'],
      subject: 'Preorder Request - Brailliant',
      text: `
New Preorder Request:

Name: ${name}
Email: ${email}
Additional Info: ${additionalInfo || 'None provided'}
      `.trim(),
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to send email';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 