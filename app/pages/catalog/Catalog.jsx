import Image from "next/image";
import React from "react";
import dashboard from "../../../public/dashboard.png";
import shop from "../../../public/axios.png";
import grill from "../../../public/grill.png";
import { IoIosArrowForward } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
const Catalog = () => {
  return (
    <div id="catalog" className=" bg-yahia-700 pb-10">
      {/* ****SINGLE-PROJECT-CARD******** */}

      <div className="flex flex-col items-center justify-center pb-10">
        <div className="w-[1050px] max-sm:w-[340px]   max-xl:w-[750px] max-md:w-[450px]">
          <h1
            className="text-center pb-5 text-3xl font-medium w-[80%] m-auto max-sm:text-xl 
           bg-clip-text text-transparent bg-gradient-to-l from-yellow-500 via-orange-500 to-red-500 "
          >
            Customers rely on Appondas
          </h1>
          <p className="text-center text-white text-xl  w-[100%] m-auto max-sm:text-base pb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
            pariatur minima? A quibusdam eius ducimus! Ratione, aut autem omnis
            porro illo, ipsam illum placeat temporibus saepe ipsum natus
            obcaecati voluptates!
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div
            className="w-[1050px] h-[550px] flex justify-center items-center mx-auto
           max-xl:w-[750px] max-md:w-[450px] max-md:h-[300px]
           max-sm:w-[340px]"
          >
            <Image
              src={dashboard}
              className="h-[100%] w-full mx-auto object-cover  "
              alt="dashboard"
            />
          </div>
          <div
            className="h-[150px] w-[1050px] bg-gray-100 flex items-center justify-between
            max-xl:w-[750px] max-md:w-[450px] max-md:flex-col max-md:h-[220px] max-sm:w-[340px]"
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
            <div className="flex flex-col m-auto gap-4 max-md:flex-row">
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

      <div className="flex items-center justify-center pb-10">
        <div className="flex  items-center justify-between w-[1050px] max-xl:w-[750px]  max-md:flex-col gap-5">
          <div className="flex flex-col items-center justify-center ">
            <div
              className="w-[500px] h-[500px] flex justify-center items-center mx-auto
            max-xl:w-[350px] max-xl:h-[300px] max-md:w-[450px] max-sm:w-[340px]
          "
            >
              <Image
                src={shop}
                className="h-[100%] w-full mx-auto object-left object-cover  "
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

          <div className="flex flex-col items-center justify-center ">
            <div
              className="w-[500px] h-[500px] flex justify-center items-center mx-auto
            max-xl:w-[350px] max-xl:h-[300px] max-md:w-[450px] max-sm:w-[340px]
          "
            >
              <Image
                src={grill}
                className="h-[100%] w-full mx-auto object-left object-cover  "
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
      <button
        className="flex items-center justify-center m-auto  bg-gradient-to-r from-yellow-600 to-red-600 py-3 px-10 rounded-md text-white
      font-bold"
      >
        Projects <IoIosArrowForward className="font-bold text-2xl" />
      </button>
    </div>
  );
};

export default Catalog;
