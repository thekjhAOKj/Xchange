import React from 'react'
import Heroimg from './Heroimg'


const Hero = () => {
  return (
    <div className='flex h-[70vh]'>
        <div className='w-[50%] px-10 flex items-center'>
            <div>
                <h1 className='text-[90px] leading-[80px]'>EXCHANGE<br /><span className='text-[60px] text-red-400'>GAMES 🎮</span></h1>
                <p className='w-[70%] mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi suscipit aperiam numquam exercitationem neque rem placeat consequatur dignissimos officiis magni.</p>
                <div className='mt-[30px] flex gap-3'>
                    <button className='bg-red-500 cursor-pointer py-3 px-5 text-[30px] rounded-3xl'>SIGN IN</button>
                    <button className='bg-transparent cursor-pointer border-2 border-white py-3 px-5 text-[30px] rounded-3xl'>BROWSE X-CHANGES</button>
                </div>   
            </div>
        </div>
        <Heroimg />
    </div>
  )
}

export default Hero