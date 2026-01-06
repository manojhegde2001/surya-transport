import { NextRequest, NextResponse } from 'next/server';
import { appendEnquiryToSheet } from '@/lib/googleSheets';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    await appendEnquiryToSheet(data);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Enquiry submitted successfully' 
    });
  } catch (error) {
    console.error('Error submitting enquiry:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit enquiry' },
      { status: 500 }
    );
  }
}
