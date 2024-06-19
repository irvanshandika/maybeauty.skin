/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

function Produk() {
  return (
    <>
      <section id="produk" className="relative">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 lg:py-[40px] lg:pt-0 lg:pb-[10vh] pt-[-20vh] pb-[40vh] lg:mb-[200px]">
          {/* <div className="bg-no-repeat bg-right-bottom" style={{ backgroundImage: "url('https://res.cloudinary.com/dszhlpm81/image/upload/v1718717115/assets/phKFNpB7tMHUeEMuMCiMoTyH4rJTs3vp/OBJECTS_1_r5r0hh.png')" }}>
          </div> */}
          <img
            className="absolute lg:translate-x-[83vw] lg:translate-y-[29vh] lg:block hidden"
            src="https://res.cloudinary.com/dszhlpm81/image/upload/v1718717115/assets/phKFNpB7tMHUeEMuMCiMoTyH4rJTs3vp/OBJECTS_1_r5r0hh.png"
            alt="Decoration"
          />
          <div className="mr-auto place-self-center py-16 lg:mt-0 mt-10 lg:col-span-7 order-1 lg:order-2">
            <p className="mt-3 text-lg text-pink-400 uppercase font-bold">Products</p>
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">Produk skincare terlaris</h1>
          </div>
          <div className="grid grid-cols-1 lg:translate-x-0 translate-x-[14px] md:grid-cols-2 lg:grid-cols-3 gap-52 md:gap-8 xl:gap-20 order-1 lg:order-2">
            <div className="w-80 h-96 flex-col justify-start items-start inline-flex">
              <img
                className="w-80 h-80 rounded-tl-3xl rounded-tr-3xl"
                src="https://res.cloudinary.com/dszhlpm81/image/upload/v1718713904/assets/phKFNpB7tMHUeEMuMCiMoTyH4rJTs3vp/Azarine_kry1ja.png"
                alt="Produk"
                fetchPriority="high"
                loading="lazy"
              />
              <div className="w-80 h-72 p-8 bg-white rounded-bl-3xl rounded-br-3xl shadow flex-col justify-end items-start gap-11 flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-72 justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 text-gray-900 text-2xl font-bold font-['Circular Std'] leading-7">Azarine hydzasoothe sunscreen gel</div>
                    <div className="justify-start items-center gap-2 flex">
                      <div className="text-red-300 text-2xl font-bold font-['Circular Std'] leading-7">4.8</div>
                      <div className="lg:-translate-x-[6px] justify-center items-center flex">
                        <i className="uis uis-favorite text-xl text-red-300"></i>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-900/opacity-75 text-lg font-normal font-['Inter'] leading-7">Sunscreen</div>
                </div>
                <div className="text-pink-400 text-2xl font-bold font-['Circular Std'] leading-7">Rp 49.999</div>
              </div>
            </div>
            <div className="w-80 h-96 flex-col justify-start items-start inline-flex">
              <img
                className="w-80 h-80 rounded-tl-3xl rounded-tr-3xl"
                src="https://res.cloudinary.com/dszhlpm81/image/upload/v1718713904/assets/phKFNpB7tMHUeEMuMCiMoTyH4rJTs3vp/Facetology_w3tlwj.png"
                alt="Produk"
                fetchPriority="high"
                loading="lazy"
              />
              <div className="w-80 h-72 p-8 bg-white rounded-bl-3xl rounded-br-3xl shadow flex-col justify-end items-start gap-11 flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-72 justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 text-gray-900 text-2xl font-bold font-['Circular Std'] leading-7">Facetology triple care sunscreen</div>
                    <div className="justify-start items-center gap-2 flex">
                      <div className="text-red-300 text-2xl font-bold font-['Circular Std'] leading-7">4.8</div>
                      <div className="lg:-translate-x-[6px] justify-center items-center flex">
                        <i className="uis uis-favorite text-xl text-red-300"></i>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-900/opacity-75 text-lg font-normal font-['Inter'] leading-7">Sunscreen</div>
                </div>
                <div className="text-pink-400 text-2xl font-bold font-['Circular Std'] leading-7">Rp 64.999</div>
              </div>
            </div>
            <div className="w-80 h-96 flex-col justify-start items-start inline-flex">
              <img
                className="w-80 h-80 rounded-tl-3xl rounded-tr-3xl"
                src="https://res.cloudinary.com/dszhlpm81/image/upload/v1718713904/assets/phKFNpB7tMHUeEMuMCiMoTyH4rJTs3vp/Azarine_kry1ja.png"
                alt="Produk"
                fetchPriority="high"
                loading="lazy"
              />
              <div className="w-80 h-72 p-8 bg-white rounded-bl-3xl rounded-br-3xl shadow flex-col justify-end items-start gap-11 flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-72 justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 text-gray-900 text-2xl font-bold font-['Circular Std'] leading-7">Skintific MSH Niacinamide Brightening moisturizer</div>
                    <div className="justify-start items-center gap-2 flex">
                      <div className="text-red-300 text-2xl font-bold font-['Circular Std'] leading-7">4.8</div>
                      <div className="lg:-translate-x-[6px] justify-center items-center flex">
                        <i className="uis uis-favorite text-xl text-red-300"></i>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-900/opacity-75 text-lg font-normal font-['Inter'] leading-7">Sunscreen</div>
                </div>
                <div className="text-pink-400 text-2xl font-bold font-['Circular Std'] leading-7">Rp 49.999</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Produk;
