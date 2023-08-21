import React from "react";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/Navbar";
import ServicePage from "./ServicePage";
import Testemoni from "../pages/testemoni/Testemoni";
import Catalog from "../pages/catalog/Catalog";

const layout = () => {
  return (
    <div>
      <NavBar />
      <ServicePage />
      <Catalog/>
      <Testemoni />
      <Footer />
    </div>
  );
};

export default layout;
