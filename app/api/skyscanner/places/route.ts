export async function POST(request: Request) {
  const reqData = await request.json()
  const market = 'US'
  const locale = 'en-US'
  const searchTerm = reqData.searchTerm

  const url = 'https://partners.api.skyscanner.net/apiservices/v3/autosuggest/flights'
  const body = {
    query: {
      market,
      locale,
      searchTerm
    }
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.SKYSCANNER_API_KEY ? process.env.SKYSCANNER_API_KEY : ''
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error(`Error fetching places: ${response.statusText}`)
    }

    const data = await response.json()
    return Response.json(data, {
      status: 200,
    })
  } catch (error) {
    console.error('Failed to fetch places:', error)
    return new Response('Failed to fetch places', {
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