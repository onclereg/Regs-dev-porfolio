import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaGlobe } from 'react-icons/fa'

const Projects = () => {
  return (
    <div className='max-w-7xl mx-auto p-4'>
        <h2 className='flex justify-center mb-8'>
            <span className=' border-t-2 border-purple-900 px-2 lg:px-5 py-3 rounded-2xl hover:border-slate-900 text-4xl'>
                My Projects
            </span>
        </h2>

        <div className='grid gap-[100px] font-normal'>

            <div className=' text-xl font-normal w-fill grid md:grid-cols-2 gap-5 '>
                <div className='relative w-fill  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                    <Image src='/pocketlawyer.PNG' alt='pocket lawyer' height={900} width={900} className='object-contain rounded-2xl'/>
                </div>
                <div className='p-3 grid gap-2 border-r-2 border-l-2 border-purple-900 rounded-2xl hover:border-slate-900'>
                    <p className='text-lg'>
                        An online law firm that operates primarily through the internet, offering legal consultation, document drafting, and case management remotely.<br/>
                        This is built with Next js, Typescript, Tailwind, shadCN, React-redux Toolkit for state management and node.js.
                    </p>
                    <p className='flex gap-6 items-center py-2'>
                        <p className='underline'>Visit Website :</p>
                        <Link href="https://pocketlawyers.io" target="_blank" rel="noopener noreferrer">
                            <FaGlobe size={25} />
                        </Link>
                        <Link href="https://github.com/onclereg" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={25} />
                        </Link>
                    </p>
                </div>
            </div>

            <div className=' text-xl font-normal w-fill grid md:grid-cols-2 gap-5'>
                <div className='relative w-fill  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                    <Image src='/okshopify2.PNG' alt='pocket lawyer' height={900} width={900} className='object-contain rounded-2xl'/>
                </div>
                <div className='p-3 grid gap-2 border-r-2 border-l-2 border-purple-900 rounded-2xl hover:border-slate-900'>
                    <p className='text-lg'>
                    This is a digital marketplace that offers a curated selection of home décor products, furniture, and design solutions.<br/>This is built with Next js, Typescript, shadCN, sanity for content management system (CMS) that provides developers with a flexible, real-time, and API-driven approach to managing and delivering content and deployed on vercel.
                    </p>
                    <p className='flex gap-6 items-center py-2'>
                        <Link href="https://myokshopify.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <FaGlobe size={25} />
                        </Link>
                        <Link href="https://github.com/onclereg" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={25} />
                        </Link>
                    </p>
                </div>
            </div>

            <div className=' text-xl font-normal w-fill grid md:grid-cols-2 gap-5'>
                <div className='relative w-fill  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                    <Image src='/carhub.PNG' alt='Car hub picture' height={900} width={900} className='object-contain rounded-2xl'/>
                </div>
                <div className='p-3 grid gap-2 border-r-2 border-l-2 border-purple-900 rounded-2xl hover:border-slate-900'>
                    <p className='text-lg'>
                    Carhub is an Ecommerce page that showcases an attractive, user-friendly interface for browsing and exploring cars online. It offers easy navigation, high-quality images, and intuitive search options, making it simple for users to find their desired vehicles.<br/> This app is built with Next.js, Tailwind CSS, shadCN and hosted on vercel.
                    </p>
                    <p className='flex gap-6 items-center py-2'>
                        <Link href="" target="_blank" rel="noopener noreferrer">
                            <FaGlobe size={25} />
                        </Link>
                        <Link href="https://github.com/onclereg" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={25} />
                        </Link>
                    </p>
                </div>
            </div>

            <div className=' text-xl font-normal w-fill grid md:grid-cols-2 gap-5'>
                <div className='relative w-fill transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                    <Image src='/foodapp2.PNG' alt='Food app' height={900} width={900} className='object-contain rounded-2xl'/>
                </div>
                <div className='p-3 grid gap-2 border-r-2 border-l-2 border-purple-900 rounded-2xl hover:border-slate-900'>
                    <p className='text-lg'>
                    An Online Food Ordering App is a digital platform that allows users to select dishes, place orders, and get food delivered to their doorstep or ready for pickup. These apps provide a seamless and convenient dining experience, whether ordering from local eateries or major restaurant chains.
                    <br/> this app was built with react, javascript, css, tailwind and deployed on vercel.
                    </p>
                    <p className='flex gap-6 items-center py-2'>
                        <Link href="https://foodapp-phi.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <FaGlobe size={25} />
                        </Link>
                        <Link href="https://github.com/onclereg" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={25} />
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects