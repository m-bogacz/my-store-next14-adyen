import { clientAdyen } from "@/config/adyen/client";
import { env } from "@/env";
import { CheckoutAPI, Types } from "@adyen/api-library";
import { NextResponse } from "next/server";

export async function POST() {
  const checkout = new CheckoutAPI(clientAdyen);

  if (env.MERCHANT_ACCOUNT_ADYEN) {
    throw new Error("MERCHANT_ACCOUNT_ADYEN is not defined");
  }
  if (env.REFERENCE_SESSIONS_ADYEN) {
    throw new Error("REFERENCE_SESSIONS_ADYEN is not defined");
  }

  const response = await checkout.PaymentsApi.sessions({
    merchantAccount: env.MERCHANT_ACCOUNT_ADYEN,
    amount: {
      currency: "PLN",
      value: 1400,
    },
    countryCode: "PL",
    reference: env.REFERENCE_SESSIONS_ADYEN,
    returnUrl: env.NEXT_PUBLIC_APP_URL + "/success",
    channel: Types.checkout.PaymentSetupRequest.ChannelEnum.Web,
    shopperLocale: "pl-PL",
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.error(`Error: ${err.message}, error code: ${err.errorCode}`);
    });

  return NextResponse.json(response);
}
