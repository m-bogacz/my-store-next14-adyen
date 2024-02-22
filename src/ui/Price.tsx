import { getFormatPrice } from "@/utils/getFormatPrice";
import React from "react";

export const Price = ({ price }: { price: number }) => {
  return <div className="text-slate-500">{getFormatPrice(price)}</div>;
};
