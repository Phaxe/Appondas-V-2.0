import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/Navbar";
import React from "react";
import ServicePage from "./ServicePage";
import Testemoni from "../pages/testemoni/Testemoni";
import ServSec from "./ServSec";
import Porto from "../pages/portofo/portofo";

const Services = () => {
  return (
    <div className="bg-yahia-700 flex flex-col items-center justify-center">
   <NavBar />
      <ServicePage/>
      <Porto/>
      
      <ServSec/>
      {/* <Testemoni /> */}
      <Footer />
      
    </div>
  );
};

export default Services;
