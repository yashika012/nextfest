import React from 'react'
import Image from 'next/image'
import bg from '../../public/bg.png'
import yashika from '../../public/yashika.img.jpg'
import { FaLinkedin } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
    return (<div id='hero'>
        <div className="w-screen h-screen bg-gray-800 flex justify-center items-center flex-col">
            <div className='w-[60%] h-[50%] bg-white rounded-2xl p-4 relative'>
                <Image alt='' src={bg} className='rounded-2xl h-[40%] w-[100%]' />
                <Image alt='' src={yashika} className='rounded-full h-[180px] w-[180px] absolute top-5 left-[40%] border-5' />
                <h1 className='text-4xl font-bold text-center mt-12'>Yashika Yadav</h1>
                <p className='text-center mt-4'>Frontend Devloper</p>
                <div className='flex justify-center mt-4 gap-10'>
                    <a href='https://www.linkedin.com/in/yashika-yadav-8a53b6278/' target='_blank' rel='noreferrer'>
                        <FaLinkedin className='text-3xl' />
                    </a>
                    <a href='https://www.instagram.com/yashu.802?igsh=MTlnOHkwMGZzdXg2cQ==' target='_blank' rel='noreferrer'>
                        <BsInstagram className='text-3xl' />
                    </a>
                    <a href='https://github.com/yashika012' target='_blank' rel='noreferrer'>
                        <FaGithub className='text-3xl' />
                    </a>
                </div>
            </div>
            <div className='mt-20 text-xl text-white'>
                In the past 8 months, I&apos;ve been a <span className='text-2xl text-green-500'>Student</span>, <span className='text-2xl text-blue-500'>Web Developer</span> &amp; <span className='text-2xl text-yellow-500'>Community Member</span>.
            </div>
        </div>
        <hr /></div>
    )
}

export default Hero