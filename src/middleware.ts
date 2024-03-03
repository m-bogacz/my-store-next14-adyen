import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // const cookie = request.cookies.get("cartId");
  // if (!cookie) {
  //   return NextResponse.next();
  // }
  // const response = NextResponse.next();
  // response.cookies.set({
  //   name: cookie?.name,
  //   value: cookie?.value,
  //   httpOnly: true,
  // });
  // return response;
}
