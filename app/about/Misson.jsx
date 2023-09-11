import React from "react";
import AppondasLogo from "../../public/logo.png";
import Image from "next/image";
const Misson = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="h-[30vh] w-[35vw]">
        <Image src={AppondasLogo} className=" object-cover" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-center w-[50%] text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. br Inventore,
          magni! Sit voluptatibus ipsa sunt harum consequatur, est rem dolor
          reprehenderit nisi minus impedit laborum, dignissimos provident autem
          soluta facilis temporibus? Cum nam distinctio voluptatum, veritatis
          tempore vel deleniti autem? Iure?
        </p>
      </div>
    </div>
  );
};

export default Misson;
