import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  const { name, email, phone, projectType, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields: name, email, message' });
  }

  try {
    const provider = process.env.CONTACT_PROVIDER || 'resend';
    const toEmail = process.env.CONTACT_TO_EMAIL || 'aadritmangla@gmail.com';

    if (provider === 'resend' && process.env.RESEND_API_KEY) {
      const payload = {
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [toEmail],
        reply_to: email,
        subject: `New Portfolio Inquiry from ${name}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 640px; margin: 0 auto; color: #1f1e1d;">
            <h1 style="font-size: 20px; margin-bottom: 8px;">New Portfolio Inquiry</h1>
            <p style="color: #5e5954; margin-bottom: 20px;">You received a new message from the portfolio contact form.</p>
            <div style="background: #f5f2eb; border: 1px solid #e8e4db; padding: 16px; border-radius: 8px;">
              <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
              <p style="margin: 0 0 8px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
              ${phone ? `<p style="margin: 0 0 8px;"><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
              ${projectType ? `<p style="margin: 0 0 8px;"><strong>Project Type:</strong> ${escapeHtml(projectType)}</p>` : ''}
              <p style="margin: 16px 0 0;"><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; margin-top: 8px;">${escapeHtml(message)}</p>
            </div>
          </div>
        `,
      };

      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const text = await response.text();
        console.error('Resend error:', response.status, text);
        return res.status(500).json({ success: false, error: 'Failed to send email' });
      }
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({ success: false, error: 'Failed to process contact request' });
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"')
    .replace(/'/g, '&#039;');
}