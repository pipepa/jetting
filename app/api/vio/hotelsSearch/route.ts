import { DateObject } from "react-multi-date-picker"

export async function POST(request: Request) {
  const language = 'en'
  const currency = 'USD'

  const reqData = await request.json()
  const searchTerm = reqData.searchTerm
  const dates = reqData.dates
  const limit = reqData.limit
  const sortField = reqData.sortField
  const sortOrder = reqData.sortOrder

  const url = 'https://partners.api.vio.com/v1/search'
  const body: {
    query: {
      place: {
        name: string;
      };
    };
    currency: string;
    language: string;
    rooms: string;
    pageSize: number;
    sortField: string;
    sortOrder: string;
    attributes: string[];
    checkIn?: string;
    checkOut?: string;
  } = {
    query: {
      place: {
        name: searchTerm,
      },
    },
    currency: currency,
    language: language,
    rooms: '1',
    pageSize: limit,
    sortField: sortField,
    sortOrder: sortOrder,
    attributes: ["availableHotelsCount"]
  }
  const checkIn = dates?.[0] ? new DateObject(dates[0]).format('YYYY-MM-DD') : null
  if (checkIn) {
    body.checkIn = checkIn
  }
  const checkOut = dates?.[1] ? new DateObject(dates[1]).format('YYYY-MM-DD') : null
  if (checkOut) {
    body.checkOut = checkOut
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Partner-Key': process.env.VIO_PARTNER_KEY ? process.env.VIO_PARTNER_KEY : ''
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error(`Error fetching hotels: ${response.statusText}`)
    }

    const data = await response.json()
    return Response.json(data, {
      status: 200,
    })
  } catch (error) {
    console.error('Failed to fetch hotels:', error)
    return new Response('Failed to fetch hotels', {
      status: 500,
    })
  }
}

export async function GET() {
  return new Response('Method GET Not Allowed', {
    status: 405,
    headers: { 'Allow': `${['POST']}` },
  })
}