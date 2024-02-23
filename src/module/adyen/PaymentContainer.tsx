"use client";
import AdyenCheckout from "@adyen/adyen-web";
import React, { useEffect } from "react";

interface PaymentContainerProps {
  config: any;
}

export const PaymentContainer = ({ config }: PaymentContainerProps) => {
  useEffect(() => {
    const initAdyen = async () => {
      const checkout = await AdyenCheckout({
        environment: "test",

        clientKey: process.env.CLIENT_KEY_ADYEN ?? "",
        session: {
          id: config.id,
          sessionData: config.sessionData, // The payment session data.
        },
        onPaymentCompleted: (result, component) => {
          console.info(result, component);
        },
      });
      checkout.create("dropin").mount("#dropin-container");
    };

    initAdyen();
  }, [config, config.id, config.sessionData]);

  console.log("config adyen =>", config);
  return <div id="dropin-container">PaymentContainer</div>;
};
