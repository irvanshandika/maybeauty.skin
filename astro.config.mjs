import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    react(), 
    sentry({
      dsn: "https://f60b0da08f5b306dfcac62db58462a59@o4506924345393152.ingest.us.sentry.io/4506925173112832",
      sourceMapsUploadOptions: {
        project: "e-commerce",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ]
});