'use client'
import Image from 'next/image'
import React from 'react'

const PagesBanners = ({pic, header, text}) => {
  return (
    <div className="relative w-full">
    <Image src={pic} className="h-[80vh] object-cover" />
    <div className="absolute top-2/4 left-40 max-lg:left-10">
      <h1 className="text-white text-6xl font-semibold mb-5 max-lg:text-2xl">
        {header}
        <span className="text-yellow-500">.</span>
      </h1>
      <p className="text-white text-lg font-semibold">
        {text}
      </p>
    </div>
  </div>
  )
}

export default PagesBanners