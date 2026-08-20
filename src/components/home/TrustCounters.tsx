'use client';

import {
  HiOutlineBadgeCheck,
  HiOutlineTruck,
  HiOutlineClock,
  HiOutlineLocationMarker,
} from 'react-icons/hi';

const TrustCounters = () => {
  const counters = [
    {
      value: '40+',
      label: 'Years of Excellence',
      icon: HiOutlineBadgeCheck,
    },
    {
      value: '200+',
      label: 'Trucks Fleet',
      icon: HiOutlineTruck,
    },
    {
      value: '24/7',
      label: 'Operations',
      icon: HiOutlineClock,
    },
    {
      value: '100%',
      label: 'GPS Tracked Fleet',
      icon: HiOutlineLocationMarker,
    },
  ];

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {counters.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <Icon className="mx-auto text-4xl mb-3 text-blue-600 dark:text-blue-400" />

                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.value}
                </div>

                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustCounters;
