import { Client } from "@adyen/api-library";

export const clientAdyen = new Client({
  apiKey:
    process.env.API_KEY_ADYEN ??
    "AQEwhmfuXNWTK0Qc+iSdi1csqPaeZo5VGcIeeWFPw3bzyzXG7MU4HzpiVTNo0rU9BaJ0EMFdWw2+5HzctViMSCJMYAc=-VvDyLa9c1lGR8IJXj/hIAkftDOXOhjNsBEbSVA3qFtg=-PxUJ5HY;N7hKxUNu sdasdas",
  environment: "TEST",
});
