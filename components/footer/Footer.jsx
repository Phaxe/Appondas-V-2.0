import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoInstagram,
} from "react-icons/bi";
const Footer = () => {
  return (
    <div className="bg-yahia-700">
      <div className="py-10 flex flex-col items-center justify-center gap-5">
        <h1 className="text-4xl mt-5 font-semibold text-center 
         bg-clip-text text-transparent bg-gradient-to-l from-yellow-500 via-orange-500 to-red-500">Grow faster with a dedicated team of JS & <br /> .NET experts.</h1>
        <button className="text-medium bg-yahia-500 py-3 px-6 text-white rounded  duration-300
       hover:bg-orange-500 hover:duration-300"><Link href='/about'>CONTACT US</Link></button>
      </div>
      <div className='w-[1050px] h-[30vh] flex items-center justify-between m-auto mt-5 
      max-lg:w-[800px] max-md:w-[550px] max-sm:grid max-sm:grid-cols-2 max-sm:place-items-center max-sm:w-[100%] max-sm:h-full '>
        <div>
          <Image
            src='/logo.png'
            priority
            width={150}
            height={120}
            alt='appondas-image'
          />
          <ul className='flex flex-col items-start justify-center gap-2 mt-2 ml-5 '>
            <li className='text-white hover:text-orange-500 duration-300 cursor-pointer'>Home</li>
            <li className='text-white  hover:text-orange-500 duration-300 cursor-pointer'>Features</li>
            <li className='text-white hover:text-orange-500 duration-300 cursor-pointer'>Projects</li>
            <li className='text-white hover:text-orange-500 duration-300 cursor-pointer'>About us</li>
            <li className='text-white hover:text-orange-500 duration-300 cursor-pointer'>Contact</li>
          </ul>
        </div>
        <div>
          <h1 className='text-2xl  underline underline-offset-8 text-orange-500'>
            Services
          </h1>
          <ul className='flex flex-col items-start justify-center gap-2 mt-2 ml-1'>
            <li className='text-white hover:text-orange-500 duration-300 cursor-pointer'>Home</li>
            <li className='text-white hover:text-orange-500 duration-300 cursor-pointer'>Features</li>
            <li className='text-white hover:text-orange-500 duration-300 cursor-pointer'>Projects</li>
            <li className='text-white hover:text-orange-500 duration-300 cursor-pointer' i>
              About us
            </li>
            <li className='text-white'>Contact</li>
          </ul>
        </div>
        <div>
          <h1 className='text-2xl text-orange-500 underline underline-offset-8'>
            Tech Stack
          </h1>
          <ul className='flex flex-col items-start justify-center gap-2 mt-2 ml-1'>
            <li  className="text-white hover:text-orange-500 duration-300 cursor-pointer">Node Js</li>
            <li  className="text-white hover:text-orange-500 duration-300 cursor-pointer">React Js</li>

            <li  className="text-white hover:text-orange-500 duration-300 cursor-pointer">MongoDB</li>
            <li  className="text-white hover:text-orange-500 duration-300 cursor-pointer">My SQL</li>

            <li  className="text-white hover:text-orange-500 duration-300 cursor-pointer">See More</li>
          </ul>
        </div>
      </div>
      <div className='w-[100%] h-[10vh] bg-white  flex items-center justify-around gap-16 m-auto
      max-sm:flex-col max-sm:h-full max-sm:py-5'>
        <ul className='flex  items-center justify-center gap-5'>
        <li className='text-4xl text-yahia-500 hover:bg-orange-500 cursor-pointer px-2 py-2 hover:rounded-[50%] duration-300'>
            <BiLogoFacebook />
          </li>
          <li className='text-4xl text-yahia-500 hover:bg-orange-500 cursor-pointer px-2 py-2 hover:rounded-[50%] duration-300'>
            <BiLogoInstagram />
          </li>
          <li className='text-4xl text-yahia-500 hover:bg-orange-500 cursor-pointer px-2 py-2 hover:rounded-[50%] duration-300'>
            <BiLogoGithub />
          </li>
          <li className='text-4xl text-yahia-500 hover:bg-orange-500 cursor-pointer px-2 py-2 hover:rounded-[50%] duration-300'>
            <BiLogoTwitter />
          </li>
          <li className='text-4xl text-yahia-500 hover:bg-orange-500 cursor-pointer px-2 py-2 hover:rounded-[50%] duration-300'>
            <BiLogoLinkedin />
          </li>
        </ul>
        <ul className='flex  items-center justify-center gap-5'>
          <p className='underline underline-offset-8 text-yahia-500 cursor-pointer'>
            Terms of Service
          </p>
          <p className='underline underline-offset-8 text-yahia-500 cursor-pointer'>
            Privacy Policy
          </p>
        </ul>
      </div>
      <div className='w-[100%] text-white  flex items-center justify-center m-auto'>
        <p>© 2023. Appondas LLC. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
