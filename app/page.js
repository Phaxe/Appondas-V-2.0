import Navbar from "@/components/navbar/Navbar";
import Features from "./pages/features/Features";
import Catalog from "./pages/catalog/Catalog";
import Banner from "@/components/banner/Banner";
import Footer from "@/components/footer/Footer";
import About from "./about/page";
import Tech from "@/components/tech-stack/Tech";
import Testemoni from "./pages/testemoni/Testemoni";
import TechStack from "@/components/tech-stack/TechStack";
import Whyus from "@/components/why-us/Why-us";
import Porto from "./pages/portofo/portofo";
import PagesBanners from "@/components/PagesBanners/PagesBanners";

import Bannerx from '../public/bannerx.jpg'

export default function Home() {
  return (
   <div className="bg-yahia-700 w-full flex flex-col items-center justify-center">
    <Navbar/>
    {/* <Banner/> */}
    <PagesBanners pic={Bannerx} text='Helping businesses build thier online homes' header='APPONDAS QUALITY IN FOCUS'/>
    <Features/>
    <Whyus/>
    <Porto/>
    {/* <Catalog/> */}
    <TechStack/>
    <Testemoni/>
    <Footer/>
   </div>
  )
}
