import React from 'react'
import Link from "next/link";
const FooterContact = () => {
  return (
    <div className="py-10 flex flex-col items-center  justify-center gap-5 bg-white my-10  rounded w-full">
    <h1 className="text-4xl mt-5 font-semibold text-center max-md:text-[30px] max-sm:text-[16px]
     bg-clip-text text-transparent bg-gradient-to-r from-sky-900 via-sky-600 to-sky-900">Grow faster with a dedicated team of JS & <br /> .NET experts.</h1>
   <button
        className="flex items-center justify-center bg-gradient-to-r from-yahia-700 via-yahia-500 to-yahia-700  py-3 px-10 rounded-md text-white
      font-bold mt-5 hover:text-orange-500 duration-300"
      >
        <Link href="/Contact">
        Get in Touch
        </Link>
       
      </button>
  </div>
  )
}

export default FooterContact