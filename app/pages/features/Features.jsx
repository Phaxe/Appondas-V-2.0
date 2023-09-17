'use client'
import ServiceCard from "@/components/service-card/Service-Card";
import React, { useEffect } from "react";
import { headingVariant } from "@/Animations/AnimationsVariants/Variants";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Features = () => {
  const controls = useAnimation();
  
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.stop();
    }
  }, [controls, inView]);
  return (
    <div className="bg-yahia-800 my-10  flex flex-col items-center justify-center responsive  rounded-md">
    <div ref={ref} id='features' className=" flex flex-col items-center justify-center align-middle w-full relative ">
  
      <motion.div 
  variants={headingVariant}
  initial="hidden"
  animate={controls}
      
      className='py-3 flex flex-col items-center justify-center max-lg:px-3'>
        <h1 className='text-3xl py-3 font-medium bg-clip-text text-transparent bg-gradient-to-l from-orange-700 via-orange-400 to-orange-700 max-lg:text-xl '>
        Brilliant web design, simplified
        </h1>
        <span className='py-3 xl:px-10 text-white text-center max-lg:text-sm'>
        Our website builder helps bring your unique vision to life—no design
          or code experience required. <br />  Create a customizable, mobile-optimized
          website within the hour. <br /> All you need to start is a domain name and a
          vision for your website. <br /> If you're building a small business website,
          online store, or otherwise, Mailchimp can simplify the process.
        </span>
      </motion.div>
    </div>
    <ServiceCard/>
    
    </div>
    
  );
};

export default Features;
