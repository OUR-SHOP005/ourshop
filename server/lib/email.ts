import { ContactMessage } from '@shared/schema';

// Only initialize Resend if API key is available
let resend: any = null;
if (process.env.RESEND_API_KEY) {
  const { Resend } = require('resend');
  resend = new Resend(process.env.RESEND_API_KEY);
}

const OWNER_EMAIL = 'ourshop005@gmail.com'; // Owner email address

export async function sendContactEmail(message: ContactMessage) {
  try {
    if (resend) {
      // If Resend is configured, send actual email
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
    } else {
      // If no API key, just log the message
      console.log('==== CONTACT FORM SUBMISSION ====');
      console.log(`Name: ${message.name}`);
      console.log(`Email: ${message.email}`);
      if (message.company) console.log(`Company: ${message.company}`);
      console.log(`Message: ${message.message}`);
      console.log('================================');
      console.log('(Set RESEND_API_KEY to enable email notifications)');
    }
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send email notification');
  }
}
