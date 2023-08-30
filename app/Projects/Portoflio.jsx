import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import shop from "../../public/axios-1.jpg";
import Image from "next/image";
import grill from "../../public/resto.png";
import Dashboard from "../../public/dashboard.png";
import Resto from '../../public/resto.png'
import Rental from '../../public/cars1.png'
import Gyms from '../../public/gyms.png'
import Gardens from '../../public/gardens.png'

const Portoflio = () => {
  return (
<div className='m-auto w-[1500px] my-10 '>
<div className='py-5 flex flex-col items-center justify-center text-center'>
        <h1 className='text-3xl py-3 font-medium bg-clip-text text-transparent bg-gradient-to-l from-orange-700 via-orange-400 to-orange-700 '>
        WE BRING IDEAS TO LIFE
        </h1>
        <span className='py-3 text-white'>
        Over the years, Appondas has successfully delivered numerous IT Projects across various challenging verticals
          martech work <br /> and sectors. Here you can look through a selection of them and see Appondas's potential for yourself.
        </span>
      </div>
<div className="flex items-center justify-center bg-gradient-to-l from-orange-400 via-orange-600 to-orange-900 rounded-md mb-10 ">
    
    <div className="flex items-center  justify-between py-10 ">
      <div className="flex items-center justify-center gap-10  ">
     
        <div
          className=" w-[400px] flex flex-col items-center justify-between pt-4
        
       "
        >
          <div className="flex flex-col gap-10">
            <h1 className='font-semibold text-white text-4xl'>E-commerce WebApp</h1>
            <h2 className='text-white text-center font-semibold text-3xl'>Axios Stores</h2>
            <p className="text-gray-100 pl-4 py-10">
            A new ecommerce solution for one of the largest wedding dress retailers in the world.
            </p>
    
          </div>
          <div className="flex gap-4 flex-row">
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              ReactJs
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              MongoDb
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              Redux
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              UX/UI
            </button>
          </div>
          <button className='py-2 mt-10 border px-2 text-white border-white rounded-md bg-yahia-700'>Check Demo</button>
        </div>

        <div className="w-[1000px] h-full flex justify-center items-center mx-auto">
          <Image
            src={shop}
            className="h-[100%] w-full mx-auto object-left object-cover rounded-md  "
            alt="dashboard"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="flex items-center justify-center bg-gradient-to-r from-yahia-400 via-yahia-600 to-yahia-900 rounded-md mb-10 ">
    <div className="flex items-center  justify-between py-10 gap-10 ">   
    <div className="w-[1000px] h-full flex justify-center items-center mx-auto">
          <Image
            src={Resto}
            className="h-[100%] w-full mx-auto object-cover rounded-md  "
            alt="dashboard"
          />
        </div>
      <div className="flex items-center justify-center gap-10  ">
     
        <div className=" w-[400px] flex flex-col items-center justify-between pt-4">
          <div className="flex flex-col gap-10">
            <h1 className='font-semibold text-white text-center text-4xl'>Resturant Web</h1>
            <h2 className='text-white text-center font-semibold text-3xl'>Grill</h2>
            <p className="text-gray-100 pl-4 py-10">
            A new ecommerce solution for one of the largest wedding dress retailers in the world.
            </p>
    
          </div>
          <div className="flex gap-4 flex-row">
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              ReactJs
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              MongoDb
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              Redux
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              UX/UI
            </button>
          </div>
          <button className='py-2 mt-10 border px-2 text-white border-white rounded-md bg-orange-700'>Check Demo</button>
        </div>

      </div>
 
      

    
    </div>
  </div>
  <div className="flex items-center justify-center bg-gradient-to-l from-orange-400 via-orange-600 to-orange-900 rounded-md mb-10 ">
    
    <div className="flex items-center  justify-between py-10 ">
      <div className="flex items-center justify-center gap-10  ">
     
        <div
          className=" w-[400px] flex flex-col items-center justify-between pt-4
        
       "
        >
          <div className="flex flex-col gap-10">
            <h1 className='font-semibold text-white text-4xl'>E-commerce WebApp</h1>
            <h2 className='text-white text-center font-semibold text-3xl'>Axios Stores</h2>
            <p className="text-gray-100 pl-4 py-10">
            A new ecommerce solution for one of the largest wedding dress retailers in the world.
            </p>
    
          </div>
          <div className="flex gap-4 flex-row">
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              ReactJs
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              MongoDb
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              Redux
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              UX/UI
            </button>
          </div>
          <button className='py-2 mt-10 border px-2 text-white border-white rounded-md bg-yahia-700'>Check Demo</button>
        </div>

        <div className="w-[1000px] h-full flex justify-center items-center mx-auto">
          <Image
            src={Dashboard}
            className="h-[100%] w-full mx-auto object-cover rounded-md  "
            alt="dashboard"
          />
        </div>
      </div>
 
      

    
    </div>
  </div>
  <div className="flex items-center justify-center bg-gradient-to-r from-yahia-400 via-yahia-600 to-yahia-900 rounded-md mb-10 ">
    
    <div className="flex items-center  justify-between py-10 gap-10 ">
        
    <div className="w-[1000px] h-full flex justify-center items-center mx-auto">
          <Image
            src={Rental}
            className="h-[100%] w-full mx-auto object-cover rounded-md  "
            alt="dashboard"
          />
        </div>
      <div className="flex items-center justify-center gap-10  ">
     
        <div
          className=" w-[400px] flex flex-col items-center justify-between pt-4
        
       "
        >
          <div className="flex flex-col gap-10">
            <h1 className='font-semibold text-white text-center text-4xl'>Resturant Web</h1>
            <h2 className='text-white text-center font-semibold text-3xl'>Grill</h2>
            <p className="text-gray-100 pl-4 py-10">
            A new ecommerce solution for one of the largest wedding dress retailers in the world.
            </p>
    
          </div>
          <div className="flex gap-4 flex-row">
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              ReactJs
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              MongoDb
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              Redux
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              UX/UI
            </button>
          </div>
          <button className='py-2 mt-10 border px-2 text-white border-white rounded-md bg-orange-700'>Check Demo</button>
        </div>

      </div>
 
      

    
    </div>
  </div>
  <div className="flex items-center justify-center bg-gradient-to-l from-orange-400 via-orange-600 to-orange-900 rounded-md mb-10 ">
    
    <div className="flex items-center  justify-between py-10 ">
      <div className="flex items-center justify-center gap-10  ">
     
        <div
          className=" w-[400px] flex flex-col items-center justify-between pt-4
        
       "
        >
          <div className="flex flex-col gap-10">
            <h1 className='font-semibold text-white text-4xl'>E-commerce WebApp</h1>
            <h2 className='text-white text-center font-semibold text-3xl'>Axios Stores</h2>
            <p className="text-gray-100 pl-4 py-10">
            A new ecommerce solution for one of the largest wedding dress retailers in the world.
            </p>
    
          </div>
          <div className="flex gap-4 flex-row">
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              ReactJs
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              MongoDb
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              Redux
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              UX/UI
            </button>
          </div>
          <button className='py-2 mt-10 border px-2 text-white border-white rounded-md bg-yahia-700'>Check Demo</button>
        </div>

        <div className="w-[1000px] h-full flex justify-center items-center mx-auto">
          <Image
            src={Gyms}
            className="h-[100%] w-full mx-auto object-cover rounded-md  "
            alt="dashboard"
          />
        </div>
      </div>
 
      

    
    </div>
  </div>
  <div className="flex items-center justify-center bg-gradient-to-r from-yahia-400 via-yahia-600 to-yahia-900 rounded-md mb-10 ">
    
    <div className="flex items-center  justify-between py-10 gap-10 ">
        
    <div className="w-[1000px] h-full flex justify-center items-center mx-auto">
          <Image
            src={Gardens}
            className="h-[100%] w-full mx-auto object-cover rounded-md  "
            alt="dashboard"
          />
        </div>
      <div className="flex items-center justify-center gap-10  ">
     
        <div
          className=" w-[400px] flex flex-col items-center justify-between pt-4
        
       "
        >
          <div className="flex flex-col gap-10">
            <h1 className='font-semibold text-white text-center text-4xl'>Resturant Web</h1>
            <h2 className='text-white text-center font-semibold text-3xl'>Grill</h2>
            <p className="text-gray-100 pl-4 py-10">
            A new ecommerce solution for one of the largest wedding dress retailers in the world.
            </p>
    
          </div>
          <div className="flex gap-4 flex-row">
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              ReactJs
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              MongoDb
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              Redux
            </button>
            <button className="bg-gray-300 py-2 px-2 rounded-3xl">
              UX/UI
            </button>
          </div>
          <button className='py-2 mt-10 border px-2 text-white border-white rounded-md bg-orange-700'>Check Demo</button>
        </div>

      </div>
 
      

    
    </div>
  </div>
</div>
  )
}

export default Portoflio