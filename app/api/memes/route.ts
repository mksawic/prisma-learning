import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title");

  const memes = await prisma.memes.findMany({
    where: { title: { contains: title ?? "", mode: "insensitive" } },
    orderBy: { created_at: "desc" },
  });
  return NextResponse.json(memes);
}

export async function POST(request: Request) {
  try {
    const { title, url } = await request.json();

    if (!title || !url)
      return NextResponse.json(
        { message: "Missing title or image url!" },
        { status: 400 }
      );

    const meme = await prisma.memes.create({ data: { title, image_url: url } });

    return NextResponse.json(meme, { status: 201 });
  } catch {}
}
