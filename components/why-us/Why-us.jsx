import React from "react";
import { MdSpeed } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiPencilBrush, GiPuzzle, GiWorld } from "react-icons/gi";
import { BsBuildingFillGear } from "react-icons/bs";
import { IoIosPeople, IoIosArrowForward } from "react-icons/io";
import { MdSecurity } from "react-icons/md";
// import {FaEarthAsia} from 'react-icons/fa'
const Whyus = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white  w-[1500px] py-10 m-auto border rounded-md mb-10">
      <h1 className="text-center text-yahia-700 py-5 text-3xl font-medium w-[80%] m-auto max-sm:text-xl">
        Why Appondas ?
      </h1>
      <p className="text-center text-yahia-700 text-xl w-[60%] m-auto max-sm:text-base pb-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse animi
        voluptatum molestiae quis quo? Mollitia vitae temporibus doloremque
        incidunt saepe itaque modi necessitatibus, tempora voluptatum, similique
        eligendi dolorem, aliquam non harum iste minima eius officia.
      </p>
      <div
        className="flex gap-2 
      max-lg:grid-cols-2 max-lg:grid max-lg:w-[80%] max-lg:items-center max-lg:place-items-center
      max-sm:flex-col max-sm:flex"
      >
        <div
          className="flex flex-col items-center justify-center
         border-2  rounded  shadow-lg px-2 py-2 w-[250px] h-[250px]
         max-lg:w-[175px]  max-lg:h-[175px]"
        >
          <MdSpeed className="text-8xl max-lg:text-5xl text-orange-500" />
          <p className="text-2xl text-center  max-lg:text-xl text-orange-500">
            Faster <br /> Development
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-center mt-6 max-sm:mt-0 text-yahia-500
          border-2 rounded  shadow-lg px-2 py-2 w-[250px] h-[250px]
         max-lg:w-[175px]  max-lg:h-[175px]"
        >
          <AiOutlineFundProjectionScreen className="text-8xl max-lg:text-5xl text-yahia-500" />
          <p className="text-2xl text-center   max-lg:text-xl">
            300+ <br /> Projects Delivered
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-center
          border-2  rounded  shadow-lg px-2 py-2 w-[250px] h-[250px]
         max-lg:w-[175px]  max-lg:h-[175px]"
        >
          <GiPencilBrush className="text-8xl  max-lg:text-5xl text-orange-500" />
          <p className="text-2xl text-center  max-lg:text-xl text-orange-500">
            Minimalistic <br /> Design
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-center mt-6 max-sm:mt-0 
          border-2  rounded  shadow-lg px-2 py-2 w-[250px] h-[250px]
         max-lg:w-[175px]  max-lg:h-[175px]"
        >
          <BsBuildingFillGear className="text-8xl max-lg:text-5xl text-yahia-500" />
          <p className="text-2xl text-center  max-lg:text-xl text-yahia-500">
            Enterprise <br /> Enabled
          </p>
        </div>
      </div>
      <div
        className="flex gap-2 
      max-lg:grid-cols-2 max-lg:grid max-lg:w-[80%] max-lg:items-center max-lg:place-items-center
      max-sm:flex-col max-sm:flex"
      >
        <div
          className="flex flex-col items-center justify-center mt-2
          border-2  rounded  shadow-lg px-2 py-2 w-[250px] h-[250px]
         max-lg:w-[175px]  max-lg:h-[175px]"
        >
          <IoIosPeople className="text-8xl  max-lg:text-5xl text-orange-500" />
          <p className="text-2xl text-center  max-lg:text-xl text-orange-500">
            10+ Years <br /> Of Experience
          </p>
        </div>

        <div
          className="flex flex-col items-center justify-center mt-6 max-sm:mt-0 text-yahia-500
          border-2  rounded  shadow-lg px-2 py-2 w-[250px] h-[250px]
         max-lg:w-[175px]  max-lg:h-[175px]"
        >
          <GiWorld className="text-8xl max-lg:text-5xl text-yahia-500" />
          <p className="text-2xl text-center  max-lg:text-xl">
            20+ <br /> Countries
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-center mt-0 text-orange-500
          border-2  rounded  shadow-lgpx-2 py-2 w-[250px] h-[250px]
         max-lg:w-[175px]  max-lg:h-[175px]"
        >
          <GiPuzzle className="text-8xl  max-lg:text-5xl text-orange-500 " />
          <p className="text-2xl text-center  max-lg:text-xl text-orange-500">
            Seamless <br /> Backend Integration
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-center mt-6 max-sm:mt-0
          border-2  rounded  shadow-lg px-2 py-2 w-[250px] h-[250px]
         max-lg:w-[175px]  max-lg:h-[175px]"
        >
          <MdSecurity className="text-8xl max-lg:text-5xl text-yahia-500" />
          <p className="text-2xl text-center  max-lg:text-xl text-yahia-500">
            Optimal <br /> security
          </p>
        </div>
      </div>
      <button
        className="flex items-center justify-center bg-gradient-to-r from-yahia-700 via-yahia-500 to-yahia-700 py-3 px-10 rounded-md text-white hover:text-orange-500 duration-300
      font-bold mt-5"
      >
        About Us <IoIosArrowForward className="font-bold text-2xl " />
      </button>
    </div>
  );
};

export default Whyus;
