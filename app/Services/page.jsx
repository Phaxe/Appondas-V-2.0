import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/Navbar";
import React from "react";
import ServicePage from "./ServicePage";
import Catalog from "../pages/catalog/Catalog";
import Testemoni from "../pages/testemoni/Testemoni";
import ServSec from "./ServSec";

const Services = () => {
  return (
    <div className="bg-yahia-700">
   <NavBar />
      <ServicePage/>
      <Catalog/>
      <ServSec/>
      <Testemoni />
      <Footer />
      
    </div>
  );
};

export default Services;
