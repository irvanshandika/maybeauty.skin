import React from "react";
import { Button } from "@mantine/core";
import { useTranslation } from "react-i18next";

function NotFound() {
  const [t] = useTranslation("global");
  return (
    <>
      <section className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">404</h1>
          <p className="text-lg text-gray-800 dark:text-neutral-400">{t("NotFound.deskripsi")}</p>
          <Button component="a" href="/" className="mt-7" size="lg" variant="outline" color="blue">
            {t("NotFound.ctaButton")}
          </Button>
        </div>
      </section>
    </>
  );
}

export default NotFound;
