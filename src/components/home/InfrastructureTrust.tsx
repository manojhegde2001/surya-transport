'use client';

const InfrastructureTrust = () => {
  const features = [
    { label: '24/7 Operations', icon: '🕐' },
    { label: 'Own Workshop + 24/7 Spares', icon: '🔧' },
    { label: 'Standby Trucks', icon: '🚛' },
    { label: 'Transparent Costing', icon: '💎' },
    { label: 'GST Registered', icon: '✅' },
  ];

  return (
    <section className="py-12 px-4 bg-gray-900 dark:bg-gray-950 border-y border-gray-800">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-lg bg-gray-800/50 border border-gray-700"
            >
              <div className="text-3xl mb-2">{feature.icon}</div>
              <div className="text-sm font-medium text-gray-300">{feature.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureTrust;
