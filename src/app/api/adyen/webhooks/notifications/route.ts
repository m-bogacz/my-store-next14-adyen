// import { env } from "@/env";
// import { hmacValidator } from "@adyen/api-library";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  // const hmacKey = env.HMAC_VERIFY_KEY;
  // const validator = new hmacValidator();

  // console.log("validator", validator);
  // console.log("hmacKey", hmacKey);

  console.log("request", request.body);
  return Response.json({ status: 200 });
}
