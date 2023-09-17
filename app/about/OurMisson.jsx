import React from "react";

const OurMisson = () => {
  return (
    <div className="flex gap-10 items-center justify-center max-lg:grid place-items-center">
      <div className="w-[70%] flex flex-col gap-5 items-start justify-center text-white text-start max-md:w-full">
        <h1 className="text-3xl py-3 font-medium bg-clip-text text-transparent bg-gradient-to-l from-orange-700 via-orange-400 to-orange-700 max-lg:text-xl">Our Mission</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut debitis
          eum accusantium. Molestias eum sequi earum odit consequuntur ex
          ratione animi eaque voluptates. Reprehenderit, dolorum. Labore optio
          nemo distinctio ipsam est alias officiis, magnam explicabo eos,
          perspiciatis natus illum? Commodi natus recusandae corporis in! Libero
        </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse error quia molestias totam unde. Repudiandae.</p>
      </div>
      <div className='  w-full rounded-md '>
      <video  autoPlay muted   width="100%" className='object-cover rounded-md ' height="100%" loop  >
        
        <source  src="/Appondas-Video-New.4176041b.mp4"  type='video/mp4'/>
      </video>

      </div>
    </div>
  );
};

export default OurMisson;
