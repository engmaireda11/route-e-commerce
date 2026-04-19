import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const myPath = request.nextUrl.pathname;
  const protectedRoutes = ["/allorders", "/checkout", "/profile"];
  const authRoute = ["/login", "/register"];

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NODE_ENV === "production",
  });

  if (!token && protectedRoutes.some((path) => myPath.startsWith(path))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (token && authRoute.some((path) => myPath.startsWith(path))) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (token && myPath == "/profile") {
    return NextResponse.redirect(new URL("/profile/address", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/order/:path*", "/checkout/:path*", "/profile/:path*","/login", "/register"],
};
