import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { headers } from "next/headers";

export function middleware(request: NextRequest) {
  const heads = headers();
  const beforePath = heads.get("referer")?.split("/").pop();

  const response = NextResponse.next();

  if (request.nextUrl.pathname === "/cart/success" && beforePath === "cart") {
    response.cookies.set({
      name: "cartId",
      value: "",
      httpOnly: true,
    });
  }

  return response;
}

export const config = {
  matcher: "/cart/:path*",
};
