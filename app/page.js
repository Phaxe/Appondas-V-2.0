import Navbar from "@/components/navbar/Navbar";
import Features from "./pages/features/Features";
import Catalog from "./pages/catalog/Catalog";
import Banner from "@/components/banner/Banner";
import Footer from "@/components/footer/Footer";
import About from "./about/page";
import Choose from "@/components/choose-Business/Choose";
import Tech from "@/components/tech-stack/Tech";
import Testemoni from "./pages/portfolio/Testemoni";



export default function Home() {
  return (
   <div>
    <Navbar/>
    <Banner/>
    <Features/>
    <Choose/>
    <Catalog/>
    <Tech/>
    <About/>
    <Testemoni/>
    <Footer/>
   </div>
  )
}
