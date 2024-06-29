/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { Card } from "@mantine/core";
import { useTranslation } from "react-i18next";

function StorePoint() {
  const { t, i18n } = useTranslation("global");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);
  return (
    <>
      <section className="my-14 overflow-x-hidden" id="storepoint">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto my-10 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="lg:translate-x-[6vw] place-self-center lg:mt-0 mt-10 lg:col-span-7 order-1 lg:order-2">
            <p className="mt-3 text-lg font-bold text-[#F675A8]">Store Point</p>
            <h2 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">{t("StorePoint.judul")}</h2>
            <p className="mt-4 text-lg text-gray-600">{t("StorePoint.deskripsi")}</p>
            <div className="w-96 h-80 flex-col justify-center items-center gap-8 inline-flex">
              <div className="self-stretch justify-center items-center lg:gap-8 gap-4 inline-flex mt-[100px] lg:mr-0 mr-5">
                <Card shadow="sm" padding="50px" radius="32" withBorder>
                  <div className="flex flex-col justify-center items-center">
                    <h2 className="font-bold text-[#F29393]">200+</h2>
                    <p className="font-normal">{t("StorePoint.produk")}</p>
                  </div>
                </Card>
                <Card shadow="sm" padding="50px" radius="32" withBorder>
                  <div className="flex flex-col justify-center items-center">
                    <h2 className="font-bold text-[#F29393]">35+</h2>
                    <p className="font-normal text-sm text-center">{t("StorePoint.brand")}</p>
                  </div>
                </Card>
              </div>
              <div className="self-stretch justify-center items-center gap-8 inline-flex lg:mr-0 mr-5">
                <Card shadow="sm" padding="50px" radius="32" withBorder>
                  <div className="flex flex-col justify-center items-center">
                    <h2 className="font-bold text-[#F29393]">15</h2>
                    <p className="font-normal">{t("StorePoint.category")}</p>
                  </div>
                </Card>
                <Card shadow="sm" padding="50px" radius="32" withBorder>
                  <div className="flex flex-col justify-center items-center">
                    <h2 className="font-bold text-[#F29393]">2K+</h2>
                    <p className="font-normal">{t("StorePoint.customer")}</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:mt-0 lg:col-span-5 lg:flex relative">
            <div className="absolute w-[150px] h-16 lg:w-[260px] lg:h-16 px-4 lg:px-10 py-4 bg-gray-100 rounded-full translate-y-[70px] translate-x-[80px] lg:translate-x-[10vw] lg:translate-y-[17vh] shadow justify-start items-center gap-2 lg:gap-4 inline-flex z-20">
              <div className="w-8 h-8 lg:w-10 lg:h-10 justify-center items-center flex">
                <svg className="size-[30px] lg:size-[40px] mr-[10px] lg:mr-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33.9987 15.2433L35.199 16.4433C36.1495 17.3767 36.6664 18.6433 36.6664 19.9767C36.683 21.31 36.1662 22.5783 35.2325 23.5267C35.2214 23.5388 35.2102 23.5497 35.199 23.5603C35.1935 23.5657 35.188 23.5712 35.1824 23.5767L33.9987 24.76C33.5319 25.2267 33.265 25.86 33.265 26.5283V28.2433C33.265 31.01 31.0142 33.2617 28.2465 33.2617H26.5294C25.8624 33.2617 25.2289 33.5267 24.762 33.9933L23.5615 35.1933C22.5779 36.1783 21.294 36.66 20.0102 36.66C18.7265 36.66 17.4427 36.1783 16.459 35.2117L15.2419 33.9933C14.775 33.5267 14.1415 33.2617 13.4746 33.2617H11.7573C8.98962 33.2617 6.73881 31.01 6.73881 28.2433V26.5283C6.73881 25.86 6.47204 25.2267 6.00521 24.7433L4.80477 23.56C2.85406 21.6117 2.83739 18.4267 4.78809 16.4616L6.00521 15.2433C6.47204 14.7766 6.73881 14.1433 6.73881 13.46V11.76C6.73881 8.99331 8.98962 6.74498 11.7573 6.74498H13.4746C14.1415 6.74498 14.775 6.47665 15.2419 6.00998L16.4423 4.80998C18.393 2.84498 21.5775 2.84498 23.5449 4.79498L24.762 6.00998C25.2289 6.47665 25.8624 6.74498 26.5294 6.74498H28.2465C31.0142 6.74498 33.265 8.99331 33.265 11.76V13.4783C33.265 14.1433 33.5319 14.7766 33.9987 15.2433ZM15.7087 25.7433C16.1089 25.7433 16.4757 25.5933 16.7424 25.31L25.3122 16.745C25.879 16.1783 25.879 15.2433 25.3122 14.6766C24.7454 14.1116 23.8284 14.1116 23.2615 14.6766L14.6917 23.2433C14.1248 23.81 14.1248 24.7433 14.6917 25.31C14.9584 25.5933 15.3252 25.7433 15.7087 25.7433ZM22.828 24.2767C22.828 25.0933 23.4782 25.7433 24.2952 25.7433C25.0954 25.7433 25.7457 25.0933 25.7457 24.2767C25.7457 23.4783 25.0954 22.8267 24.2952 22.8267C23.4782 22.8267 22.828 23.4783 22.828 24.2767ZM15.7254 14.26C16.5257 14.26 17.1759 14.91 17.1759 15.71C17.1759 16.5283 16.5257 17.1767 15.7254 17.1767C14.9251 17.1767 14.2582 16.5283 14.2582 15.71C14.2582 14.91 14.9251 14.26 15.7254 14.26Z"
                    fill="#F29393"
                  />
                </svg>
              </div>
              <h2 className="font-bold text-xs lg:text-md">{t("StorePoint.discount")}</h2>
            </div>

            <img
              className="absolute z-0 lg:translate-y-[13vh] lg:translate-x-[-1.95vw] translate-y-[9vh] translate-x-[-50px]"
              src="https://res.cloudinary.com/dszhlpm81/image/upload/v1718727674/assets/phKFNpB7tMHUeEMuMCiMoTyH4rJTs3vp/Rectangle_7_nrgcgo.png"
              alt="Dekorasi"
            />
            <img className="z-10 lg:translate-x-0 lg:translate-y-0 translate-x-[-20px]" src="https://res.cloudinary.com/dszhlpm81/image/upload/v1718727537/assets/phKFNpB7tMHUeEMuMCiMoTyH4rJTs3vp/Group_9247_dntksy.png" alt="Orang" />
          </div>
        </div>
      </section>
    </>
  );
}

export default StorePoint;
