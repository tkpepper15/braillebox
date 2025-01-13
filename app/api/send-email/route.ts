import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, additionalInfo } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
      user: 'your-email@gmail.com', // Your email
      pass: 'your-email-password', // Your email password or app password
    },
  });

  const mailOptions = {
    from: email,
    to: ['richardmshan@gmail.com', 'tejjas15@gmail.com'], // Send to both emails
    subject: 'Preorder Request',
    text: `Name: ${name}\nEmail: ${email}\nAdditional Info: ${additionalInfo}`, // Include additional info
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response('Email sent successfully', { status: 200 });
  } catch (error) {
    return new Response('Error sending email', { status: 500 });
  }
} 