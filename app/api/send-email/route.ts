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
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, additionalInfo } = body as EmailRequest;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content with multiple recipients
    const mailOptions = {
      from: `Brailliant <${process.env.EMAIL_USER}>`,
      to: ['richardmshan@gmail.com', 'tejjas15@gmail.com'],
      replyTo: email, // Allow replying to the customer
      subject: `New Preorder Request from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Additional Information: ${additionalInfo || 'None provided'}
      `,
      html: `
        <h2>New Preorder Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Additional Information:</strong> ${additionalInfo || 'None provided'}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      message: 'Email sent successfully' 
    }, { 
      status: 200 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ 
      error: 'Failed to send email' 
    }, { 
      status: 500 
    });
  }
} 