import React from 'react'
import Office from "../../public/office.jpg";
import Image from "next/image";

const ProjectsBanner = () => {
  return (
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
  )
}

export default ProjectsBanner