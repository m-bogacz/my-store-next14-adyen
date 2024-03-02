import React from "react";
import { PaymentContainer } from "./PaymentContainer";
import { cookies } from "next/headers";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

export const Adyen = async () => {
  const cartId = cookies().get("cartId")?.value;
  const config = await fetch(`${APP_URL}/api/adyen/sessions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `cartId=${cartId}`,
      credentials: "include",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.error(`Error: ${err.message}, error code: ${err.errorCode}`);
    });

  return <PaymentContainer config={config} />;
};
