// import { env } from "@/env";
// import { hmacValidator } from "@adyen/api-library";
import { NextRequest } from "next/server";
import { Body } from "./types";
import { cookies } from "next/headers";

export async function POST(request: NextRequest, response: Response) {
  const body = (await request.json()) as Body;
  // const hmacKey = env.HMAC_VERIFY_KEY;
  // const validator = new hmacValidator();

  // console.log("validator", validator);
  // console.log("hmacKey", hmacKey);
  if (
    body.notificationItems[0].NotificationRequestItem.success === "true" &&
    body.notificationItems[0].NotificationRequestItem.eventCode ===
      "AUTHORISATION"
  ) {
    console.log("success", body.notificationItems);
    cookies().set("cartId", "");
  }
  // console.log("request", request);
  console.log(
    "test request",
    body.notificationItems[0].NotificationRequestItem.success
  );

  return Response.json({ status: 200 });
}
