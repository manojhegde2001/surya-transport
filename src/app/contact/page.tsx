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

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        form.reset();
      } else {
        setStatus('Failed to send. Please try again.');
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
