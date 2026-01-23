'use client';

import Link from 'next/link';

const CTABanner = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 dark:bg-gray-950">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Secure your factory logistics with a proven partner
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Join 100+ OEMs and manufacturers who trust us for zero-disruption logistics
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-10 py-5 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-lg transition-colors text-lg"
        >
          Enquire for Contract Transportation
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default CTABanner;
