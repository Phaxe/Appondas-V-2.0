import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className='bg-yahia-700 py-14 flex justify-center items-center m-auto w-full'>
      <div className=" w-[1200px] flex justify-center items-center gap-16  max-md:flex-col ">
        <div>
          <Image src='/about.jpg' width={800} height={800} className="object-cover" />
        </div>
        <div className="flex flex-col items-start justify-center gap-8">
          <h1 className="text-orange-500 text-3xl underline underline-offset-8">About Us</h1>
          <p className="text-white">
            For small & medium businesses that need a high quality and cost
            effective Websites or an Apps. Appondas is a small web development
            company that delivers quick & high-end Web services that are
            financially flexible in Europe, US and other Regions
          </p>
          <h1 className="text-orange-500 text-3xl underline underline-offset-8">Our Mission</h1>
          <p className="text-white">
            Our mission is to build digital products that last. By being
            pragmatic product experts with a narrow tech specialization, we're
            able to avoid surprises and deliver highest quality software
            consistently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
