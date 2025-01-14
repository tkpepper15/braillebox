import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

interface EmailRequest {
  name: string;
  email: string;
  additionalInfo?: string;
}

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

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
    const envCheck = {
      hasEmailUser: !!process.env.EMAIL_USER,
      hasEmailPass: !!process.env.EMAIL_PASS,
      emailUserLength: process.env.EMAIL_USER?.length || 0,
    };

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing environment variables:', envCheck);
      throw new Error('Server configuration error - missing email credentials');
    }

    const body = await req.json();
    const { name, email, additionalInfo } = body as EmailRequest;

    // Validate required fields
    if (!name?.trim()) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    if (!email?.trim()) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    const transporter = createTransporter();
    console.log('Email transporter created successfully');

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
    console.log('Email sent successfully to:', email);
    
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