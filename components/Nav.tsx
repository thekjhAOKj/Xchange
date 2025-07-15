import React from 'react'
import Link from 'next/link'
import { BiHomeAlt2 } from "react-icons/bi";
import { TbHammer } from "react-icons/tb";
import { IoGrid } from "react-icons/io5";



const Nav = () => {
  return (
    <div className='bg-primary shadow-lg border-b-2 border-b-black text-white px-10 py-[15px] flex justify-between items-center'>
        <Link href='/' className='text-[30px]'><span className='text-red-400'>X</span>-CHANGE</Link>
        <div className='flex gap-7'>
            <Link href='/' className='flex text-[20px] gap-2 items-center'><IoGrid />
 CATEGORIES</Link>
            <Link href='/' className='flex text-[20px] gap-2 items-center'><BiHomeAlt2 /> HOME</Link>
            <Link href='/' className='flex text-[20px] gap-2 items-center'><TbHammer />
AUCTION</Link>
        </div>
        <Link href='/user'>
            <img src="/user.png" className='h-[40px] w-[40px] rounded-full'/>
        </Link>
    </div>
  )
}

export default Nav