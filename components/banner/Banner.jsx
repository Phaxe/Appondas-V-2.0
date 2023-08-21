import React from 'react'
const Banner = () => {
  return (
    <>
       <div className='flex align-middle justify-center  bg-red-400 h-[100vh] relative'>
      <video autoPlay muted   width="100%" className='object-cover' height="100%" loop  >
        
        <source src="/Appondas-Video-New.4176041b.mp4"  type='video/mp4'/>
      </video>
      <div className='absolute left-50 top-2/4 flex-col items-center justify-center text-center'>
        <h1 className='text-7xl text-white font-bold uppercase max-md:text-4xl '>Appondas Quality in Focus</h1>
        <h4 className='text-white text-2xl pt-3 pb-3'>Helping businesses build thier online homes</h4>
        <button className='bg-gradient-to-r from-yellow-600 to-red-600 py-3 px-10 rounded-md text-white'>Learn More</button>
      </div>
     
    </div>
  
    </>
 
  )
}

export default Banner