"use client";
import React, { useEffect, useRef } from "react";
import AdyenCheckout from "@adyen/adyen-web";
import { env } from "@/env";
import "@adyen/adyen-web/dist/adyen.css";

interface PaymentContainerProps {
  config: any;
}

export const PaymentContainer = ({ config }: PaymentContainerProps) => {
  const paymentContainer = useRef<HTMLDivElement | null>(null);

  console.log("paymentContainer", config);

  useEffect(() => {
    const initAdyen = async () => {
      console.log("init adyen");
      const checkout = await AdyenCheckout({
        environment: "test",
        clientKey: env.NEXT_PUBLIC_CLIENT_KEY_ADYEN,
        session: {
          id: config.id,
          sessionData: config.sessionData,
        },
        onPaymentCompleted: (result, component) => {
          console.info(result, component);
        },
        onError: (error) => {
          console.error(error);
        },
      });

      if (paymentContainer.current) {
        checkout.create("dropin").mount(paymentContainer.current);
      }
    };

    initAdyen();
  }, [config, paymentContainer]);

  return <div ref={paymentContainer}></div>;
};
