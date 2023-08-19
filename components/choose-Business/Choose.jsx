import React from "react";

const Choose = () => {
  return (
    <div className='w-[1050px] mt-10 flex items-center justify-between m-auto h-[30vh] bg-white 
    max-lg:w-[800px] max-lg:grid max-lg:grid-cols-1 max-lg:place-items-center max-lg:gap-5
    max-md:w-full max-sm:h-full '>
      <div>
        <p className="px-5 text-3xl w-[500px] text-yahia-500 
          max-sm:text-xl max-sm:text-center max-sm:w-[360px]
        ">
        What type of cooperation model fits your project needs best?
        </p>
      </div>
      <div className="flex items-center justify-center gap-5 px-5 max-md:gap-1 max-sm:grid max-sm:place-items-center  " >
        <button className="border-2 py-14 px-14 text-xl rounded text-yahia-500 relative  ">Web & App <br />  Development
         <span className="absolute top-[5%] left-[90%] bg-red-500 rounded-[50%]"> -</span>
        </button>
        <button className="border-2 py-14 px-14 text-xl rounded text-yahia-500">Staff-Storage <br /> System</button>
      </div>
    </div>
  );
};

export default Choose;
