import Image from 'next/image';
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


const clients = [
  { name: 'Myong Shin India', logo: '/clients/Myong_Shin.jpeg' },
  { name: 'Daeseong India', logo: '/clients/Daeseong.jpeg' },
  { name: 'Doowon', logo: '/clients/Doowon.png' },
  { name: 'Hwashin', logo: '/clients/Hwashin.jpeg' },
  { name: 'Hyundai', logo: '/clients/Hyundai.jpeg' },
  { name: 'Hyundai Mobis', logo: '/clients/Hyundai_Mobis.png' },
  { name: 'Seoyon E Hwa', logo: '/clients/Seoyon_E_Hwa.png' },
];


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
      <section className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-10 sm:mb-12">
          <p className="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 uppercase">
            About Us
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            38 Years of Delivering Discipline, Reliability, and Transparency in Factory-Focused OEM Logistics
          </h1>
        </header>


        {/* Our Story */}
        <section className="mb-8 sm:mb-10">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/80 p-5 sm:p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                <HiUserCircle className="w-5 h-5 text-gray-900 dark:text-gray-100" />
              </span>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Our Story
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Founded in 1986 by Selvaraj, Surya Transport started with a clear goal to solve unreliable
                  logistics and bring accountability to factory transportation. From a small fleet, we have
                  grown to a network of more than 200 trucks by consistently aligning our operations with OEM
                  discipline and zero disruption expectations.
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  With nearly four decades of experience, Surya Transport is a trusted name in automobile
                  parts transportation across South India. We specialise in sequence material transportation,
                  ensuring seamless, time-critical deliveries for major automobile manufacturers. Our long-standing 
                  client relationships are built on reliability, adaptability, and consistent service quality.
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  By integrating industry advancements, HMI safety standards, and operational best practices, we
                  continue to deliver value while maintaining high performance, safety, and transparency, making us 
                  a dependable partner in factory-focused logistics.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Vision & Mission */}
        <section className="grid gap-6 sm:grid-cols-2 mb-8 sm:mb-10">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/70 p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <HiFlag className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Vision</h3>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Surya Transport aims to lead as the most cost-effective logistics service provider, leveraging 
              technology and data-driven insights to reduce costs, prevent leakages, and deliver reliable, 
              transparent, and efficient logistics solutions to every client.
            </p>
          </div>


          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/70 p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <HiTrendingUp className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Mission</h3>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Providing reliable, round-the-clock logistics solutions that ensure seamless factory operations 
              and transparent costing.
            </p>
          </div>
        </section>


        {/* Founder Note */}
        <section className="mb-8 sm:mb-10">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/70 p-5 sm:p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                <HiUserCircle className="w-5 h-5 text-gray-900 dark:text-gray-100" />
              </span>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Founder&apos;s Note
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
                  We take pride in the journey so far, but our focus remains on continuous improvement and long-term 
                  value creation for our clients. Trust, integrity, and accountability will always remain at the core 
                  of Surya Transport.
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 italic mb-2">
                  Thank you for your continued confidence in us.
                </p>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Managing Director<br />
                  Surya Transport
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Clients */}
        <section className="mb-8 sm:mb-10">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/70 p-5 sm:p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Trusted by Leading Companies
            </h3>


            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center justify-center rounded-lg bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-4 hover:shadow-md transition"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={140}
                    height={80}
                    className="object-contain transition"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* CTA */}
        <section className="flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-gray-900 hover:bg-black dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base lg:text-lg font-medium transition shadow-sm hover:shadow-md"
          >
            Partner with us
          </a>
        </section>
      </section>
    </main>
  );
}
