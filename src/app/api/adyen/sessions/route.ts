import { clientAdyen } from "@/api/adyen/client";
import { CheckoutAPI, Client } from "@adyen/api-library";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log("request => ", request);
  const clientAdyen = new Client({
    apiKey:
      process.env.API_KEY_ADYEN ??
      "AQEwhmfuXNWTK0Qc+iSdi1csqPaeZo5VGcIeeWFPw3bzyzXG7MU4HzpiVTNo0rU9BaJ0EMFdWw2+5HzctViMSCJMYAc=-VvDyLa9c1lGR8IJXj/hIAkftDOXOhjNsBEbSVA3qFtg=-PxUJ5HY;N7hKxUNu",
    environment: "TEST",
  });
  // console.log(request.headers.);
  // request.body
  // const orders = await cookies().get("cart")?.value;

  const checkout = new CheckoutAPI(clientAdyen);

  // if (process.env.MERCHANT_ACCOUNT_ADYEN) {
  //   throw new Error("MERCHANT_ACCOUNT_ADYEN is not defined");
  // }
  // if (process.env.REFERENCE_SESSIONS_ADYEN) {
  //   throw new Error("REFERENCE_SESSIONS_ADYEN is not defined");
  // }

  const response = await checkout.PaymentsApi.sessions({
    merchantAccount:
      process.env.MERCHANT_ACCOUNT_ADYEN || "MyStoreNext14Adyen853ECOM",
    amount: {
      currency: "PLN",
      value: 1000,
    },
    countryCode: "PL",
    reference: process.env.REFERENCE_SESSIONS_ADYEN || "853",
    returnUrl: "https://my-store-next14-adyen.vercel.app" + "/success",
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.error(`Error: ${err.message}, error code: ${err.errorCode}`);
    });

  return NextResponse.json(response);
}
