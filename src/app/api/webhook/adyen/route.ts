import { hmacValidator } from "@adyen/api-library";

export async function POST(request: Request) {
  const hmacKey = process.env.HMAC_VERIFY_KEY ?? "";
  const validator = new hmacValidator();

  const signature = request.headers.get("adyen-signature");

  console.log("signature", signature);
  console.log("validator", validator);
  console.log("hmacKey", hmacKey);

  console.log("request", request);
  return Response.json({ status: 200 });
}
