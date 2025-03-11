import { Resend } from 'resend';
import { ContactMessage } from '@shared/schema';

const resend = new Resend(process.env.RESEND_API_KEY);

const OWNER_EMAIL = 'owner@example.com'; // Replace with actual owner email

export async function sendContactEmail(message: ContactMessage) {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: OWNER_EMAIL,
      subject: `New Contact Form Submission from ${message.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${message.name}</p>
        <p><strong>Email:</strong> ${message.email}</p>
        ${message.company ? `<p><strong>Company:</strong> ${message.company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.message}</p>
      `
    });
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send email notification');
  }
}
