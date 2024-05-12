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
        authToken:
          "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",
        // authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
});
