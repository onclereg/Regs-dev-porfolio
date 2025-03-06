import React from 'react'
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className='p-4 max-w-7xl text-xl md:text-2xl mx-auto flex flex-col gap-5 font-serif'>
        <h1 className='flex justify-center text-3xl mb-8 '>
          <span className='border-r-2 border-l-2 border-purple-900 p-3 rounded-2xl'>About Me</span></h1>
        <p>
            I'm a passionate Front-End Developer specializing in building modern, responsive, and user-friendly Reactjs and Nextjs web applications. I focus on crafting seamless user experiences and high-performance interfaces.
            <br/>Furthermore, I possess a strong creative thinking ability, allowing me to approach problems in innovative ways and explore new ideas and strategies. By combining my creative thinking with my goal-oriented and detail-oriented mindset, I'm able to produce practical and effective solutions that deliver results, making me a valuable asset to any team or organization. I'm always eager to learn and grow, committed to making a positive impact wherever I find myself.
        </p>
        <p>
            Have a business idea ? <br/><br/>Tell me about it.
        </p>
        <div className="flex space-x-6 my-6">
          {/* <Link href="https://github.com/onclereg" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </Link>
          <Link href="https://www.linkedin.com/in/reginald-nwachukwu/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </Link> */}
          <Link href="mailto:nwachukwureg05@gmail.com">
            <FaEnvelope size={30} />
          </Link>
        </div>
        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button className='bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold'>Download Resume</Button>
        </Link>
    </div>
  )
}

export default About