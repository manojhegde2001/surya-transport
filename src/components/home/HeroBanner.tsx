'use client';

import Link from 'next/link';
import { VideoData } from '@/lib/types';
import VideoCarousel from './VideoCarouse';

interface HeroBannerProps {
  videos?: VideoData[];
}

const HeroBanner = ({ videos = [] }: HeroBannerProps) => {
  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full overflow-hidden bg-gray-900">
      {videos.length > 0 ? (
        <>
          <div className="absolute inset-0 z-0">
            <VideoCarousel videos={videos}  />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="w-24 h-24 mx-auto mb-4 border-4 border-gray-700 rounded-lg flex items-center justify-center">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </div>
              <p className="text-sm font-medium">Video Placeholder</p>
              <p className="text-xs mt-1">In-plant movement • Workshop activity • Driver coordination</p>
            </div>
          </div>
        </>
      )}

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white text-sm font-medium">38+ Years of Trusted Service</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your reliable partner in<br />transportation <span className="text-gray-300">since 1986</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Factory-focused, 24/7 logistics with zero production disruption
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-colors duration-200"
            >
              Enquire for Contract Transportation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold rounded-lg border-2 border-white/30 hover:border-white/50 transition-all duration-200"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
