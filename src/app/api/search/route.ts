import { NextRequest, NextResponse } from "next/server";
import { searchPosts } from "@/lib/wp-api";

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q") || "";
  if (!q.trim()) return NextResponse.json({ posts: [] });
  const posts = await searchPosts(q);
  return NextResponse.json({ posts });
}
