import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

// Middleware function
export async function middleware(req: NextRequest) {
  const address = cookies().get("wallet-address");

  // Declare public and protected routes
  const publicRoutes = ["/properties", "/how-it-works", "/"];
  const protectedRoutes = ["/home"];

  // Determine if current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some((route) =>
    path.startsWith(route)
  );
  const isPublicRoute = publicRoutes.includes(path);

  // Redirect if user is not authenticated
  if (isProtectedRoute && !address) {
    return NextResponse.redirect(new URL("/?showAuthDialog=true&initialPage=sign-in", req.nextUrl));
  }

  // Redirect if user is authenticated and trying to access public route
  // if (isPublicRoute && address) {
  //   return NextResponse.redirect(new URL("/home", req.nextUrl));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Apply middleware to all paths except those containing '/api', the landing page '/', and other specified ones
    "/((?!api|/api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|^$).*)",
  ],
};
