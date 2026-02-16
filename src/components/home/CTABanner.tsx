'use client';

import Link from 'next/link';
import Image from 'next/image';

const CTABanner = () => {
  const clients = [
    { name: 'Myong Shin India', logo: '/clients/Myong_Shin.jpeg' },
    { name: 'Daeseong India', logo: '/clients/Daeseong.jpeg' },
    { name: 'Doowon', logo: '/clients/Doowon.png' },
    { name: 'Hwashin', logo: '/clients/Hwashin.jpeg' },
    { name: 'Hyundai', logo: '/clients/Hyundai.jpeg' },
    { name: 'Hyundai Mobis', logo: '/clients/Hyundai_Mobis.png' },
    { name: 'Seoyon E Hwa', logo: '/clients/Seoyon_E_Hwa.png' },
    { name: 'Popular Steel', logo: '/clients/popularsteel.jpeg' },
  ];

  const stats = [
    { value: '200+', label: 'Trucks' },
    { value: '24+', label: 'Years with OEM clients' },
    { value: '39+', label: 'Years of experience' },
    { value: '2500+', label: 'Trips per day' },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-950 border-y border-gray-200 dark:border-gray-800">
      <div className="container mx-auto max-w-5xl text-center space-y-12">
        {/* CTA CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Partner with 38 years of logistics excellence
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Join leading companies across South India who trust
            Surya Transport for seamless, time-critical deliveries
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-4xl mx-auto mb-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="
                  bg-gray-50 dark:bg-gray-800/50
                  border border-gray-200 dark:border-gray-700
                  rounded-lg p-4
                  transition-all duration-200
                  hover:shadow-md hover:scale-105
                "
              >
                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="
              inline-flex items-center gap-2
              px-10 py-5
              bg-gray-900 hover:bg-gray-800
              dark:bg-gray-100 dark:hover:bg-gray-200
              text-white dark:text-gray-900
              font-bold rounded-lg text-lg
              transition-all duration-200
              shadow-lg hover:shadow-xl
              hover:scale-105 transform
            "
          >
            Request a Quote
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>

          {/* STATS CARDS */}

        </div>

        {/* TRUSTED PARTNERS */}
        <div className="pt-3">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">
            Trusted by leading companies
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="
                  h-16 w-full flex items-center justify-center
                  bg-white dark:bg-gray-800
                  border border-gray-200 dark:border-gray-700
                  rounded-md
                  transition
                "
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={40}
                  className="max-h-10 max-w-[110px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
