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
import FooterContact from "./FooterContact";
const Footer = () => {
  return (
    <div className="bg-yahia-800 w-full flex flex-col items-center justify-center mt-10   ">
   {/* <FooterContact/> */}
      <div className='w-[1050px] h-full flex items-center justify-between m-auto mt-5 px-5 py-5
      max-lg:w-full max-md:w-full max-md:grid max-md:grid-cols-2 max-sm:grid max-sm:grid-cols-1 max-sm:gap-5 max-sm:px-5 max-sm:m-0 max-sm:w-[390px] max-sm:h-full '>
        <div>
          <Image
            src='/logo.png'
            priority
            width={150}
            height={120}
            alt='appondas-image'
          />
          <ul className='flex flex-col items-start justify-center gap-2 mt-2 ml-5 '>
            <li className='text-white hover:text-orange-500 duration-300 cursor-pointer'>E-mail : <span className="font-medium">Contact@appondas.com</span></li>
            <li className='text-white  hover:text-orange-500 duration-300 cursor-pointer'>Office : <span className="font-medium">Carrer 1, 85 Paterna - Valencia</span></li>
            <li className='text-white hover:text-orange-500 duration-300 cursor-pointer'>Working Days : <span className="font-medium">Mon - Fri</span> </li>
            <li className='text-white hover:text-orange-500 duration-300 cursor-pointer'>Working Hours : <span className="font-medium">08:00 - 18:00</span> </li>
            <ul className="flex ">
            <li className='text-4xl text-orange-500 cursor-pointer  py-2 hover:rounded-[50%] duration-300'>
            <BiLogoFacebook />
          </li>
          <li className='text-4xl  text-orange-500 cursor-pointer px-2 py-2 hover:rounded-[50%] duration-300'>
            <BiLogoInstagram />
          </li>
          <li className='text-4xl  text-orange-500 cursor-pointer px-2 py-2 hover:rounded-[50%] duration-300'>
            <BiLogoGithub />
          </li>
          <li className='text-4xl  text-orange-500 cursor-pointer px-2 py-2 hover:rounded-[50%] duration-300'>
            <BiLogoTwitter />
          </li>
          <li className='text-4xl  text-orange-500 cursor-pointer px-2 py-2 hover:rounded-[50%] duration-300'>
            <BiLogoLinkedin />
          </li>
            </ul>
          </ul>
        </div>
        <div>
          <h1 className='text-2xl  underline underline-offset-8 text-orange-500'>
            Services
          </h1>
          <ul className='flex flex-col items-start justify-center gap-2 mt-2 ml-1'>
            <li className='text-white hover:text-orange-500 duration-300 cursor-pointer'>Web Development</li>
            <li className='text-white hover:text-orange-500 duration-300 cursor-pointer'>UX/UI Desgin</li>
            <li className='text-white hover:text-orange-500 duration-300 cursor-pointer'>Mobile Development</li>
            <li className='text-white hover:text-orange-500 duration-300 cursor-pointer'>Cloud Consulting </li>
            <li className='text-white hover:text-orange-500 duration-300 cursor-pointer'>Redesgin Service</li>

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

      <div className='w-full text-yahia-500 bg-white font-semibold   flex items-center justify-center '>
        <p>© 2023. Appondas LLC. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
