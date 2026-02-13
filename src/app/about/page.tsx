import { HiUserCircle, HiFlag, HiTrendingUp, HiUsers } from 'react-icons/hi';

export const metadata = {
  title: 'About Us | Surya Transport',
};

const teamAreas = [
  'Operations',
  'Legal',
  'On-site Supervisors',
  'Vehicle Maintenance Supervisors',
  'Admin & Finance',
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
      <section className="max-w-4xl mx-auto">
        <header className="mb-10 sm:mb-12">
          <p className="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 uppercase">
            About Us
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            38 Years of Delivering Discipline, Reliability, and Transparency
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl">
            Trusted partner in factory-focused OEM logistics across South India since 1986
          </p>
        </header>

        <section className="mb-8 sm:mb-10">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/80 p-5 sm:p-6 shadow-sm">
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                <HiUserCircle className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Our Story
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Founded in 1986 by Selvaraj, Surya Transport started with a clear goal: to solve unreliable
                  logistics and bring accountability to factory transportation. From a small fleet, we have grown
                  to a network of more than 200 trucks by consistently aligning our operations with OEM discipline
                  and zero disruption expectations.
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  With nearly four decades of experience, Surya Transport is a trusted name in automobile parts
                  transportation across South India. We specialise in sequence material transportation, ensuring
                  seamless, time-critical deliveries for major automobile manufacturers. Our long-standing client
                  relationships are built on reliability, adaptability, and consistent service quality.
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  By integrating industry advancements, HMI safety standards, and operational best practices, we
                  continue to deliver value while maintaining high performance, safety, and transparency, making
                  us a dependable partner in factory-focused logistics.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 sm:mb-10">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/70 p-5 sm:p-6 shadow-sm">
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                <HiUserCircle className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Founder's Note
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Surya Transport was founded in 1986 with a clear purpose: to build a transportation company
                  defined by reliability, discipline, and trust. In the automobile industry, where timing and
                  precision are critical, we committed ourselves to delivering consistent and dependable service.
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Over the years, our growth has been driven by strong client partnerships, operational excellence,
                  and a dedicated team that upholds our standards every day. Our in-house workshop, experienced
                  workforce, and technology-enabled fleet management allow us to maintain efficiency while ensuring
                  safety and performance.
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  We take pride in the journey so far, but our focus remains on continuous improvement and
                  long-term value creation for our clients. Trust, integrity, and accountability will always
                  remain at the core of Surya Transport.
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                  Thank you for your continued confidence in us.
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium mt-2">
                  Managing Director<br />
                  Surya Transport
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 mb-8 sm:mb-10">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/70 p-4 sm:p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                <HiFlag className="w-5 h-5" />
              </span>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">Vision</h3>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Surya Transport aims to lead as the most cost-effective logistics service provider, leveraging
              technology and data-driven insights to reduce costs, prevent leakages, and deliver reliable,
              transparent, and efficient logistics solutions to every client.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/70 p-4 sm:p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                <HiTrendingUp className="w-5 h-5" />
              </span>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">Mission</h3>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Providing reliable, round-the-clock logistics solutions that ensure seamless factory operations
              and transparent costing.
            </p>
          </div>
        </section>

        <section className="mb-8 sm:mb-10">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/80 p-5 sm:p-6 shadow-sm">
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                <HiUsers className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Team structure
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  We keep our structure simple and aligned to daily operations rather than showing
                  headcount numbers.
                </p>
                <ul className="grid gap-2 sm:grid-cols-2 text-sm text-gray-700 dark:text-gray-300">
                  {teamAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-center gap-2 rounded-lg bg-gray-50 dark:bg-gray-900/70 border border-gray-100 dark:border-gray-800 px-3 py-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-500 dark:bg-gray-400" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 sm:mt-10">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-gray-900 hover:bg-black dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 px-5 py-2.5 text-sm font-medium transition-colors shadow-sm"
          >
            Partner with us
          </a>
        </section>
      </section>
    </main>
  );
}
