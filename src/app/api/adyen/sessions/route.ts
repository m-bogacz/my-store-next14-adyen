import { clientAdyen } from "@/api/adyen/client";
import { hmacValidator, CheckoutAPI } from "@adyen/api-library";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const checkout = new CheckoutAPI(clientAdyen);

  if (process.env.MERCHANT_ACCOUNT_ADYEN) {
    throw new Error("MERCHANT_ACCOUNT_ADYEN is not defined");
  }
  if (process.env.REFERENCE_SESSIONS_ADYEN) {
    throw new Error("REFERENCE_SESSIONS_ADYEN is not defined");
  }

  const response = await checkout.PaymentsApi.sessions({
    merchantAccount: process.env.MERCHANT_ACCOUNT_ADYEN || "",
    amount: {
      currency: "PLN",
      value: 1000,
    },
    countryCode: "PL",
    reference: process.env.REFERENCE_SESSIONS_ADYEN || "",
    returnUrl: process.env.APP_URL + "/success",
    shopperLocale: "pl-PL",
  })
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((e) => {
      console.log("error", e);
    });

  return Response.json(response);
}
