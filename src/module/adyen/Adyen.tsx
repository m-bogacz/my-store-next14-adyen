import React from "react";

import { PaymentContainer } from "./PaymentContainer";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

export const Adyen = async () => {
  const config = await fetch(`${APP_URL}/api/adyen/sessions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.error(`Error: ${err.message}, error code: ${err.errorCode}`);
    });

  return (
    <div className="flex flex-2">
      <PaymentContainer config={config} />
    </div>
  );
};
