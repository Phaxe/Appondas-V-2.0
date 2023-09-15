import Footer from '@/components/footer/Footer'
import NavBar from '@/components/navbar/Navbar'
import React from 'react'
import ContactBanner from './ContactBanner'
import ContactContainer from './ContactContainer'


const Contact = () => {
  return (
    <>
    <NavBar/>
    <ContactBanner/>
   <ContactContainer/>
    <Footer/>
    </>
  )
}

export default Contact