'use client';

import Link from 'next/link';

const ServicesSnapshot = () => {
  const services = [
    {
      title: 'In-Plant Movement',
      description: 'Seamless material transport within your factory, minimizing production delays through optimized internal logistics',
      icon: '🔄',
    },
    {
      title: 'Inter SIPCOT – Local',
      description: 'Quick and reliable shuttle-run service between nearby industrial sites with flexible daily trips',
      icon: '🚚',
    },
    {
      title: 'State to State (Full Truck Load)',
      description: 'Dedicated full-truck transport across states with secure, timely, and cost-effective bulk shipments',
      icon: '🛣️',
    },
    {
      title: 'Sequence Transport',
      description: 'Just-in-time delivery of spare parts to assembly lines, ensuring uninterrupted production and line efficiency',
      icon: '⚙️',
    },
    {
      title: 'Warehousing',
      description: 'Safe, organized storage with real-time inventory tracking and flexible short-term or long-term solutions',
      icon: '🏭',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            End-to-end logistics solutions ensuring continuity, precision, and cost clarity for factory operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {service.description}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-medium text-sm"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 font-semibold rounded-lg transition-colors"
          >
            View All Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSnapshot;
