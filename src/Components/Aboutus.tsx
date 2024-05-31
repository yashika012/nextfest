// components/AboutMe.tsx
import React from 'react';
import Image from 'next/image';
import dev from '../../public/dev.png';

const AboutMe: React.FC = () => {
    return (
        <div id='about' className='flex items-center justify-center bg-gray-800'>
            <section className="bg-gray-800 py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-white mb-8">About Me</h2>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/3 mb-8 md:mb-0 md:mr-8">
                            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto">
                                <Image
                                    src={dev}
                                    alt="Tejus Gupta"
                                    className="rounded-full object-cover"
                                    layout="responsive"
                                    width={256}
                                    height={256}
                                />
                            </div>
                        </div>
                        <div className="md:w-2/3 text-white">
                            <p className="text-lg mb-6">
                                Hi, I&apos;m <span className="font-bold text-green-500">Tejus Gupta</span>, a Computer Science engineering student specializing in the Internet of Things. I am passionate about programming, web development, and creating innovative projects.
                            </p>
                            <p className="text-lg mb-6">
                                I enjoy solving 3x3 Rubik&apos;s cubes, developing projects, and continuously learning new technologies. My goal is to start my own venture, providing advanced website services by leveraging AI to design web applications.
                            </p>
                            <p className="text-lg">
                                Currently, I&apos;m focused on mastering technologies like <span className="font-bold text-blue-500">ReactJS</span> and <span className="font-bold text-yellow-500">NextJS</span> for both web and desktop development to enhance my skills and prepare for future opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
        </div>
    );
};

export default AboutMe;
