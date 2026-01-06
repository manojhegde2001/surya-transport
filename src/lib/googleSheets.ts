import { google } from 'googleapis';

export async function getGoogleSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client as any });
  
  return sheets;
}

export async function getVideosFromSheet() {
  const sheets = await getGoogleSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: 'Videos!A2:D', // Assuming headers in row 1
  });

  const rows = response.data.values;
  if (!rows || rows.length === 0) {
    return [];
  }

  return rows.map((row, index) => ({
    id: row[0] || `video-${index}`,
    url: row[1] || '',
    title: row[2] || '',
    description: row[3] || '',
  }));
}

export async function appendEnquiryToSheet(data: any) {
  const sheets = await getGoogleSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

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

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Enquiries!A:F',
    valueInputOption: 'USER_ENTERED',
    requestBody: { values },
  });
}
