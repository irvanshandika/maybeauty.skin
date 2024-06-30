/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu } from "@mantine/core";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { t, i18n } = useTranslation("global");
  const [selectedLanguage, setSelectedLanguage] = useState<string>(localStorage.getItem("language") || "en");

  const flags = {
    en: (
      <>
        <div className="flex">
          <h2 className="mr-2">EN</h2>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 512 512">
            <mask id="circleFlagsUk0">
              <circle cx="256" cy="256" r="256" fill="#fff" />
            </mask>
            <g mask="url(#circleFlagsUk0)">
              <path
                fill="#eee"
                d="m0 0l8 22l-8 23v23l32 54l-32 54v32l32 48l-32 48v32l32 54l-32 54v68l22-8l23 8h23l54-32l54 32h32l48-32l48 32h32l54-32l54 32h68l-8-22l8-23v-23l-32-54l32-54v-32l-32-48l32-48v-32l-32-54l32-54V0l-22 8l-23-8h-23l-54 32l-54-32h-32l-48 32l-48-32h-32l-54 32L68 0z"
              />
              <path fill="#0052b4" d="M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z" />
              <path fill="#d80027" d="M0 0v45l131 131h45zm208 0v208H0v96h208v208h96V304h208v-96H304V0zm259 0L336 131v45L512 0zM176 336L0 512h45l131-131zm160 0l176 176v-45L381 336z" />
            </g>
          </svg>
        </div>
      </>
    ),
    id: (
      <>
        <div className="flex">
          <h2 className="mr-2">ID</h2>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 64 64">
            <path fill="#f9f9f9" d="M31.8 62c16.6 0 30-13.4 30-30h-60c0 16.6 13.4 30 30 30" />
            <path fill="#ed4c5c" d="M31.8 2c-16.6 0-30 13.4-30 30h60c0-16.6-13.4-30-30-30" />
          </svg>
        </div>
      </>
    ),
  };

  const handleChangeLanguage = (lang: string) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
      setSelectedLanguage(storedLanguage);
    }
    document.documentElement.lang = selectedLanguage;
  }, [selectedLanguage, i18n]);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  return (
    <>
      <header className="flex flex-wrap fixed z-50 -top-1 start-0 sm:justify-start sm:flex-nowrap w-full bg-white bg-opacity-50 text-sm py-4">
        <nav className="max-w-[85rem] w-full mx-auto lg:mx-36 px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
          <div className="flex items-center justify-between">
            <a className="flex space-x-3 font-semibold " href="/">
              <img src="https://res.cloudinary.com/dszhlpm81/image/upload/v1709444372/assets/phKFNpB7tMHUeEMuMCiMoTyH4rJTs3vp/favicon_phha7v.ico" alt="Brand Logo" className="h-8" fetchPriority="high" loading="lazy" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">MayBeautySkin</span>
            </a>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                data-hs-collapse="#navbar-with-collapse"
                aria-controls="navbar-with-collapse"
                aria-label="Toggle navigation">
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div id="navbar-with-collapse" className="hidden transition-all duration-[0.1ms] overflow-hidden basis-full grow sm:block">
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 font-medium" : "font-medium text-gray-600 hover:text-gray-400"}>
                {t("Navbar.home")}
              </NavLink>
              <NavLink to="/produk" className={({ isActive }) => isActive ? "text-blue-500 font-medium" : "font-medium text-gray-600 hover:text-gray-400"}>
                {t("Navbar.product")}
              </NavLink>
              <NavLink to="/location" className={({ isActive }) => isActive ? "text-blue-500 font-medium" : "font-medium text-gray-600 hover:text-gray-400"}>
                {t("Navbar.location")}
              </NavLink>
              <NavLink to="/ourteam" className={({ isActive }) => isActive ? "text-blue-500 font-medium" : "font-medium text-gray-600 hover:text-gray-400"}>
                {t("Navbar.ourteam")}
              </NavLink>
              <Menu shadow="md" width={200}>
                <Menu.Target>
                  <button>{flags[selectedLanguage]}</button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item onClick={() => handleChangeLanguage("en")}>
                    <div className="flex justify-center items-center">
                      <span>English</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-2" viewBox="0 0 512 512">
                        <mask id="circleFlagsUk0">
                          <circle cx="256" cy="256" r="256" fill="#fff" />
                        </mask>
                        <g mask="url(#circleFlagsUk0)">
                          <path
                            fill="#eee"
                            d="m0 0l8 22l-8 23v23l32 54l-32 54v32l32 48l-32 48v32l32 54l-32 54v68l22-8l23 8h23l54-32l54 32h32l48-32l48 32h32l54-32l54 32h68l-8-22l8-23v-23l-32-54l32-54v-32l-32-48l32-48v-32l-32-54l32-54V0l-22 8l-23-8h-23l-54 32l-54-32h-32l-48 32l-48-32h-32l-54 32L68 0z"
                          />
                          <path fill="#0052b4" d="M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z" />
                          <path fill="#d80027" d="M0 0v45l131 131h45zm208 0v208H0v96h208v208h96V304h208v-96H304V0zm259 0L336 131v45L512 0zM176 336L0 512h45l131-131zm160 0l176 176v-45L381 336z" />
                        </g>
                      </svg>
                    </div>
                  </Menu.Item>
                  <Menu.Item onClick={() => handleChangeLanguage("id")}>
                    <div className="flex justify-center items-center">
                      <span>Indonesia</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-2" viewBox="0 0 64 64">
                        <path fill="#f9f9f9" d="M31.8 62c16.6 0 30-13.4 30-30h-60c0 16.6 13.4 30 30 30" />
                        <path fill="#ed4c5c" d="M31.8 2c-16.6 0-30 13.4-30 30h60c0-16.6-13.4-30-30-30" />
                      </svg>
                    </div>
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
