import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon) {
    return new Response("Bad Request", { status: 400 });
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_RESTAURANT_API_URL}/v1/pages/restaurants?lat=${lat}&lon=${lon}`
  );
  const data = await response.json();

  if (data.sections.length !== 2) {
    return new Response("Bad Request", { status: 400 });
  }

  return Response.json(data);
}
