import React from "react";
import AdyenCheckout from "@adyen/adyen-web";
import "@adyen/adyen-web/dist/adyen.css";
import { PaymentContainer } from "./PaymentContainer";

export const Adyen = async () => {
  const config = await fetch(
    `https://my-store-next14-adyen.vercel.app/api/adyen/sessions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((response) => {
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
