"use client";
import AdyenCheckout from "@adyen/adyen-web";
import "@adyen/adyen-web/dist/adyen.css";

import React, { useEffect, useRef } from "react";

interface PaymentContainerProps {
  config: any;
}

const APP_URL =
  process.env.APP_URL ?? "https://my-store-next14-adyen.vercel.app";

export const PaymentContainer = ({ config }: PaymentContainerProps) => {
  const paymentContainer = useRef<HTMLDivElement | null>(null);

  console.log("paymentContainer", config);

  useEffect(() => {
    const initAdyen = async () => {
      const checkout = await AdyenCheckout({
        environment: "test",

        clientKey:
          process.env.CLIENT_KEY_ADYEN ??
          "test_EXV25GBNCZDHRCZSGIZG7EORRMMACP46",
        session: {
          id: config.id,
          sessionData: config.sessionData, // The payment session data.
        },
        onPaymentCompleted: (result, component) => {
          console.info(result, component);
        },
      });

      if (paymentContainer.current) {
        checkout.create("dropin").mount(paymentContainer.current);
      }

      initAdyen();
    };
  }, [config, config.id, config.sessionData]);

  return (
    <>
      <div ref={paymentContainer}></div>
      <div>PaymentContainer</div>
    </>
  );
};

// ??
//   "test_EXV25GBNCZDHRCZSGIZG7EORRMMACP46",
