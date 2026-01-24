'use client';

import { useState } from 'react';
import { HiMail, HiUser, HiPhone, HiOfficeBuilding, HiClipboardList } from 'react-icons/hi';


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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => setSubmitting(false), 1000);
    };

    return (
        <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
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
                        className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/80 p-5 sm:p-6 shadow-sm"
                    >
                        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                                    Company Name
                                </label>
                                <div className="relative">
                                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                                        <HiOfficeBuilding className="w-4 h-4" />
                                    </span>
                                    <input
                                        type="text"
                                        required
                                        className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-9 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100"
                                        placeholder="Your organization name"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                                    Contact Person
                                </label>
                                <div className="relative">
                                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                                        <HiUser className="w-4 h-4" />
                                    </span>
                                    <input
                                        type="text"
                                        required
                                        className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-9 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100"
                                        placeholder="Full name"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                                    Email
                                </label>
                                <div className="relative">
                                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                                        <HiMail className="w-4 h-4" />
                                    </span>
                                    <input
                                        type="email"
                                        required
                                        className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-9 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100"
                                        placeholder="work.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                                    Phone
                                </label>
                                <div className="relative">
                                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                                        <HiPhone className="w-4 h-4" />
                                    </span>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-9 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100"
                                        placeholder="With country code"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                                    Nature of Requirement
                                </label>
                                <div className="relative">
                                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                                        <HiClipboardList className="w-4 h-4" />
                                    </span>
                                    <input
                                        type="text"
                                        required
                                        className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-9 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100"
                                        placeholder="Contract transportation, in-plant, dedicated fleet, etc."
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                                    Approx. Fleet Requirement
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100"
                                    placeholder="e.g. 20 trailers, 40-foot containers"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                                    Location / Route
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100"
                                    placeholder="Origin, destination, in-plant details"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                                    Expected Start Date
                                </label>
                                <input
                                    type="date"
                                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100"
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                                    Message
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100"
                                    placeholder="Briefly describe your plant, volume, and contract expectation."
                                />
                            </div>
                        </div>

                        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                            Form submissions are routed to our contracts team for email-based discussion. No instant quote is generated.
                        </p>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 px-5 py-2.5 text-sm font-medium transition-colors disabled:opacity-70"
                        >
                            {submitting ? 'Submitting…' : 'Submit contract enquiry'}
                        </button>
                    </form>

                    <aside className="space-y-6">
                        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/70 p-4 sm:p-5">
                            <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                Contact information
                            </h2>
                            <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
                                <li>Email: <span className="font-medium">contracts@surya-transport.in</span></li>
                                <li>Business hours: 10 AM – 6 PM</li>
                                <li>Working days: Monday – Saturday</li>
                            </ul>
                        </div>

                        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/80 p-4 sm:p-5">
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
