import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { google } from 'googleapis';

interface EmailRequest {
  name: string;
  email: string;
  additionalInfo?: string;
}

const createTransporter = async () => {
  try {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GMAIL_CLIENT_ID,
      process.env.GMAIL_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground'
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESH_TOKEN
    });

    try {
      const accessToken = await oauth2Client.getAccessToken();
      
      if (!accessToken.token) {
        throw new Error('No access token returned');
      }

      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          type: 'OAuth2',
          user: process.env.EMAIL_USER,
          clientId: process.env.GMAIL_CLIENT_ID,
          clientSecret: process.env.GMAIL_CLIENT_SECRET,
          refreshToken: process.env.GMAIL_REFRESH_TOKEN,
          accessToken: accessToken.token
        }
      });

      await transporter.verify();
      return transporter;
    } catch (error) {
      if (error.message?.includes('invalid_grant')) {
        throw new Error('Refresh token expired or invalid. Please generate a new refresh token.');
      }
      throw error;
    }
  } catch (error) {
    throw error;
  }
};

export async function POST(req: Request) {
  try {
    if (!process.env.GMAIL_CLIENT_ID || 
        !process.env.GMAIL_CLIENT_SECRET || 
        !process.env.GMAIL_REFRESH_TOKEN ||
        !process.env.EMAIL_USER) {
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

    const transporter = await createTransporter();

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