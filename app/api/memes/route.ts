import { NextResponse } from "next/server";

export async function GET(request: Request) {
  /* Return all memes filtered by title and ordered by create_at */

  return NextResponse.json([]);
}

export async function POST(request: Request) {
  /* Add new meme into db. Return newly created meme with 201 http status */

  return NextResponse.json({});
}
