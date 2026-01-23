'use client';

import { VideoData } from '@/lib/types';
import VideoCarousel from './VideoCarouse';

interface VideoSectionProps {
  videos?: VideoData[];
}

const VideoSection = ({ videos = [] }: VideoSectionProps) => {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Inside Our Operations
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Experience our factory-focused logistics in action
          </p>
        </div>

        {videos.length > 0 ? (
          <VideoCarousel videos={videos} />
        ) : (
          <div className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden border-2 border-gray-700">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
              <div className="w-20 h-20 mb-4 border-4 border-gray-600 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </div>
              <p className="text-lg font-medium">Video Placeholder</p>
              <p className="text-sm mt-2">Embedded video will be added here</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
