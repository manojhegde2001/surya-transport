// app/page.tsx
import HeroBanner from '@/components/home/HeroBanner';
import TrustCounters from '@/components/home/TrustCounters';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ServicesSnapshot from '@/components/home/ServicesSnapshot';
import InfrastructureTrust from '@/components/home/InfrastructureTrust';
import VideoSection from '@/components/home/VideoSection';
import CTABanner from '@/components/home/CTABanner';
import { getVideosFromSheet } from '@/lib/googleSheets';

export default async function Home() {
  // Call the function directly instead of fetching the API route
  const videos = await getVideosFromSheet();

  return (
    <main className="min-h-screen mt-16 sm:mt-18 lg:mt-20">
      <HeroBanner />
      <TrustCounters />
      <WhyChooseUs />
      <ServicesSnapshot />
      <InfrastructureTrust />
      <VideoSection videos={videos as any} />
      <CTABanner />
    </main>
  );
}
