import React from "react";
import Misson from "./Misson";
import Team from "./Team";
import Image from "next/image";
import OurMisson from "./OurMisson";

const AboutContent = () => {
  return (
    <div className="responsive flex flex-col items-center justify-center gap-10" >
      <div className="responsive">
      <div className="bg-yahia-700 mt-10 rounded-md">
        <Misson />
      </div>
    </div>
    <OurMisson/>
   <div className="responsive bg-gray-200 rounded-md">
   <div className="flex items-center justify-between py-10 px-10">
        <div className="w-full">
          <Team />
        </div>
        <div className=""> 
        <Image
                src='/anaa.jpg'
                width={500}
                height={500}
                className='rounded-md   object-cover'
              />
        </div>
      </div>
 
   </div>
   <div className="responsive bg-gray-200 rounded-md">
   <div className="flex items-center justify-between py-10 px-10">
      
      <div className=""> 
      <Image
              src='/anaa.jpg'
              width={500}
              height={500}
              className='rounded-md   object-cover'
            />
      </div>
      <div className="w-full">
        <Team />
      </div>
    </div>
    </div>

  
    </div>
  
  );
};

export default AboutContent;
