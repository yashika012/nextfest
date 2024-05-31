import React from 'react'
import Hero from '../Components/Hero'
import Aboutus from '../Components/Aboutus'
import Footer from '@/Components/Footer'
import Contactus from '@/Components/Contactus'

const page = () => {
  return (
    <>
      <Hero />
      <Aboutus />
      <Contactus />
      <Footer />
    </>
  )
}

export default page