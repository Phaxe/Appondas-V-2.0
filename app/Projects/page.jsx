import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/Navbar";
import React from "react";

import Catalog from "../pages/catalog/Catalog";
import Testemoni from "../pages/testemoni/Testemoni";

const Projects = () => {
  return (
    <div>   <NavBar />

    <Catalog/>
    <Testemoni />
    <Footer /></div>
  )
}

export default Projects