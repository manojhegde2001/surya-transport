'use client';

import {
  HiOutlineCurrencyRupee,
  HiOutlineCube,
  HiOutlineLocationMarker,
  HiOutlineUserGroup,
  HiOutlineTruck,
} from 'react-icons/hi';

const InfrastructureTrust = () => {
  const features = [
    { label: 'Transparent Costing', icon: HiOutlineCurrencyRupee },
    { label: 'Customizable Containers', icon: HiOutlineCube },
    { label: '24/7 GPS Tracking', icon: HiOutlineLocationMarker },
    { label: 'Onsite Supervisors', icon: HiOutlineUserGroup },
    { label: 'Experienced Driver Fleet', icon: HiOutlineTruck },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="text-center p-4 rounded-lg bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:shadow-md dark:hover:shadow-gray-900/50 transition-all duration-200"
              >
                <Icon className="mx-auto text-3xl mb-2 text-blue-600 dark:text-blue-400" />

                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {feature.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureTrust;
