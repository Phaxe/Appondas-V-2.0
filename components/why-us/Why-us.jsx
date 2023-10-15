"use client";
import React, {useEffect} from "react";
import { MdSpeed } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiPencilBrush, GiPuzzle, GiWorld } from "react-icons/gi";
import { BsBuildingFillGear } from "react-icons/bs";
import { IoIosPeople, IoIosArrowForward } from "react-icons/io";
import { MdSecurity } from "react-icons/md";
import Link from "next/link";
import { motion, useAnimation  } from "framer-motion";
import { useInView} from "react-intersection-observer";
import { headingVariant , cardText} from "@/Animations/AnimationsVariants/Variants";
const Whyus = () => {
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
    <div className="bg-white rounded-md py-5 flex flex-col items-center justify-center responsive">
      <motion.div
        ref={ref}
        variants={headingVariant}
        initial="hidden"
        animate={controls}
        className="py-3 flex flex-col items-center justify-center max-lg:px-3"
      >
        <h1 className="text-3xl py-3 font-medium text-yahia-700 max-lg:text-xl ">
          Why Appondas ?
        </h1>
        <span className="py-3 xl:px-10 text-yahia-700 text-center max-lg:text-sm">
          Appondas team of experts has more than 11 years of industry expertise operating out of Spain. <br /> You will get a dedicated team of experts, unwavering transparency, and competitive pricing <br />
          that ensures exceptional value for your digital projects.
        </span>
      </motion.div>
      <motion.ul 
      ref={ref}
      variants={cardText}
      initial="hidden"
      animate={controls}
        className="flex gap-2 
      max-lg:grid-cols-2 max-lg:grid  max-lg:w-[80%] lg:grid max-xl:grid-cols-3 xl:grid-cols-4 max-lg:place-items-center
      max-sm:flex-col max-sm:flex"
      >
        <li
          className="flex flex-col items-center justify-center
         border-2  rounded  shadow-lg px-2 py-2 w-[250px] h-[250px]
         max-lg:w-[175px]  max-lg:h-[175px]"
        >
          <MdSpeed className="text-8xl max-lg:text-5xl text-orange-500" />
          <p className="text-2xl text-center  max-lg:text-xl text-orange-500">
            Faster <br /> Development
          </p>
        </li>
        <li
          className="flex flex-col items-center justify-center mt-6 max-sm:mt-0 text-yahia-500
          border-2 rounded  shadow-lg px-2 py-2 w-[250px] h-[250px]
         max-lg:w-[175px]  max-lg:h-[175px]"
        >
          <AiOutlineFundProjectionScreen className="text-8xl max-lg:text-5xl text-yahia-500" />
          <p className="text-2xl text-center   max-lg:text-xl">
            300+ <br /> Projects Delivered
          </p>
        </li>
        <li
          className="flex flex-col items-center justify-center
          border-2  rounded  shadow-lg px-2 py-2 w-[250px] h-[250px]
         max-lg:w-[175px]  max-lg:h-[175px]"
        >
          <GiPencilBrush className="text-8xl  max-lg:text-5xl text-orange-500" />
          <p className="text-2xl text-center  max-lg:text-xl text-orange-500">
            Minimalistic <br /> Design
          </p>
        </li>
        <li
          className="flex flex-col items-center justify-center mt-6 max-sm:mt-0 
          border-2  rounded  shadow-lg px-2 py-2 w-[250px] h-[250px]
         max-lg:w-[175px]  max-lg:h-[175px]"
        >
          <BsBuildingFillGear className="text-8xl max-lg:text-5xl text-yahia-500" />
          <p className="text-2xl text-center  max-lg:text-xl text-yahia-500">
            Enterprise <br /> Enabled
          </p>
        </li>
        <li
          className="flex flex-col items-center justify-center mt-2
          border-2  rounded  shadow-lg px-2 py-2 w-[250px] h-[250px]
         max-lg:w-[175px]  max-lg:h-[175px]"
        >
          <IoIosPeople className="text-8xl  max-lg:text-5xl text-orange-500" />
          <p className="text-2xl text-center  max-lg:text-xl text-orange-500">
            10+ Years <br /> Of Experience
          </p>
        </li>

        <li
          className="flex flex-col items-center justify-center mt-6 max-sm:mt-0 text-yahia-500
          border-2  rounded  shadow-lg px-2 py-2 w-[250px] h-[250px]
         max-lg:w-[175px]  max-lg:h-[175px]"
        >
          <GiWorld className="text-8xl max-lg:text-5xl text-yahia-500" />
          <p className="text-2xl text-center  max-lg:text-xl">
            20+ <br /> Countries
          </p>
        </li>
        <li
          className="flex flex-col items-center justify-center mt-0 text-orange-500
          border-2  rounded  shadow-lgpx-2 py-2 w-[250px] h-[250px]
         max-lg:w-[175px]  max-lg:h-[175px]"
        >
          <GiPuzzle className="text-8xl  max-lg:text-5xl text-orange-500 " />
          <p className="text-2xl text-center  max-lg:text-xl text-orange-500">
            Seamless <br /> Backend Integration
          </p>
        </li>
        <li
          className="flex flex-col items-center justify-center mt-6 max-sm:mt-0
          border-2  rounded  shadow-lg px-2 py-2 w-[250px] h-[250px]
         max-lg:w-[175px]  max-lg:h-[175px]"
        >
          <MdSecurity className="text-8xl max-lg:text-5xl text-yahia-500" />
          <p className="text-2xl text-center  max-lg:text-xl text-yahia-500">
            Optimal <br /> security
          </p>
        </li>
      </motion.ul>

      <button>
        <Link
          className="flex items-center justify-center bg-gradient-to-r from-yahia-700 via-yahia-500 to-yahia-700 py-3 px-10 rounded-md text-white hover:text-orange-500 duration-300
      font-bold mt-5"
          href="/about"
        >
          About Us <IoIosArrowForward className="font-bold text-2xl " />
        </Link>
      </button>
    </div>
  );
};

export default Whyus;
