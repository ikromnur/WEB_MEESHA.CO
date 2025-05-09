import authHandler from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { RequestWithAuth } from "@/types/next-auth";

export default authHandler((req: NextRequest) => {
  const request = req as RequestWithAuth;

  const { nextUrl } = request;
  const isLoggedIn = !!request.auth?.user;
  const protectedRoutes = ["/dashboard"];

  if (!isLoggedIn && protectedRoutes.includes(nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isLoggedIn && nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard"],
};
