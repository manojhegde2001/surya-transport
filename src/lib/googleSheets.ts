// lib/googleSheets.ts

export async function getVideosFromSheet() {
  try {
    const spreadsheetId = '1zGAHV_wZkZXDKWRBUHOTq_keislNMvTq8qwsAR8Asjw';
    const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv&sheet=Videos`;

    // Change from 'no-store' to revalidate for static export
    const response = await fetch(url, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      console.error('Failed to fetch sheet:', response.statusText);
      return [];
    }

    const csvText = await response.text();
    
    // Check if response is actually CSV, not HTML error
    if (csvText.startsWith('<!DOCTYPE') || csvText.startsWith('<html')) {
      console.error('Received HTML instead of CSV');
      return [];
    }
    
    const lines = csvText.trim().split('\n');
    const dataLines = lines.slice(1);

    return dataLines
      .filter(line => line.trim())
      .map((line, index) => {
        const values = line.split(',').map(v => v.replace(/^"|"$/g, '').trim());
        
        return {
          id: values[0] || `video-${index}`,
          url: values[1] || '',
          title: values[2] || '',
          description: values[3] || '',
          thumnail: values[4] || '',
        };
      });
  } catch (error) {
    console.error('Error fetching videos from sheet:', error);
    return [];
  }
}

// This function cannot work with static export - remove it or move to client-side
// For static export, you need to handle form submissions differently:
// Option 1: Use a third-party form service (Formspree, Google Forms embed, etc.)
// Option 2: Call Google Sheets API directly from client-side
// Option 3: Use mailto: links
export async function appendEnquiryToSheet(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  // This will NOT work with output: 'export'
  // You must either:
  // 1. Remove this function and use client-side alternative
  // 2. Upgrade to Firebase Blaze plan
  
  throw new Error('Server-side API calls not supported in static export. Use client-side Google Sheets API or third-party form service.');
}
