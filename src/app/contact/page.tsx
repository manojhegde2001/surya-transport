'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  HiMail,
  HiUser,
  HiOfficeBuilding,
  HiPhone,
  HiClock,
  HiCalendar
} from 'react-icons/hi';

const clients = [
  { name: 'Myong Shin India', logo: '/clients/Myong_Shin.jpeg' },
  { name: 'Daeseong India', logo: '/clients/Daeseong.jpeg' },
  { name: 'Doowon', logo: '/clients/Doowon.png' },
  { name: 'Hwashin', logo: '/clients/Hwashin.jpeg' },
  { name: 'Hyundai', logo: '/clients/Hyundai.jpeg' },
  { name: 'Hyundai Mobis', logo: '/clients/Hyundai_Mobis.png' },
  { name: 'Seoyon E Hwa', logo: '/clients/Seoyon_E_Hwa.png' },
  { name: 'Popular Steel', logo: '/clients/popularsteel.jpeg' },
  { name: 'Kausikh', logo: '/clients/Kausikh.png' },
  { name: 'Pinstar Automotive', logo: '/clients/Pinstar.svg' },
  { name: 'United Industries Plastic Pvt Ltd', logo: '/clients/United_Industries.svg' },
];

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus('');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/maqdorvp', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });

      // Check the actual status code instead of just response.ok
      if (response.status === 200) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        // Try to parse error details from response
        const data = await response.json();
        setStatus('error');
        console.error('Form submission error:', data);
      }
    } catch (error) {
      setStatus('error');
      console.error('Network error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-gray-950 px-4 py-8">
      <section className="max-w-6xl mx-auto">
        {/* HEADER */}
        <header className="mb-4">
          <p className="text-xs font-semibold uppercase text-slate-600 dark:text-gray-400">
            Contact Us
          </p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">
            Get in Touch
          </h1>
          <p className="mt-2 max-w-xl text-sm text-slate-700 dark:text-gray-300">
            Share your company logistics requirement and our team will respond with a tailored solution.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[3fr_2fr] items-start">
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-300 bg-white
            p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" icon={<HiUser />} required />
                <Field label="Email" name="email" type="email" icon={<HiMail />} required />
                <Field label="Company" name="company" icon={<HiOfficeBuilding />} required />
                <Field label="Phone" name="phone" icon={<HiPhone />} />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-800 dark:text-gray-200 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full rounded-lg border border-slate-300
                  bg-white px-3 py-2 text-sm text-slate-900
                  focus:outline-none focus:ring-2 focus:ring-slate-900
                  dark:bg-gray-950 dark:border-gray-700 dark:text-gray-100"
                />
              </div>
            </div>

            {status && (
              <p
                className={`mt-4 text-sm font-medium ${
                  status === 'success' ? 'text-green-700' : 'text-red-700'
                }`}
              >
                {status === 'success'
                  ? 'Message sent successfully! Our team will respond shortly.'
                  : 'Failed to send. Please try again.'}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="mt-5 w-full rounded-lg bg-slate-900
              hover:bg-black text-white py-2.5 text-sm font-semibold
              transition disabled:opacity-60"
            >
              {submitting ? 'Submitting…' : 'Submit Enquiry'}
            </button>
          </form>

          {/* SIDEBAR */}
          <aside className="space-y-5">
            <div className="rounded-2xl border border-slate-300 bg-white
              p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                Contact Information
              </h2>

              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-gray-300">
                <HiMail className="text-slate-600 dark:text-gray-400" />
                <a
                  href="mailto:suryatransports@yahoo.com"
                  className="font-medium underline"
                >
                  suryatransports@yahoo.com
                </a>
              </div>

              <div className="mt-2 flex items-center gap-2 text-sm text-slate-700 dark:text-gray-300">
                <HiClock className="text-slate-600 dark:text-gray-400" />
                <span>10 AM – 6 PM</span>
              </div>

              <div className="mt-1 flex items-center gap-2 text-sm text-slate-700 dark:text-gray-300">
                <HiCalendar className="text-slate-600 dark:text-gray-400" />
                <span>Monday – Saturday</span>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-300 bg-white
              p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
                Trusted by Companies
              </h3>

              <div className="grid grid-cols-3 gap-3">
                {clients.map((client) => (
                  <div
                    key={client.name}
                    title={client.name}
                    className="flex items-center justify-center
                    h-16 rounded-xl border border-slate-200
                    bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 p-2 overflow-hidden transition-all hover:shadow-md"
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={110}
                      height={55}
                      className="max-h-11 max-w-full w-auto h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </section>
    </main>
  );
}

/* FIELD */
function Field({
  label,
  name,
  icon,
  type = 'text',
  required = false
}: {
  label: string;
  name: string;
  icon: React.ReactNode;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-800 dark:text-gray-200 mb-1">
        {label} {required && '*'}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
          {icon}
        </span>
        <input
          type={type}
          name={name}
          required={required}
          className="w-full rounded-lg border border-slate-300
          bg-white px-9 py-2.5 text-sm text-slate-900
          focus:outline-none focus:ring-2 focus:ring-slate-900
          dark:bg-gray-950 dark:border-gray-700 dark:text-gray-100"
        />
      </div>
    </div>
  );
}
