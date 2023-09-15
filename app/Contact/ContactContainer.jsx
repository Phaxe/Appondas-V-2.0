import React from "react";
import { ServiceData } from "../Data";
const ContactContainer = () => {
  return (
    <div className="responsive bg-gray-800 m-auto px-10 py-10 my-10">
      <h1>Tell us about your project.</h1>
      <form className="flex flex-col gap-10">
        <div className="flex flex-col justify-center px-10 w-[50%] gap-2 ">
          <label htmlFor="">Name*</label>
          <input className="rounded-md py-2 px-5" type="text" />
        </div>
        <div className="flex flex-col justify-center px-10 w-[50%] gap-2 ">
          <label htmlFor="">Company E-mail*</label>
          <input className="rounded-md py-2" type="text" />
        </div>
        <div className="flex flex-col justify-center px-10 w-[50%] gap-2">
          <label htmlFor="">Phone Number*</label>
          <input className="rounded-md py-2" type="number" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="px-10 pb-5 ">i want to:</h1>
          {ServiceData.map(({ id, Category }) => (
            <div key={id} className="flex  items-center px-10 w-[50%] gap-2">
              <input type="checkbox" id="serv1" name="Web Development" />
              <label htmlFor="serv1">{Category}</label>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center px-10 w-[50%] gap-2">
          <label htmlFor="">About your product</label>
          <textarea className="rounded-md px-5 py-5" name="about" id="about" cols="10" rows="3"></textarea>
        </div>
      </form>
      <div className="px-10 py-10">
        <button>Submit</button>
      </div>
      <div>
        <p>PS: in case you hate form:Appondas@support.com</p>
      </div>
    </div>
  );
};

export default ContactContainer;
