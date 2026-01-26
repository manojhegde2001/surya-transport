import { HiOfficeBuilding, HiShieldCheck, HiUserGroup, HiEye, HiHome, HiUser } from 'react-icons/hi';

export const metadata = {
  title: 'Facilities | Surya Transport',
};

const facilities = [
  {
    title: 'Workshop',
    icon: HiOfficeBuilding,
    highlight: '45,000 sq.ft facility',
    detail: 'Dedicated in-house workshop to reduce truck downtime and keep fleets road-ready.',
  },
  {
    title: '24/7 Spares',
    icon: HiShieldCheck,
    highlight: '70% faster than dealer support',
    detail: 'Critical spares stocked in-house to cut waiting time for breakdown repair.',
  },
  {
    title: '24/7 Mechanics',
    icon: HiUser,
    highlight: '4 mechanics round-the-clock',
    detail: 'On-site mechanical team available for immediate response and preventive checks.',
  },
  {
    title: 'Own Parking Facility',
    icon: HiHome,
    highlight: 'Secure parking with CCTV',
    detail: 'Dedicated parking yard with surveillance for fleet safety and quick dispatch.',
  },
  {
    title: 'Driver Accommodation',
    icon: HiUserGroup,
    highlight: 'Capacity for 30 drivers',
    detail: 'Basic accommodation and amenities to keep driver availability stable.',
  },
  {
    title: 'On-site Supervisors',
    icon: HiEye,
    highlight: '1 supervisor per 10 trucks per shift',
    detail: 'Tight operational control with supervisors aligned to every cluster of vehicles.',
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
            Infrastructure designed for zero downtime
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl">
            In-house infrastructure and 24/7 support built to keep OEM production lines running
            without interruptions.
          </p>
        </header>

        <section className="mb-8 sm:mb-10">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/70 px-4 sm:px-6 py-4 sm:py-5">
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200">
              Our in-house facilities are structured around one promise: uninterrupted logistics
              support for your factory operations, day and night.
            </p>
          </div>
        </section>

        <section className="grid gap-6 sm:gap-7 md:grid-cols-2">
          {facilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="h-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/80 shadow-sm hover:shadow-md dark:hover:shadow-gray-900/50 transition-all duration-200 p-5 sm:p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div>
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      {item.highlight}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{item.detail}</p>
              </div>
            );
          })}
        </section>

        <section className="mt-10 sm:mt-12 border-t border-dashed border-gray-200 dark:border-gray-800 pt-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Want dedicated infrastructure for your contract?
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            We can structure dedicated yards, workshop capacity, and supervisor allocation for
            long-term high-volume contracts.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-gray-900 hover:bg-black dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 px-5 py-2.5 text-sm font-medium transition-colors shadow-sm"
          >
            Discuss dedicated infrastructure setup
          </a>
        </section>
      </section>
    </main>
  );
}
