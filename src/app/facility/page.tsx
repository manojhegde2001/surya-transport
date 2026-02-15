import { FaTools } from 'react-icons/fa';
import { GiCash } from 'react-icons/gi';
import { HiCurrencyDollar, HiTruck, HiLocationMarker, HiUserGroup, HiUsers } from 'react-icons/hi';

export const metadata = {
  title: 'Facilities | Surya Transport',
};

const facilities = [
  {
    title: 'Transparent Costing',
    icon: GiCash,
    description:
      'We align pricing with real-time operational metrics such as truck mileage and fuel costs, with systematic month-on-month adjustments based on actual data. This ensures cost efficiency, fairness, and full visibility into every component of the spend, while providing complete transparency on what clients are paying for.',
  },
  {
    title: 'Customizable Containers',
    icon: HiTruck,
    description:
      'We offer fully customizable containers to suit every transport need. Choose from top-open, side-open, or fully enclosed types, and take advantage of our retractable containers for specialized loads. Every option is designed to provide maximum flexibility, convenience, and safe handling of your goods.',
  },
  {
    title: '24/7 GPS Tracking',
    icon: HiLocationMarker,
    description:
      'All our trucks are equipped with real-time GPS tracking, allowing clients to monitor shipments at any time. This ensures full visibility and peace of mind throughout the transportation process.',
  },
  {
    title: 'Operational Team',
    icon: HiUserGroup,
    description:
      'A highly trained and professional team that ensures trucks and operations run smoothly through every stage of the process.',
  },
  {
    title: 'In-house Workshop',
    icon: FaTools,
    description:
      'A dedicated in-house workshop with 24/7 availability of mechanics and spare parts, minimizing truck downtime and enhancing overall operational efficiency.',
  },
  {
    title: 'Driver Fleet',
    icon: HiUsers,
    description:
      'We maintain a ready-to-deploy fleet of experienced drivers, ensuring timely pickups and deliveries without compromising safety or reliability.',
  },
];

export default function FacilityPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
      <section className="max-w-5xl mx-auto">
        <header className="mb-10 sm:mb-12">
          <p className="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 uppercase">
            Facilities
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Infrastructure Built for Excellence
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl">
            Our facilities and operational capabilities ensure seamless logistics with complete transparency
            and reliability.
          </p>
        </header>

        <section className="grid gap-6 sm:gap-7">
          {facilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/80 shadow-sm hover:shadow-md dark:hover:shadow-gray-900/50 transition-all duration-200 p-5 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </span>
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        <section className="mt-10 sm:mt-12 border-t border-dashed border-gray-200 dark:border-gray-800 pt-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Need More Information?
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Contact us to discuss how our facilities and operational capabilities can support your
            specific logistics requirements.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-gray-900 hover:bg-black dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 px-5 py-2.5 text-sm font-medium transition-colors shadow-sm"
          >
            Get in Touch
          </a>
        </section>
      </section>
    </main>
  );
}
