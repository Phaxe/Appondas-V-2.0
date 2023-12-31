import React from "react";

const ServSec = () => {
  return (
    <div className="responsive rounded-md h-full m-auto  bg-white mb-[5rem] px-[70px] py-[40px] max-md:px-1 max-md:py-1">
      <h1 className="text-4xl pb-5 max-md:py-5 max-md:px-5">Appondas's guarantees</h1>
      <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
        <div className=" px-5 py-5 border-2  rounded  shadow-lg"> 
          <h1 className="pb-5 text-xl text-yahia-500">High-quality practices</h1>
          <p>
            In order to apply the most cutting-edge approaches and provide
            high-quality Software Development Services, our experts are
            regularly certified by the most trusted and progressive entities.
          </p>
        </div>
        <div className=" px-5 py-5 border-2  rounded  shadow-lg">
          <h1 className="pb-5 text-xl text-yahia-500">Customer trust</h1>
          <p>
            Thanks to our high professional standards, effective development
            workflows, and focus on quality, we have earned a positive
            reputation in the market, reflected in our rankings – for example,
            4.9/5 on Clutch.
          </p>
        </div>
        <div className=" px-5 py-5 border-2  rounded  shadow-lg">
          <h1 className="pb-5 text-xl text-yahia-500">Strategic partnerships</h1>
          <p>
            Appondas's recurring and referring customers prove our reliability
            and dedication. Once your IT project is completed, we will be happy
            to work with you to implement new ones, provide ongoing support and
            maintenance, or upgrade your existing software.
          </p>
        </div>
        <div className=" px-5 py-5 border-2  rounded  shadow-lg"> 
          <h1 className="pb-5 text-xl text-yahia-500">Individual approach</h1>
          <p>
            Appondas is a supplier of Software Development Services employing
            and allocating IT specialists with both the hard and soft skills
            required to seamlessly integrate with your in-house team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServSec;
