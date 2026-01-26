import HeroBanner from '@/components/home/HeroBanner';
import TrustCounters from '@/components/home/TrustCounters';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ServicesSnapshot from '@/components/home/ServicesSnapshot';
import InfrastructureTrust from '@/components/home/InfrastructureTrust';
import VideoSection from '@/components/home/VideoSection';
import CTABanner from '@/components/home/CTABanner';
async function getVideos() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/videos`, {
      cache: 'no-store',
    });
    
    const data = await res.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
}
export default async function Home() {
  const videos = await getVideos();
  return (
     <main className="min-h-screen mt-16 sm:mt-18 lg:mt-20">
      <HeroBanner />
      <TrustCounters />
      <WhyChooseUs />
      <ServicesSnapshot />
      <InfrastructureTrust />
      <VideoSection videos={videos} />
      <CTABanner />
    </main>
  );
}
