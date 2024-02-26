import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/home")) {
    return NextResponse.next();
  }

  

  return NextResponse.next();
}
