// lib/googleSheets.ts

export async function getVideosFromSheet() {
  try {
    const spreadsheetId = '1zGAHV_wZkZXDKWRBUHOTq_keislNMvTq8qwsAR8Asjw';
    const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv&sheet=Videos`;

    const response = await fetch(url, {
      cache: 'no-store',
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
export async function appendEnquiryToSheet(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  try {
    const spreadsheetId = '1zGAHV_wZkZXDKWRBUHOTq_keislNMvTq8qwsAR8Asjw';
    const apiKey = process.env.GOOGLE_API_KEY;
    
    if (!apiKey) {
      throw new Error('Google API key not configured');
    }

    const range = 'Enquiries!A:F';
    const values = [
      [
        new Date().toISOString(),
        data.name,
        data.email,
        data.phone,
        data.service,
        data.message,
      ],
    ];

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED&key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ values }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error appending:', errorText);
      throw new Error(`Failed to append: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error appending enquiry to sheet:', error);
    throw error;
  }
}
