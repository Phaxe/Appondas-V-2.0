'use client'
import Image from "next/image";
import React ,{ useEffect} from "react";
import dashboard from "../../../public/dashboard.png";
import shop from "../../../public/axios.png";
import grill from "../../../public/grill.png";

import Resto from '../../../public/resto.png'
import { motion, useAnimation  } from "framer-motion";
import { useInView} from "react-intersection-observer";
import { headingVariant , cardText ,cardTextX} from "@/Animations/AnimationsVariants/Variants";
const Porto = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.stop();
    }
  }, [controls, inView]);


  const controlsX = useAnimation();
  const [refX, inViewX] = useInView();
  useEffect(() => {
    if (inViewX) {
      controlsX.start("visible");
    } else {
      controlsX.stop();
    }
  }, [controlsX, inViewX]);

  const controlsY = useAnimation();
  const [refY, inViewY] = useInView();
  useEffect(() => {
    if (inViewY) {
      controlsY.start("visible");
    } else {
      controlsY.stop();
    }
  }, [controlsY, inViewY]);


  const controlsZ = useAnimation();
  const [refZ, inViewZ] = useInView();
  useEffect(() => {
    if (inViewY) {
      controlsZ.start("visible");
    } else {
      controlsZ.stop();
    }
  }, [controlsZ, inViewZ]);
  return (
   <div className="bg-yahia-800 my-10 flex flex-col responsive py-10 px-10 rounded-md ">
        <motion.div 
        ref={ref}
         variants={headingVariant}
         initial="hidden"
         animate={controls}
         className='py-3 flex flex-col items-center justify-center max-lg:px-3'>
        <h1 className='text-3xl text-center py-3 font-medium bg-clip-text text-transparent bg-gradient-to-l from-orange-700 via-orange-400 to-orange-700 max-lg:text-xl '>
        Customers rely on Appondas
        </h1>
        <span className='py-3 xl:px-10 text-white text-center max-lg:text-sm'>
        Appondas is the answer for brands that values speed, quality and scale, our proven track-records<br /> 
        in complex projects for 50+ fast-growing companies in over 10 different industries.<br /> we are your one-stop shop for all your unique requirements, be
        it individual resources,<br /> dedicated teams or trunkey project - we got you covered.
        </span>
      </motion.div>
 <motion.div
   ref={refX}
   variants={cardText}
        initial="hidden"
        animate={controlsX}
 className="flex items-center justify-center  bg-gradient-to-r from-yahia-400 via-yahia-600 to-yahia-900 rounded-md mb-10 max-lg:hidden ">
    <div className="flex items-center  justify-between py-10 gap-10 ">   
    <div className="w-[900px] h-full flex justify-center items-center mx-auto 2xl:w-[900px] xl:w-[620px] max-xl:w-[500px]  ">
          <Image
            src={Resto}
            className="h-[100%] w-full  object-cover rounded-md m-5   hover:cursor-pointer hover:scale-105 duration-300 "
            alt="dashboard"
          />
        </div>
      <div className="flex items-center justify-center gap-10  ">
     
        <div className=" w-[400px] flex flex-col items-center justify-between pt-4 xl:w-[300px] max-xl:w-[300px]">
          <div className="flex flex-col gap-10 max-xl:gap-3">
            <h1 className='font-semibold text-white text-center text-4xl'>Resturant Web</h1>
            <h2 className='text-white text-center font-semibold text-3xl'>Grill</h2>
            <p className="text-gray-100 pl-4 py-10">
            A new ecommerce solution for one of the largest wedding dress retailers in the world.
            </p>
    
          </div>
          <div className="flex gap-4 flex-row  max-xl:gap-1">
            <button className="bg-gray-300 py-2 px-2 rounded-3xl ">
              ReactJs
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              MongoDb
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              Redux
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              UX/UI
            </button>
          </div>
          <button className='py-2 mt-10 border px-2 text-white border-white rounded-md bg-orange-700'>Check Demo</button>
        </div>

      </div>
 
      

    
    </div>
  </motion.div>
  
 <div className="flex items-center  justify-between gap-10 max-lg:flex-col">
 <motion.div
 
 className="flex  items-center justify-center bg-gradient-to-l w-[650px] max-md:w-[500px] max-sm:w-[350px] from-orange-400 via-orange-600 to-orange-900  rounded-md mb-10 lg:hidden ">
    <div className="flex items-center flex-col  justify-between py-10 gap-10 max-md:py-1 ">   
    <div className="w-[600px] xl:w-[400px] max-lg:w-[600px] max-md:w-[380px]   max-xl:w-[400px] 2xl:w-[600px] h-full flex justify-center items-center mx-auto max-md:w-[330px]">
          <Image
            src={shop}
            className="h-[100%] w-full  m-5 object-cover rounded-md   hover:cursor-pointer hover:scale-105 duration-300 "
            alt="dashboard"
          />
        </div>
      <div className="flex items-center justify-center  ">
     
        <div className=" w-[400px] flex flex-col items-center justify-between gap-3 max-sm:w-[300px]">
          <div className="flex flex-col gap-3 max-md:gap-1">
            <h1 className='font-semibold text-white text-center text-4xl max-md:text-xl'>Resturant Web</h1>
            <h2 className='text-white text-center font-semibold text-3xl'>Grill</h2>
            <p className="text-gray-100 text-center">
            A new ecommerce solution for one of the largest wedding dress retailers in the world.
            </p>
    
          </div>
          <div className="flex gap-4 flex-row max-md:grid max-md:grid-cols-2">
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              ReactJs
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              MongoDb
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              Redux
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              UX/UI
            </button>
          </div>
          <button className='py-2 mt-10 border px-2 text-white border-white rounded-md bg-yahia-700'>Check Demo</button>
        </div>

      </div>
 
      

    
    </div>
  </motion.div>

 <motion.div
  ref={refY}
  variants={cardText}
  initial="hidden"
  animate={controlsY}
 className="flex  items-center justify-center bg-gradient-to-l w-[650px] max-md:w-[500px] max-sm:w-[350px] from-orange-400 via-orange-600 to-orange-900  rounded-md mb-10 ">
    <div className="flex items-center flex-col  justify-between py-10 gap-10 max-md:py-1 ">   
    <div className="w-[600px] xl:w-[400px] max-lg:w-[600px] max-md:w-[380px]   max-xl:w-[400px] 2xl:w-[600px] h-full flex justify-center items-center mx-auto max-md:w-[330px]">
          <Image
            src={Resto}
            className="h-[100%] w-full  m-5 object-cover rounded-md   hover:cursor-pointer hover:scale-105 duration-300 "
            alt="dashboard"
          />
        </div>
      <div className="flex items-center justify-center  ">
     
        <div className=" w-[400px] flex flex-col items-center justify-between gap-3 max-sm:w-[300px]">
          <div className="flex flex-col gap-3 max-md:gap-1">
            <h1 className='font-semibold text-white text-center text-4xl max-md:text-xl'>Resturant Web</h1>
            <h2 className='text-white text-center font-semibold text-3xl'>Grill</h2>
            <p className="text-gray-100 text-center">
            A new ecommerce solution for one of the largest wedding dress retailers in the world.
            </p>
    
          </div>
          <div className="flex gap-4 flex-row max-md:grid max-md:grid-cols-2">
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              ReactJs
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              MongoDb
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              Redux
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              UX/UI
            </button>
          </div>
          <button className='py-2 mt-10 border px-2 text-white border-white rounded-md bg-yahia-700'>Check Demo</button>
        </div>

      </div>
 
      

    
    </div>
  </motion.div>
  <motion.div 
   ref={refZ}
   variants={cardTextX}
        initial="hidden"
        animate={controlsZ}
  className="flex  items-center justify-center bg-gradient-to-l w-[650px] max-md:w-[500px] max-sm:w-[350px] from-orange-400 via-orange-600 to-orange-900  rounded-md mb-10 ">
    <div className="flex items-center flex-col  justify-between py-10 gap-10 max-md:py-1 ">   
    <div className="w-[600px] xl:w-[400px] max-lg:w-[600px] max-md:w-[380px]   max-xl:w-[400px] 2xl:w-[600px] h-full flex justify-center items-center mx-auto max-md:w-[330px]">
          <Image
            src={Resto}
            className="h-[100%] w-full  m-5 object-cover rounded-md   hover:cursor-pointer hover:scale-105 duration-300 "
            alt="dashboard"
          />
        </div>
      <div className="flex items-center justify-center  ">
     
        <div className=" w-[400px] flex flex-col items-center justify-between gap-3 max-sm:w-[300px]">
          <div className="flex flex-col gap-3 max-md:gap-1">
            <h1 className='font-semibold text-white text-center text-4xl max-md:text-xl'>Resturant Web</h1>
            <h2 className='text-white text-center font-semibold text-3xl'>Grill</h2>
            <p className="text-gray-100 text-center">
            A new ecommerce solution for one of the largest wedding dress retailers in the world.
            </p>
    
          </div>
          <div className="flex gap-4 flex-row max-md:grid max-md:grid-cols-2">
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              ReactJs
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              MongoDb
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              Redux
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              UX/UI
            </button>
          </div>
          <button className='py-2 mt-10 border px-2 text-white border-white rounded-md bg-yahia-700'>Check Demo</button>
        </div>

      </div>
 
      

    
    </div>
  </motion.div>

 </div>
   </div>
  );
};

export default Porto;
