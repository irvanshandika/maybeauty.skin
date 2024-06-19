/* eslint-disable @next/next/no-img-element */
import React from "react";

function Navbar() {
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
              <a className="font-medium text-blue-500" href="#" aria-current="page">
                Home
              </a>
              <a className="font-medium text-gray-600 hover:text-gray-400" href="#offers">
                Offer
              </a>
              <a className="font-medium text-gray-600 hover:text-gray-400" href="#produk">
                Products
              </a>
              <a className="font-medium text-gray-600 hover:text-gray-400" href="#storepoint">
                Store Point
              </a>
              <a className="font-medium text-gray-600 hover:text-gray-400" href="#testimonials">
                Testimonials
              </a>
              <a className="font-medium text-gray-600 hover:text-gray-400" href="#location">
                Location
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
