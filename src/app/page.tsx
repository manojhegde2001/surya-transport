import HeroBanner from '@/components/home/HeroBanner';
import TrustCounters from '@/components/home/TrustCounters';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ServicesSnapshot from '@/components/home/ServicesSnapshot';
import InfrastructureTrust from '@/components/home/InfrastructureTrust';
import VideoSection from '@/components/home/VideoSection';
import CTABanner from '@/components/home/CTABanner';
import { getVideosFromSheet } from '@/lib/googleSheets';

// Force static generation
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  let videos = [] as any;
  
  try {
    videos = await getVideosFromSheet();
  } catch (error) {
    console.error('Error fetching videos from sheet:', error);
    videos = []; // Fallback to empty array
  }

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
