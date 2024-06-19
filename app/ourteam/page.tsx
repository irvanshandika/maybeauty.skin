import React from "react";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Main from "./main";

export const metadata = {
  title: "Team Digital Bisnis",
};

function OurTeam() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default OurTeam;
