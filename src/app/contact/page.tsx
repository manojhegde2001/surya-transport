'use client';

import { useState } from 'react';
import { HiMail, HiUser, HiOfficeBuilding } from 'react-icons/hi';

const clientNames = [
  'Myong Shin India',
  'Daeseong India',
  'Doowon',
  'Hwashin',
  'Hyundai Mobis',
  'Hyundai',
];

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'onboarding@resend.dev',
          to: 'manojhegde2001@gmail.com',
          reply_to: data.email,
          subject: `Contract Enquiry from ${data.company} - ${data.name}`,
          html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
                          <p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 500; color: #1a1a1a;">${data.name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 16px 0 8px 0; border-top: 1px solid #e5e7eb;">
                          <span style="display: inline-block; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6b7280; letter-spacing: 0.5px;">Email</span>
                          <p style="margin: 4px 0 0 0; font-size: 16px; color: #1a1a1a;">
                            <a href="mailto:${data.email}" style="color: #1a1a1a; text-decoration: none;">${data.email}</a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 16px 0 8px 0; border-top: 1px solid #e5e7eb;">
                          <span style="display: inline-block; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6b7280; letter-spacing: 0.5px;">Company</span>
                          <p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 500; color: #1a1a1a;">${data.company}</p>
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
                  <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #374151; white-space: pre-wrap;">${data.message}</p>
                </div>
              </div>

              <table role="presentation" style="width: 100%; border-collapse: collapse;" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 8px 0;">
                    <a href="mailto:${data.email}" style="display: inline-block; padding: 14px 32px; background-color: #1a1a1a; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: 600; letter-spacing: 0.3px;">
                      Reply to ${data.name}
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
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully!');
        form.reset();
      } else {
        setStatus(result.message || 'Failed to send. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('Error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
      <section className="max-w-5xl mx-auto">
        <header className="mb-8 sm:mb-10">
          <p className="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 uppercase">
            Contact Us
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Contract enquiries only
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl">
            Share your OEM or supplier logistics requirement and our team will respond with a
            contract-focused discussion.
          </p>
        </header>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/80 p-5 sm:p-6 shadow-sm"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Name *
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                    <HiUser className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-9 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Email *
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                    <HiMail className="w-4 h-4" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-9 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Company *
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                    <HiOfficeBuilding className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    name="company"
                    required
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-9 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100"
                  placeholder="Briefly describe your requirement..."
                />
              </div>
            </div>

            {status && (
              <p
                className={`mt-4 text-sm ${
                  status.includes('success')
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                }`}
              >
                {status}
              </p>
            )}

            <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
              Form submissions are routed to our contracts team for email-based discussion. No
              instant quote is generated.
            </p>

            <button
              type="submit"
              disabled={submitting}
              className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-gray-900 hover:bg-black dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 px-5 py-2.5 text-sm font-medium transition-colors disabled:opacity-70 shadow-sm"
            >
              {submitting ? 'Submitting…' : 'Submit contract enquiry'}
            </button>
          </form>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/70 p-4 sm:p-5">
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Contact information
              </h2>
              <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
                <li>
                  Email:{' '}
                  <a
                    href="mailto:manojhegde2001@gmail.com"
                    className="font-medium text-gray-900 dark:text-gray-100 hover:underline"
                  >
                    manojhegde2001@gmail.com
                  </a>
                </li>
                <li>Business hours: 10 AM – 6 PM</li>
                <li>Working days: Monday – Saturday</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/80 p-4 sm:p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Select client references
              </h3>
              <div className="flex flex-wrap gap-2">
                {clientNames.map((name) => (
                  <span
                    key={name}
                    className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/70 px-3 py-1 text-xs text-gray-700 dark:text-gray-200"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </section>
    </main>
  );
}
