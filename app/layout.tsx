/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import PrelineScript from "@components/PrelineScript";

const APP_NAME = "Selamat Datang Di MayBeautySkin | MayBeautySkin";
const APP_DEFAULT_TITLE = "Selamat Datang Di MayBeautySkin | MayBeautySkin";
const APP_TITLE_TEMPLATE = "%s - MayBeautySkin";
const APP_DESCRIPTION = "Selamat Datang Di MayBeautySkin";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/solid.css" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/thinline.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora&amp;display=swap" />
      </head>
      <body className="font-sora">
        <MantineProvider>{children}</MantineProvider>
        <PrelineScript />
        <script src="https://unicons.iconscout.com/release/v4.0.8/script/monochrome/bundle.js" />
      </body>
    </html>
  );
}
