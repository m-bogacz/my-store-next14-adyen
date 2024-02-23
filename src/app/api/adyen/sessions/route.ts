import { getCartFromCookies } from "@/app/actions";
import { ProductsEnity } from "@/types/types";
import { getCartPrice } from "@/utils/getFormatPrice";
import { CheckoutAPI, Client, Config } from "@adyen/api-library";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const config = new Config({
  apiKey:
    "AQEwhmfuXNWTK0Qc+iSdi1csqPaeZo5VGcIeeWFPw3bzyzXG7MU4HzpiVTNo0rU9BaJ0EMFdWw2+5HzctViMSCJMYAc=-1/cIx4H/HWIp9oI6v5zIxPp+eTa7Zv+Rut14bAXiECw=-rCMW5xvyc9pgr??T",
  environment: "TEST",
});
const client = new Client({
  config,
});

export async function POST(request: NextRequest) {
  const cart = getCartFromCookies();
  const price = getCartPrice(cart as unknown as ProductsEnity);

  // console.log(request.headers.);
  // request.body
  // const orders = await cookies().get("cart")?.value;

  const checkout = new CheckoutAPI(client);

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
      value: price,
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
