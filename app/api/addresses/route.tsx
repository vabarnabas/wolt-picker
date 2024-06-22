import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const address = searchParams.get("address");

  if (!address) {
    return new Response("Bad Request", { status: 400 });
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_GEOLOCATION_API_URL}/search?q=${address}&format=json&addressdetails=1&limit=1`
  );
  const data = await response.json();

  if (!data || !data.length) {
    return new Response("Not Found", { status: 404 });
  }

  return Response.json(data[0]);
}
