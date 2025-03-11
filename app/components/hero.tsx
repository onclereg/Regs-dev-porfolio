import React from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 max-w-7xl p-3 mx-auto mt-8 md:mt-10 h-full">
      <div className="py-6 text-2xl md:text-4xl font-semibold font-serif my-auto">
        <h1 className="">Hi my name is </h1>
        <p>Reginald Nwachukwu</p>
        <p className=" text-2xl md:text-6xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">I am a  front end web developer.
          <br/>
          <span>Bringing ideas to life is my priority.</span>
        </p>
         
        <div className="flex space-x-6 my-6">
          <Link href="https://github.com/onclereg" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </Link>
          <Link href="https://www.linkedin.com/in/reginald-nwachukwu/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </Link>
          <Link href="mailto:nwachukwureg05@gmail.com">
            <FaEnvelope size={30} />
          </Link>
        </div>
        <Link href="/Projects">
          <Button variant="ghost" className="text-xl font-normal font-sans mr-5 p-5 uppercase border-r-2 border-b-2 border-purple-900 rounded-2xl">
            Projects
          </Button>
        </Link>
        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button className='bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold'>Download Resume</Button>
        </Link>
      </div>
      <div className=" hidden lg:flex justify-center mx-auto relative max-w-[300px] ">
        <Image src='/hero.jpg' alt=" hero pic" width={300} height={300} className="object-cover rounded-full"/>
      </div>
    </div>
  )
}

export default Hero