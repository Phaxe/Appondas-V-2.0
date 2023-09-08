import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/Navbar";
import React from "react";

import Catalog from "../pages/catalog/Catalog";
import Testemoni from "../pages/testemoni/Testemoni";
import ProjectsBanner from "./ProjectsBanner";
import Portoflio from "./Portoflio";
import FooterContact from "@/components/footer/FooterContact";
import Whyus from "@/components/why-us/Why-us";

const Projects = () => {
  return (
    <div className="bg-yahia-700 flex flex-col items-center justify-center">
      <NavBar />
      <ProjectsBanner />
      <Portoflio />
     
      <Whyus/>
      
    
      {/* <Testemoni /> */}
      <Footer />
    </div>
  );
};

export default Projects;
