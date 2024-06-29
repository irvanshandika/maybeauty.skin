import React from "react";
import WardahIcon from "@components/icons/WardahIcon";
import OlayIcon from "@components/icons/OlayIcon";
import MayBellineIcon from "@components/icons/MayBellineIcon";
import LOrealIcon from "@components/icons/LOrealIcon";
import SKIIIcon from "@components/icons/SKIIIcon";

function Sponsor() {
  return (
    <>
      <section className="lg:mt-[180px] mt-[-1vh] lg:mb-[100px] mb-[-3vh] relative">
        <img className="absolute right-0 lg:-translate-y-[60vh]" src="https://res.cloudinary.com/dszhlpm81/image/upload/v1717653450/assets/phKFNpB7tMHUeEMuMCiMoTyH4rJTs3vp/Ellipse_24_gm09wr.png" alt="Decoration" />
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="absolute w-2/3 sm:w-1/2 lg:w-1/3 lg:-translate-x-[80px] translate-y-[-60px] mb-6">
            <svg className="lg:w-[65px] lg:h-[171px] w-[30px] h-[169.95px]" viewBox="0 0 65 171" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_832_1216)">
                <path d="M44.0254 170.703L65 170.703L54.5127 160.216L44.0254 170.703Z" fill="#F29393"></path>
                <path d="M44.0254 135.164L65 135.164L54.5127 124.677L44.0254 135.164Z" fill="#F29393"></path>
                <path d="M44.0254 99.6108L65 99.6108L54.5127 89.1235L44.0254 99.6108Z" fill="#F29393"></path>
                <path d="M44.0254 64.0722L65 64.0722L54.5127 53.5849L44.0254 64.0722Z" fill="#F29393"></path>
                <path d="M44.0254 28.5335L65 28.5335L54.5127 18.0311L44.0254 28.5335Z" fill="#F29393"></path>
                <path d="M0.000263214 153.426L20.9749 153.426L10.4876 142.939L0.000263214 153.426Z" fill="#F29393"></path>
                <path d="M1.90735e-05 117.873L20.9746 117.873L10.4873 107.385L1.90735e-05 117.873Z" fill="#F29393"></path>
                <path d="M1.90735e-05 82.3339L20.9746 82.3339L10.4873 71.8466L1.90735e-05 82.3339Z" fill="#F29393"></path>
                <path d="M1.90735e-05 46.7954L20.9746 46.7954L10.4873 36.3081L1.90735e-05 46.7954Z" fill="#F29393"></path>
                <path d="M1.90735e-05 11.2416L20.9746 11.2416L10.4873 0.754332L1.90735e-05 11.2416Z" fill="#F29393"></path>
              </g>
              <defs>
                <clipPath id="clip0_832_1216">
                  <rect width="65" height="169.949" fill="white" transform="translate(65 170.703) rotate(180)"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-10 lg:gap-y-0 sm:gap-x-12 lg:gap-x-16">
            <div className="flex items-center justify-center">
              <WardahIcon />
            </div>
            <div className="flex items-center justify-center">
              <OlayIcon />
            </div>
            <div className="flex items-center justify-center">
              <MayBellineIcon />
            </div>
            <div className="flex items-center justify-center lg:p-0 p-8">
              <LOrealIcon />
            </div>
            <div className="flex items-center justify-center">
              <SKIIIcon />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sponsor;
