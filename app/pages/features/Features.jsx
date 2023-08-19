import ServiceCard from "@/components/service-card/Service-Card";
import Whyus from "@/components/why-us/Why-us";
import React from "react";

const Features = () => {
  return (
    <div className="py-14 mb-5 bg-yahia-700">
    <div id='features' className=" flex flex-col items-center justify-center align-middle w-full relative ">
      <div className="text-center flex flex-col gap-2 pt-10 w-[45%]  text-white  max-lg:w-[80%] max-sm:w-[90%]">
        <h1 className="max-sm:text-2xl max-sm:text-left text-4xl font-bold  
        bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 
      " >Brilliant web design, simplified</h1>
        <p className=" text-center max-sm:text-lg max-sm:text-start">
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
