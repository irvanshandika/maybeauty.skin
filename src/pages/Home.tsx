/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import Hero from "@sections/Hero";
import Sponsor from "@sections/Sponsor";
import Pelayanan from "@sections/Pelayanan";
import Produk from "@sections/Produk";
import StorePoint from "@sections/StorePoint";
import Testimoni from "@sections/Testimoni";
import Location from "@sections/Location";
import CtaSection from "@sections/CtaSection";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function Home() {
  const { t, i18n } = useTranslation("global");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  return (
    <>
      <Helmet>
        <title>{t("Home.title")} | MayBeautySkin</title>
        <meta name="description" content={t("Home.deskripsi")} />
      </Helmet>
      <Hero />
      <Sponsor />
      <Pelayanan />
      <Produk />
      <StorePoint />
      <Testimoni />
      <Location />
      <CtaSection />
    </>
  );
}

export default Home;
