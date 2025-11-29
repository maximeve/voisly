import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { question } = await request.json();

    if (!question) {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400 }
      );
    }

    // TODO: Implement email sending service here
    // For now, this is a placeholder that you can integrate with:
    // - Resend (https://resend.com)
    // - SendGrid
    // - Nodemailer with SMTP
    // - Or any other email service
    
    // Example with mailto for now (you should replace this with actual email service)
    const emailBody = `New question from Voisly landing page:\n\n${question}`;
    const mailtoLink = `mailto:maxime-vaneijndhoven@hotmail.com?subject=Voisly Question&body=${encodeURIComponent(emailBody)}`;

    // In production, you should send the email using a proper service
    // For now, we'll return success and log it
    console.log('Question received:', question);
    console.log('Should send to: maxime-vaneijndhoven@hotmail.com');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

