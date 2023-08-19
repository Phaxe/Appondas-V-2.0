import Image from 'next/image'
import React from 'react'
import mobile from '../../public/mobile.png'
import web from '../../public/web.png'
import redo from '../../public/redo.png'
const ServiceCard = () => {
  return (
   <div className='h-full  w-full flex-col gap-5 flex items-center justify-center  py-10  '>
    <div className='w-[100%] px-10 2xl:w-[63%] relative'>
        <div className=' left-0 top-0 right-0 bottom-0 w-full h-full object-cover'>
        <Image src={mobile} alt='mobile' className='h-[550px] w-full object-cover max-lg:h-[350px] max-sm:object-fill max-sm:h-[200px] '/>
        </div>
        <div 
        className=' flex-col bg-[hsla(0,0%,100%,.06)] absolute justify-center items-center first-letter: top-20 w-[350px] left-[58%] h-[400px]
        max-lg:relative max-lg:left-0 max-lg:top-[-1px] max-lg:w-full max-lg:bg-yahia-800 max-lg:h-[300px] max-sm:h-[220px]'> 
            <div className='px-10 py-10 max-sm:py-1'>
            <h1 className='text-white text-4xl  py-4  max-sm:text-xl max-sm:py-0'>Mobile App Design</h1>
            <p className='text-white py-4 max-sm:text-sm max-sm:py-2'>With a strong focus on modern platform guidelines and user needs, Appondas creates unique mobile app designs</p>
            <button className='py-2 mt-5 px-16 text-white font-semibold border-orange-500 border-2 max-sm:py-1 max-sm:px-8 max-sm:w-full hover:bg-orange-500 
            hover:text-yahia-600 hover:text-bold duration-300 hover:border-white '>See More</button>
            </div>
        </div>
    </div>
    <div className='w-[100%] px-10 2xl:w-[63%] relative'>
        <div className=' left-0 top-0 right-0 bottom-0 w-full h-full object-cover'>
        <Image src={web} alt='mobile' className='h-[550px] w-full object-cover max-lg:h-[350px] max-sm:object-fill max-sm:h-[200px] '/>
        </div>
        <div 
        className=' flex-col bg-[hsla(0,0%,100%,.06)] absolute justify-center items-center first-letter: top-20 w-[350px] left-[10%] h-[400px]
        max-lg:relative max-lg:left-0 max-lg:top-[-1px] max-lg:w-full max-lg:bg-yahia-800 max-lg:h-[300px] max-sm:h-[220px]'> 
            <div className='px-10 py-10 max-sm:py-1'>
            <h1 className='text-white text-4xl  py-4  max-sm:text-xl max-sm:py-0'>Web & Desktop Design</h1>
            <p className='text-white py-4 max-sm:text-sm max-sm:py-2'>Appondas designs web and desktop solutions with intuitive UI and optimal UX with responsive layouts</p>
            <button className='py-2 mt-5 px-16 text-white font-semibold border-orange-500 border-2 max-sm:py-1 max-sm:px-8 max-sm:w-full hover:bg-orange-500 
            hover:text-yahia-600 hover:text-bold duration-300 hover:border-white '>See More</button>
            </div>
        </div>
    
    </div>
    <div className='w-[100%] px-10 2xl:w-[63%] relative'>
        <div className=' left-0 top-0 right-0 bottom-0 w-full h-full object-cover'>
        <Image src={redo} alt='mobile' className='h-[550px] w-full object-cover max-lg:h-[350px] max-sm:object-fill max-sm:h-[200px] '/>
        </div>
        <div 
        className=' flex-col bg-[hsla(0,0%,100%,.06)] absolute justify-center items-center first-letter: top-20 w-[350px] left-[58%] h-[400px]
        max-lg:relative max-lg:left-0 max-lg:top-[-1px] max-lg:w-full max-lg:bg-yahia-800 max-lg:h-[300px] max-sm:h-[220px]'> 
            <div className='px-10 py-10 max-sm:py-1'>
            <h1 className='text-white text-4xl  py-4  max-sm:text-xl max-sm:py-0'>Redesign services</h1>
            <p className='text-white py-4 max-sm:text-sm max-sm:py-2'>Appondas's UI/UX experts can redesign your software product for unprecedented performance and efficiency</p>
            <button className='py-2 mt-5 px-16 text-white font-semibold border-orange-500 border-2 max-sm:py-1 max-sm:px-8 max-sm:w-full hover:bg-orange-500 
            hover:text-yahia-600 hover:text-bold duration-300 hover:border-white '>See More</button>
            </div>
        </div>
    </div>

   </div>
 
   
   
  )
}

export default ServiceCard