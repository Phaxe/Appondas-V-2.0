"use client";
import Image from "next/image";
import React, { useState } from "react";
import Office from "../../public/office.jpg";
import {GiCheckMark} from 'react-icons/gi'
import { ServiceData } from "../Data.js";
import { IoIosPeople, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Accordions from "./Accordion";


const ServicePage = () => {
  const [toggle, setToggle] = useState(1);
  return (
    <div className="w-full h-full flex flex-col gap-10 bg-yahia-700  ">
      <div className="relative">
        <Image src={Office} className="h-[700px] object-cover" />
        <div className="absolute top-2/4 left-40">
          <h1 className="text-white text-6xl font-semibold mb-5">
            IT Services with Sparkling Results{" "}
            <span className="text-yellow-500">.</span>
          </h1>
          <p className="text-white text-lg font-semibold">
            Reach your business goals with the entire range of Software
            Development Services we provide.
          </p>
        </div>
      </div>
      <div className="m-auto h-full bg-white px-[70px] py-[40px] mt-10 responsive rounded-md max-md:px-1 max-md:py-1">
        <div>
          <h1 className="text-4xl mb-5 max-xl:text-2xl max-md:py-5 max-md:px-5">Services we provide</h1>
        </div>

        <div className="flex justify-between items-center w-full gap-10 max-lg:hidden">
          <div className="w-[30%] h-full">
            <ul className="border rounded-lg flex flex-col ">
              {ServiceData.map(({ Category, id }) => (
                <button
                  className={ toggle === 1 ? "text-xl text-left  first:bg-gray-400 first:font-semibold  hover:bg-gray-200 py-5 px-5 max-xl:text-base" : "text-xl text-left  focus:bg-gray-400 focus:font-semibold  hover:bg-gray-200 py-5 px-5 max-xl:text-base"}
                  onClick={() => setToggle(id)}
                >
                  {Category}
                </button>
              ))}
            </ul>
          </div>
          {ServiceData.map((item) => (
            <>
              {toggle === item.id ? (
                <div
                  id={item.id}
                  className="w-[70%]  h-full flex flex-col gap-5"
                >
                  <div>
                    <h5 className="text-2xl font-semibold pb-5 px-5 max-xl:text-base">
                      {item.Category}
                    </h5>
                    <p className="px-5 font-medium max-xl:text-sm">{item.mainText}</p>
                  </div>
                  <div className="mb-5 py-5 px-5 mx-10 bg-gray-200 border rounded-md w-[85%] max-xl:text-sm">
                    <h1 className="pb-5 ">{item.scndText}</h1>
                    <p className="pb-3 flex  justify-center gap-2"><GiCheckMark/>  {item.PointA}</p>
                    <p className="pb-3 flex  justify-center gap-2"><GiCheckMark/> {item.PointB}</p>
                    <p className="pb-3 flex  justify-center gap-2"><GiCheckMark/> {item.PointC}</p>
                  </div>
                
                  <button>
        <Link className="flex items-center justify-center bg-gradient-to-r from-orange-700 via-orange-500 to-orange-700 py-3 px-5 ml-10 rounded-md text-white hover:text-orange-500 duration-300
      font-bold mt-5 w-[30%] " href='/about'>
         See More <IoIosArrowForward className="font-bold text-2xl " />
        </Link>
      </button>
                </div>
              ) : null}
            </>
          ))}
        </div>
        <Accordions/>
      </div>
      
    </div>
  );
};

export default ServicePage;
