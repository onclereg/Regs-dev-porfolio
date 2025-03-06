

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from '@/components/ui/sheet'

const links=[
    {name:'Home' , href:'/'},
    {name:'About' , href:'/About'},
    {name:'Experience' , href:'/Experience'},
    {name:'Projects' , href:'/Projects'},
    {name:'Contact' , href:'/Contact'}
]

const NavBar = () => {
  return (
    <div className='flex justify-between items-center max-w-7xl mx-auto p-5 md:p-7 font-semibold text-xl bg-slate-900 rounded-3xl my-2 shadow-2xl z-20 '>
        <div>
            <Image src='/okenwalogo.PNG' alt='logo' width={60} height={60}/>
        </div>
        <div className='hidden md:flex items-center gap-6 font-serif'>
            {links.map((link)=>(
                <Link href={link.href} key={link.name} className='border-r-2 border-b-2 border-purple-900 px-2 lg:px-5 py-3 rounded-2xl hover:border-slate-900'>
                    {link.name}
                </Link>
            ))}
        </div>
        {/* <div className='flex justify-end'>
            <ModeToggle/>
        </div> */}
        <div className='md:hidden'>
            <Sheet>
                <SheetTrigger><Menu/></SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetDescription>
                        <div className='grid gap-4'>
                            {links.map((link)=>(
                                <Link href={link.href} key={link.name} className='text-2xl font-semibold'>
                                    {link.name}
                                </Link>
                            ))}
                        </div> 
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>

    </div>
  )
}

export default NavBar