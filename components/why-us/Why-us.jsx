import React from "react";
import { MdSpeed } from "react-icons/md";
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {GiPencilBrush, GiPuzzle,GiWorld} from 'react-icons/gi'
import {BsBuildingFillGear} from 'react-icons/bs'
import {IoIosPeople, IoIosArrowForward} from 'react-icons/io'
import {MdSecurity} from 'react-icons/md'
// import {FaEarthAsia} from 'react-icons/fa'
const Whyus = () => {
        
  return (
    <div className='flex flex-col items-center justify-center  w-full'>
      <h1  className="max-sm:text-2xl max-sm:text-left text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 
      mb-10 py-5">Why Appondas ?</h1>
      <div className="flex gap-2 
      max-lg:grid-cols-2 max-lg:grid max-lg:w-[80%] max-lg:items-center max-lg:place-items-center
      max-sm:flex-col max-sm:flex">
        <div className="flex flex-col items-center justify-center
         bg-gradient-to-b from-yellow-500 via-orange-500 to-red-500 px-2 py-2 w-[250px] h-[250px]
         max-lg:w-[175px]  max-lg:h-[175px]">
          <MdSpeed className="text-8xl text-white max-lg:text-5xl" />
          <p className="text-2xl text-center text-white max-lg:text-xl">Faster <br /> Development</p>
        </div>
        <div className="flex flex-col items-center justify-center mt-6 max-sm:mt-0
         bg-gradient-to-t from-cyan-500 via-sky-700 to-blue-900 px-2 py-2 w-[250px] h-[250px]
         max-lg:w-[175px]  max-lg:h-[175px]">
          <AiOutlineFundProjectionScreen className="text-8xl text-white max-lg:text-5xl" />
          <p className="text-2xl text-center text-white max-lg:text-xl">300+ <br /> Projects Delivered</p>
        </div>
        <div className="flex flex-col items-center justify-center
         bg-gradient-to-t from-yellow-500 via-orange-500 to-red-500 px-2 py-2 w-[250px] h-[250px]
         max-lg:w-[175px]  max-lg:h-[175px]">
          <GiPencilBrush className="text-8xl text-white max-lg:text-5xl" />
          <p className="text-2xl text-center text-white max-lg:text-xl">Minimalistic <br /> Design</p>
        </div>
        <div className="flex flex-col items-center justify-center mt-6 max-sm:mt-0
         bg-gradient-to-b from-cyan-500 via-sky-700 to-blue-900 px-2 py-2 w-[250px] h-[250px]
         max-lg:w-[175px]  max-lg:h-[175px]">
          <BsBuildingFillGear className="text-8xl text-white max-lg:text-5xl " />
          <p className="text-2xl text-center text-white max-lg:text-xl">Enterprise <br /> Enabled</p>
        </div>
      </div>
      <div className="flex gap-2 
      max-lg:grid-cols-2 max-lg:grid max-lg:w-[80%] max-lg:items-center max-lg:place-items-center
      max-sm:flex-col max-sm:flex">
      
        <div className="flex flex-col items-center justify-center mt-2
         bg-gradient-to-t from-cyan-500 via-sky-700 to-blue-900 px-2 py-2 w-[250px] h-[250px]
         max-lg:w-[175px]  max-lg:h-[175px]">
          <IoIosPeople className="text-8xl text-white max-lg:text-5xl " />
          <p className="text-2xl text-center text-white max-lg:text-xl">10+ Years <br /> Of Experience</p>
        </div>
        
        <div className="flex flex-col items-center justify-center mt-6 max-sm:mt-0
         bg-gradient-to-t from-yellow-500 via-orange-500 to-red-500 px-2 py-2 w-[250px] h-[250px]
         max-lg:w-[175px]  max-lg:h-[175px]">
          <GiWorld className="text-8xl text-white max-lg:text-5xl" />
          <p className="text-2xl text-center text-white max-lg:text-xl">20+ <br /> Countries</p>
        </div>
        <div className="flex flex-col items-center justify-center mt-0
         bg-gradient-to-b from-cyan-500 via-sky-700 to-blue-900 px-2 py-2 w-[250px] h-[250px]
         max-lg:w-[175px]  max-lg:h-[175px]">
          <GiPuzzle className="text-8xl text-white max-lg:text-5xl " />
          <p className="text-2xl text-center text-white max-lg:text-xl">Seamless <br /> Backend Integration</p>
        </div>
        <div className="flex flex-col items-center justify-center mt-6 max-sm:mt-0
         bg-gradient-to-b from-yellow-500 via-orange-500 to-red-500 px-2 py-2 w-[250px] h-[250px]
         max-lg:w-[175px]  max-lg:h-[175px]">
          <MdSecurity className="text-8xl text-white max-lg:text-5xl" />
          <p className="text-2xl text-center text-white max-lg:text-xl">Optimal <br /> security</p>
        </div>
      </div>
      <button className="flex items-center justify-center bg-gradient-to-r from-yellow-600 to-red-600 py-3 px-10 rounded-md text-white
      font-bold mt-5">About Us <IoIosArrowForward className="font-bold text-2xl"/></button>
    </div>
  );
};

export default Whyus;
