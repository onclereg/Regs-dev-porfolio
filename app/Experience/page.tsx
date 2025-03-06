import React from 'react'

const Experience = () => {
  return (
    <div className='max-w-7xl p-4 mx-auto font-serif my-4'>

        <h2 className='flex justify-center'> 
            <span className=' border-b-2 border-purple-900 px-2 lg:px-5 py-3 rounded-2xl hover:border-slate-900 text-4xl'>
                Work Experience
            </span>
        </h2>

        <div className='grid lg:grid-cols-2 gap-8 my-4 md:pt-[50px]'>

            <div className='border-r-2 border-b-2 border-purple-900 px-2 lg:px-5 py-3 rounded-2xl hover:border-slate-900 text-xl font-normal '>              
                <h1 className='text-2xl font-semibold my-6'>
                    Freelance Front-End Developer 
                   <br/> <span>E-Commerce Website | December 2024 – February 2025</span>
                </h1>
                <ul className='list-disc p-4'>
                    <li>
                        Designed and developed a modern, responsive e-commerce platform using Next.js, React.js, TypeScript, and Tailwind CSS.
                    </li>
                    <li>
                        Integrated ShadCN UI components for a sleek and user-friendly interface.
                    </li>
                    <li>
                        Optimized website performance, ensuring fast load times and a seamless user experience.
                    </li>
                    <li>
                        Implemented a shopping cart, checkout system, and payment gateway integration
                    </li>
                    <li>
                        Collaborated with backend developers to connect APIs for real-time product updates.
                    </li>
                </ul>
            </div>
            
            <div className='border-l-2 border-t-2 border-purple-900 px-2 lg:px-5 py-3 rounded-2xl hover:border-slate-900 text-xl font-normal '>              
                <h1 className='text-2xl font-semibold my-6'> Front-End Developer 
                   <br/> <span>PocketLawyers | March – August 2024</span>
                </h1>
                <ul className='list-disc p-4'>
                    <li>
                        With the aid of the Git Version Control System, I collaborated with my colleagues and mentors while working on the online law firm.
                    </li>
                    <li>
                        Collaborated with quality engineers, user research, product management, design and support team to ensure quality in all phases of application development.
                    </li>
                    <li>
                        Wrote elegant, self-documenting code, easy to read and adapt for other developers.
                    </li>
                    <li>
                        Reviewed design specs and engineering docs and provided feedbacks while acquiring the basic knowledge of web development using redux toolkit, postman and ShadCN for the frontend.
                    </li>
                    <li>
                        Developed and designed an online law firm website that is mobile responsive using Nextjs, TypeScript, Tailwind and ShadCN for the frontend.
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Experience