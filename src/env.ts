import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    GRAPHQL_URL: z.string().url(),
    PERMANENT_AUTH_TOKEN: z.string().min(1),
    API_KEY_ADYEN: z.string().min(1),
    HMAC_VERIFY_KEY: z.string().min(1),
    MERCHANT_ACCOUNT_ADYEN: z.string().min(1),
    REFERENCE_SESSIONS_ADYEN: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    NEXT_PUBLIC_CLIENT_KEY_ADYEN: z.string().min(1),
  },

  runtimeEnv: {
    GRAPHQL_URL: process.env.GRAPHQL_URL,
    PERMANENT_AUTH_TOKEN: process.env.PERMANENT_AUTH_TOKEN,
    API_KEY_ADYEN: process.env.API_KEY_ADYEN,
    HMAC_VERIFY_KEY: process.env.HMAC_VERIFY_KEY,
    MERCHANT_ACCOUNT_ADYEN: process.env.MERCHANT_ACCOUNT_ADYEN,
    REFERENCE_SESSIONS_ADYEN: process.env.REFERENCE_SESSIONS_ADYEN,
    NEXT_PUBLIC_CLIENT_KEY_ADYEN: process.env.NEXT_PUBLIC_CLIENT_KEY_ADYEN,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
});
