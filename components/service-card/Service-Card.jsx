"use client";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import React, { useEffect } from "react";
import mobile from "../../public/mobile.png";
import web from "../../public/web.png";
import redo from "../../public/redo.png";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import {
  serviceImageVariant,
  serviceImageVariantX,
  cardText
} from "@/Animations/AnimationsVariants/Variants";

const ServiceCard = () => {
  const controls = useAnimation();
  
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.stop();
    }
  }, [controls, inView]);

  const [refx, inViewx] = useInView();
  const controlsx = useAnimation();
  useEffect(() => {
    if (inViewx) {
      controlsx.start("visible");
    } else {
      controlsx.stop();
    }
  }, [controlsx, inViewx]);

  const [refy, inViewy] = useInView();
  const controlsy = useAnimation();
  useEffect(() => {
    if (inViewx) {
      controlsy.start("visible");
    } else {
      controlsy.stop();
    }
  }, [controlsy, inViewy]);




  return (
    <div className="h-full  w-full flex-col gap-5 flex items-center justify-center  py-10  mb-10 max-sm:w-[390px] max-sm:py-5  ">
      <div ref={ref} className="w-[100%] px-5   relative max-sm:w-[100%] ">
        <motion.div
          variants={serviceImageVariantX}
          initial="hidden"
          animate={controls}
          className="w-full h-full object-cover"
        >
          <Image
            src={mobile}
            alt="mobile"
            className="rounded-md h-[550px] w-full object-cover max-lg:h-[350px] max-sm:object-cover  max-sm:m-auto max-sm:h-[300px]  "
          />
        </motion.div>

        <motion.div 
        ref={ref}
        variants={cardText}
        initial="hidden"
        animate={controls}
          className=" flex-col bg-[hsla(0,0%,100%,.06)] absolute justify-center items-center first-letter: top-20 w-[350px] left-[58%] h-[400px]
       max-lg:relative max-lg:left-0 max-lg:top-[-1px] max-lg:w-full max-lg:bg-yahia-800 max-lg:h-[300px] max-sm:h-[220px]"
        >
          <div
           
          className="px-10 py-10 max-lg:p-0">
            <h1 className="text-white text-4xl  py-4 max-lg:p-1  max-sm:text-xl max-sm:py-0">
              Mobile App Design
            </h1>
            <p className="text-white py-4 max-lg:p-1  max-sm:text-sm max-sm:py-2">
              With a strong focus on modern platform guidelines and user's needs,
              Appondas creates unique mobile app designs
            </p>
            <button
              className="py-2  mt-5 px-16 text-white font-semibold border-orange-500 border-2 max-sm:py-1 max-sm:px-8 max-sm:w-full hover:bg-orange-500 
            hover:text-yahia-600 hover:text-bold duration-300 hover:border-white "
            >
              See More
            </button>
          </div>
        </motion.div>
      </div>

      <div ref={refx} className="w-[100%] px-5  relative max-sm:w-[100%] ">
        <motion.div
          variants={serviceImageVariant}
          initial="hidden"
          animate={controlsx}
          className="w-full h-full object-cover"
        >
          <Image
            src={web}
            alt="mobile"
            className="rounded-md h-[550px] w-full object-cover max-lg:h-[350px] max-sm:object-cover  max-sm:m-auto max-sm:h-[300px]  "
          />
        </motion.div>
        <motion.div
        ref={refx}
        variants={cardText}
        initial="hidden"
        animate={controlsx}
          className=" flex-col bg-[hsla(0,0%,100%,.06)] absolute justify-center items-center first-letter: top-20 w-[350px] left-[10%] h-[400px]
        max-lg:relative max-lg:left-0 max-lg:top-[-1px] max-lg:w-full max-lg:bg-yahia-800 max-lg:h-[300px] max-sm:h-[220px]"
        >
          <div className="px-10 py-10 max-lg:p-0">
            <h1 className="text-white text-4xl  py-4  max-sm:text-xl max-sm:py-0">
              Web & Desktop Apps
            </h1>
            <p className="text-white py-4 max-sm:text-sm max-sm:py-2">
              Appondas designs web and desktop App-solutions with intuitive UI,
              optimal UX and best performance
            </p>
            <button
              className="py-2 mt-5 px-16 text-white font-semibold border-orange-500 border-2 max-sm:py-1 max-sm:px-8 max-sm:w-full hover:bg-orange-500 
            hover:text-yahia-600 hover:text-bold duration-300 hover:border-white "
            >
              See More
            </button>
          </div>
        </motion.div>
      </div>

      <div 
      ref={refy}
      className="w-[100%] px-5   relative max-sm:w-[100%] ">
        <motion.div
          variants={serviceImageVariantX}
          initial="hidden"
          animate={controlsy}
          className="w-full h-full object-cover"
        >
          <Image
            src={redo}
            alt="mobile"
            className="rounded-md h-[550px] w-full object-cover max-lg:h-[350px] max-sm:object-cover  max-sm:m-auto max-sm:h-[300px]  "
          />
        </motion.div>

        <motion.div
        ref={refy}
        variants={cardText}
        initial="hidden"
        animate={controlsy}
          className=" flex-col bg-[hsla(0,0%,100%,.06)] absolute justify-center items-center first-letter: top-20 w-[350px] left-[58%] h-[400px]
       max-lg:relative max-lg:left-0 max-lg:top-[-1px] max-lg:w-full max-lg:bg-yahia-800 max-lg:h-[300px] max-sm:h-[220px]"
        >
          <div className="px-10 py-10 max-lg:p-0">
            <h1 className="text-white text-4xl  py-4 max-lg:p-1  max-sm:text-xl max-sm:py-0">
              Redesign services
            </h1>
            <p className="text-white py-4 max-lg:p-1  max-sm:text-sm max-sm:py-2">
              Appondas's team of experts are ready to redesign or rebuild your existing software for
              unprecedented performance and efficiency
            </p>
            <button
              className="py-2  mt-5 px-16 text-white font-semibold border-orange-500 border-2 max-sm:py-1 max-sm:px-8 max-sm:w-full hover:bg-orange-500 
            hover:text-yahia-600 hover:text-bold duration-300 hover:border-white "
            >
              See More
            </button>
          </div>
        </motion.div>
      </div>
      <button>
        <Link
          className="flex items-center justify-center bg-gradient-to-r from-orange-700 via-orange-400 to-orange-700 py-3 px-10 rounded-md text-white hover:text-yahia-500 duration-300
      font-bold mt-5
"
          href="/Services"
        >
          All Services <IoIosArrowForward className="font-bold text-2xl " />
        </Link>
      </button>
    </div>
  );
};

export default ServiceCard;
