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
    <div>
      <PaymentContainer config={config} />
      <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 transform rounded-b-sm m-5 transition-transform rounded-md p-5 hover:scale-105">
        checkout
      </button>
    </div>
  );
};
