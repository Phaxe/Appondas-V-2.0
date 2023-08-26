import React from "react";
import Image from "next/image";
const Tech = () => {
  return (
    <div className="bg-white w-[1500px] border rounded-md">
  <div className="w-[1050px] flex flex-col items-center justify-center py-14 m-auto bg-white
    max-lg:w-[800px] max-md:w-[550px] max-sm:w-[360px]">
      <div className="mb-10">
        <h1 className="text-center py-5 text-3xl font-medium w-[80%] m-auto max-sm:text-xl">
          Tech stack that serves you well today and when you grow 10x in the
          next 24 months.
        </h1>
        <p className="text-center text-xl w-[60%] m-auto max-sm:text-base">
          Get an unbiased perspective on the best frameworks and tools for your
          project. With 70+ completed projects, we’ve seen enough to save you
          from trouble.
        </p>
      </div>
      <div className="mb-16">
        <ul className="grid grid-cols-4 items-center gap-16 mt-10
        max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            <li><Image src='/react.svg' width={200} height={200}/></li>
            <li><Image src='/nodejs.svg' width={200} height={200}/></li>
            <li><Image src='/typescript.svg' width={200} height={200}/></li>
            <li><Image src='/native.svg' width={200} height={200}/></li>
            <li><Image src='/net.svg' width={200} height={200}/></li>
            <li><Image src='/mysql.svg' width={200} height={200}/></li>
            <li><Image src='/php-logo.svg' width={200} height={200}/></li>
            <li><Image src='/amazon.svg' width={200} height={200}/></li>
        </ul>
      </div>
    </div>
    </div>
  
  );
};

export default Tech;
