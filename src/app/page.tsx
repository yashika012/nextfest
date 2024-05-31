import React from 'react'
import Hero from '../components/Hero'
import Aboutus from '../components/Aboutus'
import Footer from '@/components/Footer'
import Contactus from '@/components/Contactus'

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