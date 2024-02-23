import { Client } from "@adyen/api-library";

export const clientAdyen = new Client({
  apiKey: process.env.API_KEY_ADYEN ?? "",
  environment: "TEST",
});
