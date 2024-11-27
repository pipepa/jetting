import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    console.log('Received data from POST request:', data);

    const filePath = path.join(process.cwd(), 'received_data.json');
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');

    return NextResponse.json({
      message: 'Data received and saved successfully',
      receivedData: data,
      filePath: filePath
    });
  } catch (error) {
    console.error('Error handling POST request:', error);

    return NextResponse.json(
      { error: 'An error occurred while processing the request' },
      { status: 500 }
    );
  }
}
