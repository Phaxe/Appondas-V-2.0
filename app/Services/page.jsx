import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/Navbar";
import React from "react";
import ServicePage from "./ServicePage";
import Catalog from "../pages/catalog/Catalog";
import Testemoni from "../pages/testemoni/Testemoni";

const Services = () => {
  return (
    <div className="bg-yahia-700">
   <NavBar />
      <ServicePage/>
      <Catalog/>
      <Testemoni />
      <Footer />
      
    </div>
  );
};

export default Services;
