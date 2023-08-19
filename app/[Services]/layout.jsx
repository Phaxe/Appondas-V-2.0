import React from "react";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/Navbar";
import ServicePage from "./ServicePage";
import Testemoni from "../pages/portfolio/Testemoni";

const layout = () => {
  return (
    <div>
      <NavBar />
      <ServicePage />
      <Testemoni />
      <Footer />
    </div>
  );
};

export default layout;
