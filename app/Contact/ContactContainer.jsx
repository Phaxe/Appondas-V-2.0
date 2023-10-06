import React from "react";
import { ServiceData } from "../Data";
const ContactContainer = () => {
  return (
    <div className="responsive bg-white m-auto px-10 py-10 my-10">
      <h1 className="py-10 text-3xl font-bold">Tell us about your project.</h1>
      <form className="flex flex-col gap-10 w-[50%] max-lg:w-full">
        <div className="flex flex-col justify-center px-10  gap-2 ">
          <label htmlFor="" className="font-semibold">Name*</label>
          <input className="rounded-md border border-2 border-gray-300 py-2 px-5" type="text" />
        </div>
        <div className="flex flex-col justify-center px-10 gap-2 ">
          <label className="font-semibold" htmlFor="">Company E-mail*</label>
          <input className="rounded-md py-2 border border-2 border-gray-300 py-2 px-5" type="text" />
        </div>
        <div className="flex flex-col justify-center px-10  gap-2">
          <label className="font-semibold" htmlFor="">Phone Number*</label>
          <input className="rounded-md py-2 border border-2 border-gray-300 py-2 px-5" type="tel"  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="px-10 pb-5 font-semibold ">i want to:</h1>
          {ServiceData.map(({ id, Category }) => (
            <div key={id} className="flex  items-center px-10 gap-2">
              <input  type="checkbox" id={Category} name="Web Development" />
              <label  htmlFor={Category}>{Category}</label>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center px-10  gap-2">
          <label className="font-semibold" htmlFor="">About your product</label>
          <textarea className="rounded-md px-5 py-5 border border-2 border-gray-300" name="about" id="about" cols="10" rows="3"></textarea>
        </div>
      </form>
      <div className="px-10 py-10">
        <button className="bg-orange-500 px-4 py-1 rounded-md text-white font-semibold">Submit</button>
      </div>
      <div className="px-10 py-10">
        <p><span className="font-bold">PS:</span> in case you hate forms: <span className="text-orange-500">Appondas@support.com</span></p>
      </div>
    </div>
  );
};

export default ContactContainer;
