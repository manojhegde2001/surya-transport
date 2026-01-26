import { NextResponse } from 'next/server';
import { getVideosFromSheet } from '@/lib/googleSheets';

export async function GET() {
  try {
    const videos = await getVideosFromSheet();
    return NextResponse.json({ success: true, data: videos });
  } catch (error) {
    console.error('Error fetching videos:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch videos' },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-dynamic';
