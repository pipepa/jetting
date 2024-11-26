import { DateObject } from "react-multi-date-picker"

export async function POST(request: Request) {
  const language = 'en'
  const currency = 'USD'

  const reqData = await request.json()
  const searchTerm = reqData.toPlace?.iataCode
  const dates = reqData.dates ?? []
  const travelersCount = reqData.travelersCount
  const pageSize = reqData.pageSize
  const sortField = reqData.sortField
  const sortOrder = reqData.sortOrder
  const sessionToken = reqData.sessionToken
  const filters = reqData.filters ?? {}
  const url = 'https://partners.api.vio.com/v1/search/poll'

  // Create rooms configuration string
  const createRoomsConfig = (travelers: any) => {
    const { Adults = 0, Children = 0 } = travelers;
    // Create children ages string (all set to 0)
    const childrenAges = Children > 0 ? `:${Array(Children).fill(14).join(',')}` : '';
    return `${Adults}${childrenAges}`;
  };

  const body = {
    checkIn: new DateObject(dates[0]).format('YYYY-MM-DD'),
    checkOut: new DateObject(dates[1]).format('YYYY-MM-DD'),
    query: {
      place: {
        name: searchTerm,
      },
    },
    currency: currency,
    language: language,
    rooms: createRoomsConfig(travelersCount),
    pageSize: pageSize,
    sortField: sortField,
    sortOrder: sortOrder,
    attributes: ["availableHotelsCount"],
    sessionId: sessionToken ? sessionToken : '',
    filters: filters
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