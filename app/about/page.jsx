import Banner from "@/components/banner/Banner";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/Navbar";

import React from "react";
import AboutContent from "./AboutContent";
import PagesBanner from "@/components/Pages-Banner/PagesBanner";

const About = () => {
  return (
    <div className="bg-yahia-800 flex items-center justify-center flex-col">
      <NavBar/>
      <PagesBanner/>
      <div>
      <AboutContent/>
      </div>
      
      <Footer/>
   
    </div>
  );
};

export default About;
