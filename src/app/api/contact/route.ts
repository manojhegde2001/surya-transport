import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, message } = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'manojhegde2001@gmail.com',
      replyTo: email,
      subject: `Contact from ${company} - ${name}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5;" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);" cellpadding="0" cellspacing="0">
          
          <tr>
            <td style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 32px 40px; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #ffffff; letter-spacing: -0.5px;">
                New Contract Enquiry
              </h1>
              <p style="margin: 8px 0 0 0; font-size: 14px; color: #a0a0a0;">
                Received on ${new Date().toLocaleDateString('en-IN', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding: 40px;">
              
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 32px;" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 16px; background-color: #f8f9fa; border-left: 4px solid #1a1a1a; border-radius: 4px;">
                    <table role="presentation" style="width: 100%; border-collapse: collapse;" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="display: inline-block; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6b7280; letter-spacing: 0.5px;">Name</span>
                          <p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 500; color: #1a1a1a;">${name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 16px 0 8px 0; border-top: 1px solid #e5e7eb;">
                          <span style="display: inline-block; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6b7280; letter-spacing: 0.5px;">Email</span>
                          <p style="margin: 4px 0 0 0; font-size: 16px; color: #1a1a1a;">
                            <a href="mailto:${email}" style="color: #1a1a1a; text-decoration: none;">${email}</a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 16px 0 8px 0; border-top: 1px solid #e5e7eb;">
                          <span style="display: inline-block; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6b7280; letter-spacing: 0.5px;">Company</span>
                          <p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 500; color: #1a1a1a;">${company}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <div style="margin-bottom: 32px;">
                <h2 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; text-transform: uppercase; color: #6b7280; letter-spacing: 0.5px;">
                  Message
                </h2>
                <div style="padding: 20px; background-color: #fafafa; border-radius: 6px; border: 1px solid #e5e7eb;">
                  <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #374151; white-space: pre-wrap;">${message}</p>
                </div>
              </div>

              <table role="presentation" style="width: 100%; border-collapse: collapse;" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 8px 0;">
                    <a href="mailto:${email}" style="display: inline-block; padding: 14px 32px; background-color: #1a1a1a; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: 600; letter-spacing: 0.3px;">
                      Reply to ${name}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <tr>
            <td style="padding: 24px 40px; background-color: #f8f9fa; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; font-size: 12px; line-height: 1.5; color: #6b7280; text-align: center;">
                This enquiry was submitted via the contact form at<br>
                <a href="https://surya-transport.in" style="color: #1a1a1a; text-decoration: none; font-weight: 500;">surya-transport.in</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
