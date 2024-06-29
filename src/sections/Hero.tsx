/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t, i18n } = useTranslation("global");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  return (
    <>
      <section className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://res.cloudinary.com/dszhlpm81/image/upload/v1717653450/assets/phKFNpB7tMHUeEMuMCiMoTyH4rJTs3vp/Ellipse_23_nwdmxi.png")' }}>
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
            <div className="order-2 lg:order-1 lg:mt-0 mt-[200px]">
              <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight lg:translate-x-[3vw]">
                {t("hero.judul1")} <span className="text-[#F675A8]">{t("hero.hightlight")}</span> {t("hero.judul2")}
              </h1>
              <p className="mt-3 text-lg lg:translate-x-[3vw] text-gray-800 dark:text-neutral-400">{t("hero.deskripsi")}</p>

              <div className="mt-7 grid gap-3 w-full sm:inline-flex lg:translate-x-[3vw]">
                <a
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#554994] text-white hover:bg-[#6556b3] disabled:opacity-50 disabled:pointer-events-none"
                  href="#">
                  {t("hero.ctaButton")}
                </a>
              </div>
            </div>

            <div className="relative ms-4 order-1 lg:order-2">
              <div className="z-30">
                <img
                  className="translate-y-[5vh] lg:-translate-x-12 translate-x-0 absolute w-[150vw]"
                  src="https://res.cloudinary.com/dszhlpm81/image/upload/v1717653450/assets/phKFNpB7tMHUeEMuMCiMoTyH4rJTs3vp/Frame_82_tawwk6.png"
                  alt="background image"
                  fetchPriority="high"
                  loading="lazy"
                />
                <img
                  className="relative w-full z-0 rounded-md translate-y-[25vh]"
                  src="https://res.cloudinary.com/dszhlpm81/image/upload/v1717653451/assets/phKFNpB7tMHUeEMuMCiMoTyH4rJTs3vp/Frame_15_cxgltb.png"
                  alt="Image Description"
                  fetchPriority="high"
                  loading="lazy"
                />
              </div>
              <div className="z-20 lg:translate-y-[90px] translate-y-[180px] lg:translate-x-[200px] translate-x-[70px] bg-white lg:w-[150px] w-[150px] py-4 rounded-full">
                <p className="text-black flex ml-4">
                  <svg width="18" height="20" className="mr-2" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.5 8.3178C0.5 3.71789 4.34388 0 8.9934 0C13.6561 0 17.5 3.71789 17.5 8.3178C17.5 10.6357 16.657 12.7876 15.2695 14.6116C13.7388 16.6235 11.8522 18.3765 9.7285 19.7524C9.2425 20.0704 8.8039 20.0944 8.2704 19.7524C6.13474 18.3765 4.24809 16.6235 2.7305 14.6116C1.34198 12.7876 0.5 10.6357 0.5 8.3178ZM6.19423 8.5768C6.19423 10.1177 7.4517 11.3297 8.9934 11.3297C10.5362 11.3297 11.8058 10.1177 11.8058 8.5768C11.8058 7.0478 10.5362 5.77683 8.9934 5.77683C7.4517 5.77683 6.19423 7.0478 6.19423 8.5768Z"
                      fill="#FFCCB3"></path>
                  </svg>
                  Top Place
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
