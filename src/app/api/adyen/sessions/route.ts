import { clientAdyen } from "@/config/adyen/client";
import { loadEnvConfig } from "@next/env";
import { env } from "@/env";
import { CheckoutAPI, Types } from "@adyen/api-library";
import { NextRequest, NextResponse } from "next/server";
import { getCart } from "@/api/cart/api";

loadEnvConfig(process.cwd());

export async function POST() {
  const cart = await getCart();

  if (!cart) {
    return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
  }

  const total = cart.orderItem.reduce((acc, item) => {
    if (!item.product) {
      return 0;
    }
    return acc + item.product.price * item.quantity;
  }, 0);

  const checkout = new CheckoutAPI(clientAdyen);

  const response = await checkout.PaymentsApi.sessions({
    merchantAccount: env.MERCHANT_ACCOUNT_ADYEN,
    amount: {
      currency: "PLN",
      value: total,
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
