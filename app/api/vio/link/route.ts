import { DateObject } from "react-multi-date-picker";

type RequestBody = {
  language?: string
  currency?: string
  query?: string
  checkIn?: string
  checkOut?: string
  rooms?: string
  homePageLinkParams?: any
}

export async function POST(request) {
  const { searchData } = await request.json()
  const { toPlace, dates/*, passengerCounts*/ } = searchData

  let url = "https://partners.api.vio.com/v1/location-links"

  let requestBody: RequestBody
  if (toPlace.name) {
    requestBody = {
      ...requestBody,
      query: toPlace.name,
      language: "en",
      currency: "USD",
    }
    if (dates?.length > 0) {
      const checkIn = new DateObject(dates[0]).format("YYYY-MM-DD")
      const checkOut = dates[1] ? new DateObject(dates[1]).format("YYYY-MM-DD") : new DateObject(dates[0]).add(1, "day").format("YYYY-MM-DD")
  
      requestBody = {
        ...requestBody,
        checkIn: checkIn,
        checkOut: checkOut,
        rooms: "1", // Assuming 1 room for now, you may want to calculate this based on passengerCounts
      }
    }
  } else {
    url = "https://partners.api.vio.com/v1/build-links"
    requestBody = {
      ...requestBody,
      homePageLinkParams: {
        label: "redirectLink",
      }
    }
  }

  const headers = {
    "Content-Type": "application/json",
    "X-Partner-Key": process.env.VIO_PARTNER_KEY ? process.env.VIO_PARTNER_KEY : '',
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error("API response was not ok");
    }

    const data = await response.json()
    return Response.json(data, {
      status: 200,
    })
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Error generating vio link" }, { status: 500 });
  }
}

export async function GET() {
  return new Response('Method GET Not Allowed', {
    status: 405,
    headers: { 'Allow': `${['POST']}` },
  })
}
