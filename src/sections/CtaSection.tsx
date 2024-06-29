/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

function CtaSection() {
  const { t, i18n } = useTranslation("global");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="lg:w-[1158px] lg:h-[447px] size-[360px] relative bg-[#F29393] bg-opacity-20 lg:rounded-[60px] rounded-3xl gap-10">
          <img
            className="absolute lg:w-[183.86px] lg:h-[176.35px] size-[80px] lg:translate-x-[-30px] lg:translate-y-[-53px]"
            src="https://res.cloudinary.com/dszhlpm81/image/upload/v1718509679/assets/phKFNpB7tMHUeEMuMCiMoTyH4rJTs3vp/Graphic_Elements_b6nq3m.png"
            alt="Decoration"
            fetchPriority="high"
            loading="lazy"
          />
          <div className="flex flex-col justify-center items-center h-full gap-8">
            <h2 className="lg:text-2xl text-xl font-bold text-[#F675A8] lg:leading-7 lg:tracking-widest">CHECK OUT NOW!</h2>
            <h2 className="lg:text-5xl text-lg font-bold text-center lg:leading-10">{t("CtaSection.deskripsi")}</h2>
            <div className="flex justify-center items-center gap-4">
              <button className="lg:w-[336px] lg:px-16 px-11 lg:py-8 py-4 self-stretch lg:text-xl bg-indigo-800 hover:bg-indigo-700 lg:rounded-[32px] rounded-3xl justify-center items-center gap-4 flex text-white">{t("CtaSection.ctaButton")}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CtaSection;
