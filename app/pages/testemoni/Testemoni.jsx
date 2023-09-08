import Image from "next/image";
import React from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { BsFillStarFill, BsStar } from "react-icons/bs";
const Testemoni = () => {
  return (
   <div className=" flex flex-col items-center justify-center responsive "> 
     <div
      id='portoflio'
      className='bg-yahia-800 h-full text-center py-14 rounded-md  '>
      <div className='py-5 max-lg:px-3'>
        <h1 className='text-3xl py-3 font-medium bg-clip-text text-transparent bg-gradient-to-l from-orange-700 via-orange-400 to-orange-700 max-lg:text-xl '>
          Business leaders from leading companies have <br /> trusted Appondas
          to build impactful WebApps.
        </h1>
        <span className='py-3 text-white max-lg:text-sm'>
          Companies from fintech, healthcare, education, game dev, IoT and
          martech work <br /> with us to grow their business through great
          software.
        </span>
      </div>
      <div className="grid grid-cols-2 gap-10 px-5 mt-8 max-lg:gap-1 max-md:grid-cols-1">
        {/* TESTEMONI-CARDS */}
   
        <div className="mt-20">
        <div className='flex flex-col px-6 rounded-xl py-10 gap-4  bg-gray-200'>
            <h1 className='flex text-xl font-medium max-lg:text-sm '>
              <span>
                <BiSolidQuoteLeft className='text-5xl text-yahia-500 max-lg:text-sm' />
              </span>{" "}
              The people from Appondas are highly-skilled in React and Node.js and they work hard to achieve our goals.
            </h1>
            <div className='self-end mt-5'>
              <ul className='flex items-center justify-center'>
                <li className='pr-5'>Rating:</li>
                <li>
                  <BsFillStarFill className="text-orange-500" />
                </li>
                <li>
                <BsFillStarFill className="text-orange-500" />
                </li>
                <li>
                <BsFillStarFill className="text-orange-500" />
                </li>
                <li>
                <BsFillStarFill className="text-orange-500" />
                </li>
                <li>
                <BsFillStarFill className="text-orange-500" />
                </li>
              </ul>
            </div>
          </div>
          <div className='flex items-center  gap-5'>
            <div className="px-3 py-3">
              <Image
                src='/anaa.jpg'
                width={75}
                height={75}
                className='rounded-[50%]'
              />
            </div>
            <div className="py-3 px-3  ">
              <h1 className='flex self-start font-medium text-white'>Yahia Altohamy</h1>
              <p className="text-white max-lg:text-[16px]">
                CEO of the Pyramids
              </p>
            </div>
          </div>
        </div>
        <div className="">
        <div className='flex flex-col px-6 rounded-xl py-10 gap-4  bg-gray-200'>
            <h1 className='flex text-xl font-medium max-lg:text-sm '>
              <span>
                <BiSolidQuoteLeft className='text-5xl text-yahia-500 max-lg:text-sm' />
              </span>{" "}
              The people from Appondas are highly-skilled in React and Node.js and they work hard to achieve our goals.
            </h1>
            <div className='self-end mt-5'>
              <ul className='flex items-center justify-center'>
                <li className='pr-5'>Rating:</li>
                <li>
                  <BsFillStarFill className="text-orange-500" />
                </li>
                <li>
                <BsFillStarFill className="text-orange-500" />
                </li>
                <li>
                <BsFillStarFill className="text-orange-500" />
                </li>
                <li>
                <BsFillStarFill className="text-orange-500" />
                </li>
                <li>
                <BsFillStarFill className="text-orange-500" />
                </li>
              </ul>
            </div>
          </div>
          <div className='flex items-center  gap-5'>
            <div className="px-3 py-3">
              <Image
                src='/anaa.jpg'
                width={75}
                height={75}
                className='rounded-[50%]'
              />
            </div>
            <div className="py-3 px-3  ">
              <h1 className='flex self-start font-medium text-white'>Yahia Altohamy</h1>
              <p className="text-white max-lg:text-[16px]">
                CEO of the Pyramids
              </p>
            </div>
          </div>
        </div>

     
        
        <div className="mt-20">
        <div className='flex flex-col px-6 rounded-xl py-10 gap-4  bg-gray-200'>
            <h1 className='flex text-xl font-medium max-lg:text-sm '>
              <span>
                <BiSolidQuoteLeft className='text-5xl text-yahia-500 max-lg:text-sm' />
              </span>{" "}
              The people from Appondas are highly-skilled in React and Node.js and they work hard to achieve our goals.
            </h1>
            <div className='self-end mt-5'>
              <ul className='flex items-center justify-center'>
                <li className='pr-5'>Rating:</li>
                <li>
                  <BsFillStarFill className="text-orange-500" />
                </li>
                <li>
                <BsFillStarFill className="text-orange-500" />
                </li>
                <li>
                <BsFillStarFill className="text-orange-500" />
                </li>
                <li>
                <BsFillStarFill className="text-orange-500" />
                </li>
                <li>
                <BsFillStarFill className="text-orange-500" />
                </li>
              </ul>
            </div>
          </div>
          <div className='flex items-center  gap-5'>
            <div className="px-3 py-3">
              <Image
                src='/anaa.jpg'
                width={75}
                height={75}
                className='rounded-[50%]'
              />
            </div>
            <div className="py-3 px-3  ">
              <h1 className='flex self-start font-medium text-white'>Yahia Altohamy</h1>
              <p className="text-white max-lg:text-[16px]">
                CEO of the Pyramids
              </p>
            </div>
          </div>
        </div>
        <div className="">
        <div className='flex flex-col px-6 rounded-xl py-10 gap-4  bg-gray-200'>
            <h1 className='flex text-xl font-medium max-lg:text-sm '>
              <span>
                <BiSolidQuoteLeft className='text-5xl text-yahia-500 max-lg:text-sm' />
              </span>{" "}
              The people from Appondas are highly-skilled in React and Node.js and they work hard to achieve our goals.
            </h1>
            <div className='self-end mt-5'>
              <ul className='flex items-center justify-center'>
                <li className='pr-5'>Rating:</li>
                <li>
                  <BsFillStarFill className="text-orange-500" />
                </li>
                <li>
                <BsFillStarFill className="text-orange-500" />
                </li>
                <li>
                <BsFillStarFill className="text-orange-500" />
                </li>
                <li>
                <BsFillStarFill className="text-orange-500" />
                </li>
                <li>
                <BsFillStarFill className="text-orange-500" />
                </li>
              </ul>
            </div>
          </div>
          <div className='flex items-center  gap-5'>
            <div className="px-3 py-3">
              <Image
                src='/anaa.jpg'
                width={75}
                height={75}
                className='rounded-[50%]'
              />
            </div>
            <div className="py-3 px-3  ">
              <h1 className='flex self-start font-medium text-white'>Yahia Altohamy</h1>
              <p className="text-white max-lg:text-[16px]">
                CEO of the Pyramids
              </p>
            </div>
          </div>
        </div>
        
       
      </div>
    </div>
   </div>
  );
};

export default Testemoni;
