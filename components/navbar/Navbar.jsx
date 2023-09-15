"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";
function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = usePathname();
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div>
      <nav
        className={`${
          isScrolled
            ? "w-full h-[60px] z-50 bg-yahia-500 fixed top-0 left-0 duration-300 right-0 z-10 max-md:h-[80px] "
            : " w-full h-[60px]  duration-300  fixed top-0 left-0 right-0 z-10 bg-yahia-500/[0.7] max-md:h-[80px]"
        }`}
      >
        <div
          className={`${
            navbar
              ? "justify-between items-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 max-md:bg-yahia-500/[0.9]"
              : "justify-between items-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8  "
          }`}
        >
          <div>
            <div className="flex items-center justify-between  md:py-3 md:block max-md:py-3">
              {/* LOGO */}
              <Link href="/">
                <Image
                  src="/logo.png"
                  priority
                  width={100}
                  height={50}
                  alt="appondas-image"
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700hover: rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <AiOutlineClose className="flex text-white text-3xl" />
                  ) : (
                    <RiMenu3Fill className="flex text-white text-3xl" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div
              className={`flex-1  justify-center  items-center text-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12  md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen items-center justify-center  md:h-auto  md:flex  ">
                <li
                  className=" text-xl text-white py-1 md:px-4 text-center max-sm:text-left   rounded-none
                   border-white  max-sm:pb-10
                 hover:text-white font-semibold  hover:rounded-md"
                >
                  <Link
                  className={` ${
                    router === "/"
                      ? "bg-clip-text text-transparent text-transparent decoration-orange-500 bg-gradient-to-r from-yellow-600 to-red-600 underline underline-offset-2 max-sm:text-4xl  "
                      : " font-semibold duration-300 hover:duration-300 hover:underline  hover:underline-offset-2  hover:bg-clip-text   hover:text-transparent decoration-orange-500 hover:bg-gradient-to-r from-yellow-600 to-red-600  max-sm:text-4xl"
                  }`}
                    href="/"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Home
                  </Link>
                </li>
                <li
                  className=" text-xl text-white py-1 md:px-4 text-center max-sm:text-left   rounded-none
                   border-white  max-sm:pb-10
                 hover:text-white font-semibold  hover:rounded-md"
                >
                  <Link
                  className={` ${
                    router === "/Services"
                      ? "bg-clip-text text-transparent text-transparent decoration-orange-500 bg-gradient-to-r from-yellow-600 to-red-600 underline underline-offset-2 max-sm:text-4xl  "
                      : " font-semibold duration-300 hover:duration-300 hover:underline  hover:underline-offset-2  hover:bg-clip-text   hover:text-transparent decoration-orange-500 hover:bg-gradient-to-r from-yellow-600 to-red-600  max-sm:text-4xl"
                  }`}
                    href="/Services"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Services
                  </Link>
                </li>
                <li
                  className=" text-xl text-white py-1 md:px-4 text-center max-sm:text-left   rounded-none
                   border-white  max-sm:pb-10
                 hover:text-white font-semibold  hover:rounded-md"
                >
                  <Link
                  className={` ${
                    router === "/Projects"
                      ? "bg-clip-text text-transparent text-transparent decoration-orange-500 bg-gradient-to-r from-yellow-600 to-red-600 underline underline-offset-2 max-sm:text-4xl  "
                      : " font-semibold duration-300 hover:duration-300 hover:underline  hover:underline-offset-2  hover:bg-clip-text   hover:text-transparent decoration-orange-500 hover:bg-gradient-to-r from-yellow-600 to-red-600  max-sm:text-4xl"
                  }`}
                    href="/Projects"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Projects
                  </Link>
                </li>
                <li
                  className=" text-xl text-white py-1 md:px-4 text-center max-sm:text-left   rounded-none
                   border-white  max-sm:pb-10
                 hover:text-white font-semibold  hover:rounded-md"
                >
                  <Link
                  className={` ${
                    router === "/about"
                      ? "bg-clip-text text-transparent text-transparent decoration-orange-500 bg-gradient-to-r from-yellow-600 to-red-600 underline underline-offset-2 max-sm:text-4xl  "
                      : " font-semibold duration-300 hover:duration-300 hover:underline  hover:underline-offset-2  hover:bg-clip-text   hover:text-transparent decoration-orange-500 hover:bg-gradient-to-r from-yellow-600 to-red-600  max-sm:text-4xl"
                  }`}
                    href="/about"
                    onClick={() => setNavbar(!navbar)}
                  >
                    About
                  </Link>
                </li>
                <li
                  className=" text-xl text-white py-1 md:px-4 text-center max-sm:text-left   rounded-none
                   border-white  max-sm:pb-10
                 hover:text-white font-semibold  hover:rounded-md"
                >
                  <Link
                  className={` ${
                    router === "/Contact"
                      ? "bg-clip-text text-transparent text-transparent decoration-orange-500 bg-gradient-to-r from-yellow-600 to-red-600 underline underline-offset-2 max-sm:text-4xl  "
                      : " font-semibold duration-300 hover:duration-300 hover:underline  hover:underline-offset-2  hover:bg-clip-text   hover:text-transparent decoration-orange-500 hover:bg-gradient-to-r from-yellow-600 to-red-600  max-sm:text-4xl"
                  }`}
                    href="/Contact"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
