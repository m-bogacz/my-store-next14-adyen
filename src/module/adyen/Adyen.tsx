import React from "react";

import { PaymentContainer } from "./PaymentContainer";

const APP_URL =
  process.env.APP_URL ?? "https://my-store-next14-adyen.vercel.app";

export const Adyen = async () => {
  const config = await fetch(`${APP_URL}/api/adyen/sessions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });

  return (
    <div>
      <PaymentContainer config={config} />
      <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 transform rounded-b-sm m-5 transition-transform rounded-md p-5 hover:scale-105">
        checkout
      </button>
    </div>
  );
};
