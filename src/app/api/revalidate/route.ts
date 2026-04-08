import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  const secret = process.env.REVALIDATE_TOKEN;

  if (!secret || token !== secret) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const slug = body?.post_name || body?.slug;

    if (slug) {
      revalidatePath(`/${slug}/`);
      revalidatePath(`/${slug}`);
    }
    // Always revalidate homepage and blog
    revalidatePath("/");
    revalidatePath("/blog/");

    return NextResponse.json({
      revalidated: true,
      slug: slug || "all",
      time: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json({ message: "Error", error: String(err) }, { status: 500 });
  }
}

// Also support GET for easy testing
export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  if (token !== process.env.REVALIDATE_TOKEN) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  revalidatePath("/");
  revalidatePath("/blog/");
  return NextResponse.json({ revalidated: true, time: new Date().toISOString() });
}
