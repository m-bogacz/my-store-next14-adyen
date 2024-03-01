import { clientAdyen } from "@/config/adyen/client";
import { loadEnvConfig } from "@next/env";
import { env } from "@/env";
import { CheckoutAPI, Types } from "@adyen/api-library";
import { NextResponse } from "next/server";

loadEnvConfig(process.cwd());

export async function POST() {
  const checkout = new CheckoutAPI(clientAdyen);

  const response = await checkout.PaymentsApi.sessions({
    merchantAccount: env.MERCHANT_ACCOUNT_ADYEN,
    amount: {
      currency: "PLN",
      value: 1400,
    },
    countryCode: "PL",
    reference: env.REFERENCE_SESSIONS_ADYEN,
    returnUrl: env.NEXT_PUBLIC_APP_URL,
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
