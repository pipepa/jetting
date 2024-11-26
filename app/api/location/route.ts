export async function POST(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0].trim() : ''

  try {
    // Fetch the location data using the detected IP address
    // Note: The example uses a free IP location service (ip-api.com) that does not require an API key.
    // Be mindful of the service's terms of use and consider using a key if needed for your use case.
    const response = await fetch(`http://ip-api.com/json/${ip}`, {
      method: 'GET',
    })

    if (!response.ok) {
      throw new Error('Failed to fetch location data')
    }

    const data = await response.json()

    // Check if the IP location service returned an error
    if (data.status !== 'success') {
      throw new Error(data.message || 'Unknown error occurred while fetching IP location data')
    }

    // Respond with the location data
    return Response.json(data, {
      status: 200,
    })
  } catch (error) {
    console.error('Error fetching location data:', error)
    return new Response('Failed to fetch search results', {
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
  