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
    <div className="bg-yahia-700">
   <FooterContact/>
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
            <li className='text-white hover:text-orange-500 duration-300 cursor-pointer'>E-mail : <span className="font-medium">Support@appondas.com</span></li>
            <li className='text-white  hover:text-orange-500 duration-300 cursor-pointer'>Office : <span className="font-medium">22 Wadi-Degla Maadi</span></li>
            <li className='text-white hover:text-orange-500 duration-300 cursor-pointer'>Item : <span className="font-medium">text to be filled</span> </li>
            <li className='text-white hover:text-orange-500 duration-300 cursor-pointer'>Item : <span className="font-medium">text to be filled</span> </li>
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

      <div className='w-[100%] text-yahia-500 bg-white font-semibold   flex items-center justify-center m-auto'>
        <p>© 2023. Appondas LLC. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
