'use client';

const TrustCounters = () => {
  const counters = [
    { value: '38+', label: 'Years Experience', icon: '🏆' },
    { value: '220+', label: 'Trucks', icon: '🚛' },
    { value: '1,500+', label: 'Trips / Day', icon: '📦' },
    { value: '100%', label: 'Customized Fleet Solutions', icon: '⚙️' },
    { value: '24/7', label: 'OEM & Factory-Focused', icon: '🏭' },
  ];

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {counters.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {item.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustCounters;
