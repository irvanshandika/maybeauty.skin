// Import React and other necessary modules
import React from "react";

// Import the Pakaian array
import { Tas } from "../data/Produk";

// Create a functional component for rendering the list of products
const ProductList: React.FC = () => {
  return (
    <section>
      <section>
        <div className="block max-w-7xl py-28 mx-auto lg:text-xl">
          <div className="flex justify-center mb-5">
            <h2 className="lg:text-3xl text-2xl font-semibold dark:text-gray-100">List Produk Tas</h2>
          </div>
          <div className="lg:grid flex flex-col justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {Tas.map((item) => (
              <div key={item.name} className="lg:w-[350px] w-[350px] lg:pt-4 pt-4 bg-[#FFEEF4] border border-none rounded-lg shadow dark:bg-gray-800">
                <div className="flex justify-center">
                  <img src={item.images} className="lg:mt-2 mt-4 rounded-lg lg:w-80 lg:h-80 w-72 h-72" alt={item.alt} fetchPriority="low" />
                </div>
                <div className="p-5">
                  <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">{item.name}</h1>
                  <div className="my-3">
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${item.statusProduk === "Tidak Tersedia" ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}>{item.statusProduk}</span>
                  </div>
                  <a href={item.url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Lihat Produk
                    <svg xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-180 w-5 h-5 ms-2" viewBox="0 0 24 24">
                      <g fill="none">
                        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                        <path
                          fill="#ffff"
                          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m-.01 8H11a1 1 0 0 0-.117 1.993L11 12v4.99c0 .52.394.95.9 1.004l.11.006h.49a1 1 0 0 0 .596-1.803L13 16.134V11.01c0-.52-.394-.95-.9-1.004zM12 7a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductList;
