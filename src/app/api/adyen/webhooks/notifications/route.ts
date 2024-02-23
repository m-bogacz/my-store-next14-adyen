import { hmacValidator } from "@adyen/api-library";

export async function POST(request: Request) {
  const hmacKey = process.env.HMAC_VERIFY_KEY ?? "";
  const validator = new hmacValidator();

  console.log("validator", validator);
  console.log("hmacKey", hmacKey);

  console.log("request", request);
  return Response.json({ status: 200 });
}
