import React from "react";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Hero from "@sections/Hero";
import Sponsor from "@sections/Sponsor";
import Pelayanan from "@sections/Pelayanan";
import Produk from "@sections/Produk";
import StorePoint from "@sections/StorePoint";
import Testimoni from "@sections/Testimoni";
import Location from "@sections/Location";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsor />
      <Pelayanan />
      <Produk />
      <StorePoint />
      <Testimoni />
      <Location />
      <Footer />
    </>
  );
}
