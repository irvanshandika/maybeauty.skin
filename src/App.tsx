import React, { useEffect } from "react";
import Navbar from "@components/Navbar";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import OurTeam from "@pages/OurTeam";
import Footer from "@components/Footer";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import "preline/preline";
import { IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const location = useLocation();
  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/ourteam" element={<OurTeam />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
