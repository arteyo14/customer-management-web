import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get("is_logged_in")?.value === "true";
  const { pathname } = request.nextUrl;

  if (!isLoggedIn && pathname.startsWith("/customer")) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (isLoggedIn && pathname === "/auth/login") {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
