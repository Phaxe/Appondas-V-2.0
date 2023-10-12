import Image from "next/image";
import React from "react";
import dashboard from "../../../public/dashboard.png";
import shop from "../../../public/axios.png";
import grill from "../../../public/grill.png";
import { IoIosArrowForward } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
const Catalog = () => {
  return (
    <div id="catalog" 
    className=" rounded-md bg-yahia-800 py-10 my-10 h-full flex flex-col items-center justify-center responsive">
      {/* ****SINGLE-PROJECT-CARD******** */}

      <div className="flex flex-col items-center justify-center pb-10 bg-yahia-800 rounded-md">
     
        <div className='py-3 flex flex-col items-center justify-center max-lg:px-3'>
        <h1 className='text-3xl py-3 font-medium bg-clip-text text-transparent bg-gradient-to-l from-orange-700 via-orange-400 to-orange-700 max-lg:text-xl '>
        Customers rely on Appondas
        </h1>
        <span className='py-3 xl:px-10 text-white text-center max-lg:text-sm'>
        Appondas is the answer for brands that values speed, quality and scale, our proven track-records<br /> 
        in complex projects for 50+ fast-growing companies in over 10 different industries.<br /> we are your one-stop shop for all your unique requirements, be
        it individual resources,<br /> dedicated teams or trunkey project - we got you covered.
        </span>
      </div>

        <div className="flex flex-col items-center justify-center">
          <div
            className="h-[550px] flex justify-center items-center mx-auto
          "
          >
            <Image 
              src={dashboard}c
              className="h-[100%] w-[80%] mx-auto object-cover rounded-md "
              alt="dashboard"
            />
          </div>
          <div
            className="h-[150px] max-md:h-[200px] w-[80%] bg-gray-100 flex items-center justify-between">
            <div className="w-[80%]">
              <p className="text-gray-700 pl-4 pt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci eveniet incidunt ea voluptas maiores molestias?
              </p>
              <p
                className="text-gray-700 flex items-center gap-2 underline-offset-2 underline pl-4 pt-4 font-semibold cursor-pointer 
              hover:scale-y-110 hover:duration-300 "
              >
                <span>Learn More</span>
                <span>
                  <BsArrowRight className="font-semibold" />
                </span>
              </p>
            </div>
            <div className="flex flex-col m-auto gap-4 max-md:flex-col px-3">
              <button className="bg-gray-300 py-2 px-2 rounded-3xl">
                7 specialists
              </button>
              <button className="bg-gray-300 py-2 px-2 rounded-3xl">
                22 months
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ****DOUBLE-PROJECT-CARD******** */}

      <div className="flex items-center justify-center pb-10 md:px-3 bg-yahia-800 rounded-md  responsive ">
        <div className="flex  items-center justify-between  w-[1050px] max-xl:w-[750px]  max-md:flex-col gap-5  ">
          <div className="flex flex-col items-center justify-center  rounded-md  ">
            <div
              className="w-[500px] h-[500px] flex justify-center items-center mx-auto
            max-xl:w-[350px] max-xl:h-[300px] max-md:w-[450px] max-sm:w-[340px]
          "
            >
              <Image
                src={shop}
                className="h-[100%] w-full mx-auto object-left object-cover rounded-md  "
                alt="dashboard"
              />
            </div>
            <div
              className="h-[220px] w-[500px] bg-gray-100 flex flex-col items-center justify-between pt-4 
              max-xl:w-[350px] max-xl:h-[300px] max-md:w-[450px] max-sm:w-[340px]
           "
            >
              <div className="w-[80%] ">
                <p className="text-gray-700 pl-4 pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci eveniet incidunt ea voluptas maiores molestias?
                </p>
                <p
                  className="text-gray-700 flex items-center gap-2 underline-offset-2 underline pl-4 pt-4 font-semibold cursor-pointer 
              hover:scale-y-110 hover:duration-300 "
                >
                  <span>Learn More</span>
                  <span>
                    <BsArrowRight className="font-semibold" />
                  </span>
                </p>
              </div>
              <div className="flex m-auto gap-4 flex-row">
                <button className="bg-gray-300 py-2 px-2 rounded-3xl">
                  7 specialists
                </button>
                <button className="bg-gray-300 py-2 px-2 rounded-3xl">
                  22 months
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center border rounded-md">
            <div
              className="w-[500px] h-[500px] flex justify-center items-center mx-auto
            max-xl:w-[350px] max-xl:h-[300px] max-md:w-[450px] max-sm:w-[340px]
          "
            >
              <Image
                src={grill}
                className="h-[100%] w-full mx-auto object-left object-cover rounded-md  "
                alt="dashboard"
              />
            </div>
            <div
              className="h-[220px] w-[500px] bg-gray-100 flex flex-col items-center justify-between pt-4
              max-xl:w-[350px] max-xl:h-[300px] max-md:w-[450px] max-sm:w-[340px]
           "
            >
              <div className="w-[80%]">
                <p className="text-gray-700 pl-4 pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci eveniet incidunt ea voluptas maiores molestias?
                </p>
                <p
                  className="text-gray-700 flex items-center gap-2 underline-offset-2 underline pl-4 pt-4 font-semibold cursor-pointer 
              hover:scale-y-110 hover:duration-300 "
                >
                  <span>Learn More</span>
                  <span>
                    <BsArrowRight className="font-semibold" />
                  </span>
                </p>
              </div>
              <div className="flex m-auto gap-4 flex-row">
                <button className="bg-gray-300 py-2 px-2 rounded-3xl">
                  7 specialists
                </button>
                <button className="bg-gray-300 py-2 px-2 rounded-3xl">
                  22 months
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="m-auto flex "
       
      >
        <Link href="/Projects"  className="flex items-center justify-center m-auto  bg-gradient-to-r from-orange-700 via-orange-400 to-orange-700 hover:text-yahia-500 duration-300 py-3 px-10 rounded-md text-white
      font-bold">
        Projects <IoIosArrowForward className="font-bold text-2xl" />
        </Link>
       
      </button>
    </div>
  );
};

export default Catalog;
