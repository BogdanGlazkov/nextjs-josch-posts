import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const mySearchParams = searchParams.get("search");
  console.log("GET REQUEST", mySearchParams);
  return new Response(JSON.stringify({ name: "John" }), { status: 401 });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("POST REQUEST", body);
  return new Response("OK");
}
