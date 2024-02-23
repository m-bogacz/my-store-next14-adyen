import { Client } from "@adyen/api-library";

export const clientAdyen = new Client({
  apiKey: process.env.API_KEY_ADYEN ?? "test_EXV25GBNCZDHRCZSGIZG7EORRMMACP46",
  environment: "TEST",
});
