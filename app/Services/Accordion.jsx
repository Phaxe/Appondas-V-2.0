"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {GiCheckMark} from 'react-icons/gi'
import { ServiceData } from "../Data.js";

const Accordion = ({ question, answer }) => {
  // const [isOpen, setIsOpen] = useState(false);

  const [openAccordion, setOpenAccordion] = useState(1);
  const handleAccordionClick = (index) => {
    if (index !== openAccordion) {
        setOpenAccordion(index);
     } else {
       setOpenAccordion(null);
    }
  };

  return (
    <>

    <motion.div className="flex flex-col gap-5 z-0">
    {ServiceData.map(({id,Category,mainText,scndText,PointA,PointB,PointC}) => (
      <AnimatePresence>
     
         <motion.div
        
         key="question"
         className="rounded-tr-md relative z-20  rounded-br-md shadow-sm px-1 py-2 bg-gray-200 cursor-pointer font-open border-l-2 border-yellow-500 rounded-md z-0 lg:hidden"
         onClick={() => handleAccordionClick(id)}
       >
         <motion.div className="text-yahia-600 font-bold mb-3 ">
           <p>{Category}</p>
         </motion.div>
         {openAccordion === id ? (
         <motion.div
           key="answer"
           initial={{ opacity: 0 }}
           animate={{
             opacity: 1,
             transition: {
               duration: 0.5,
             },
           }}
           exit={{ opacity: 0 }}
           className="p-2 text-md text-gray-700 border-l border-b border-gray-300 rounded-md"
         >
          <p>{mainText}</p>
          <div className="my-5 py-5 px-5  bg-white border rounded-md w-[95%] max-xl:text-sm">
                    <h1 className="pb-5 ">{scndText}</h1>
                    <p className="pb-3 flex  justify-center gap-2"><GiCheckMark/>  {PointA}</p>
                    <p className="pb-3 flex  justify-center gap-2"><GiCheckMark/> {PointB}</p>
                    <p className="pb-3 flex  justify-center gap-2"><GiCheckMark/> {PointC}</p>
                  </div>
         </motion.div>
       )
      :
      (
        <div className="hidden"><p>yahia</p></div>
      )}
       </motion.div>

      
   
      </AnimatePresence>
        ))}

</motion.div>


   
    </>
  );
};

export default Accordion;
