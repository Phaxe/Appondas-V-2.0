import ServiceCard from "@/components/service-card/Service-Card";
import Whyus from "@/components/why-us/Why-us";
import React from "react";

const Features = () => {
  return (
    <div className="bg-yahia-700 py-10">
    <div id='features' className=" flex flex-col items-center justify-center align-middle w-full relative ">
      <div className="text-center flex flex-col   text-white  max-lg:w-[80%] max-sm:w-[90%]">
        <h1 className="text-center py-5 text-3xl font-medium w-[80%] m-auto max-sm:text-xl 
        bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 
      " >Brilliant web design, simplified</h1>
        <p  className="text-center text-xl w-[60%] m-auto max-sm:text-base pb-5">
          Our website builder helps bring your unique vision to life—no design
          or code experience required.  Create a customizable, mobile-optimized
          website within the hour.  All you need to start is a domain name and a
          vision for your website.  If you're building a small business website,
          online store, or otherwise, Mailchimp can simplify the process.
        </p>
      </div>
    </div>
    <ServiceCard/>
    <Whyus/>
    </div>
    
  );
};

export default Features;
