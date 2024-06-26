/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Location() {
  const { t, i18n } = useTranslation("global");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);
  return (
    <>
      <section className="my-14" id="location">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 lg:py-24 py-[-200px]">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
            <div className="order-1 lg:order-2 lg:mt-0 mt-[200px]">
              <p className="mt-3 text-lg lg:translate-x-[3vw] text-[#F675A8] font-semibold lg:text-left text-center uppercase">{t("Location.location")}</p>
              <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight lg:translate-x-[3vw] lg:text-left text-center">{t("Location.subjudul")}</h1>
              <p className="mt-6 text-lg text-gray-400 lg:translate-x-[3vw] lg:text-left text-center">{t("Location.address")}</p>
            </div>
            <div className="relative ms-4 order-1 lg:order-2 lg:overflow-x-visible overflow-x-hidden">
              <img
                className="lg:w-full lg:h-full w-[393px] h-[365px] rounded-xl lg:translate-x-0 translate-x-[40px] z-0"
                src="https://res.cloudinary.com/dszhlpm81/image/upload/v1718787270/assets/phKFNpB7tMHUeEMuMCiMoTyH4rJTs3vp/Frame_115_1_i7hb8b.png"
                alt="Lokasi"
                fetchPriority="high"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Location;
