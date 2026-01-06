import CompanyDescription from '@/components/home/CompanyDescription';
import ServiceTiles from '@/components/home/ServiceTiles';
import VideoCarousel from '@/components/home/VideoCarouse';
import EnquiryForm from '@/components/shared/EnquiryForm';

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

  // Dummy videos for development
  const dummyVideos = [
    {
      id: '1',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      title: 'Welcome to Surya Transport',
      description: 'Your Trusted Logistics Partner',
    },
    {
      id: '2',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      title: 'Excellence in Service',
      description: 'Delivering Quality Since 2000',
    },
    {
      id: '3',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      title: 'Nationwide Coverage',
      description: 'Connecting India Coast to Coast',
    },
  ];

  return (
    <main className="pt-16">
      {/* Video Banner Carousel */}
      <VideoCarousel videos={videos.length > 0 ? videos : dummyVideos} />

      {/* Company Description */}
      <CompanyDescription />

      {/* Service Tiles */}
      <ServiceTiles />

      {/* Enquiry Form */}
      <EnquiryForm />
    </main>
  );
}
