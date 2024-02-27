import { Client, Config } from "@adyen/api-library";
import { env } from "@/env";

console.log("API_KEY_ADYEN =>", env.API_KEY_ADYEN);
const config = new Config({
  apiKey: env.API_KEY_ADYEN,
  environment: "TEST",
});

export const clientAdyen = new Client({
  config,
});
