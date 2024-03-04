"use client";
import React, { useEffect, useRef, useState } from "react";
import AdyenCheckout from "@adyen/adyen-web";
import { env } from "@/env";
import "@adyen/adyen-web/dist/adyen.css";
import { useRouter } from "next/navigation";
import { revalidatePath, revalidateTag } from "next/cache";

interface PaymentContainerProps {
  config: any;
}

export const PaymentContainer = ({ config }: PaymentContainerProps) => {
  const router = useRouter();
  const paymentContainer = useRef<HTMLDivElement | null>(null);

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
        onPaymentCompleted: (result) => {
          if (result.resultCode === "Authorised") {
            router.push(
              `/cart/success?resultCode=${result.resultCode}?id=${config.id}`
            );
            revalidatePath("/");
          }
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
  }, [config, paymentContainer, router]);

  return <div ref={paymentContainer}></div>;
};
