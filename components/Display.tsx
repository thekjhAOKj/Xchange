import React from 'react'
import { IoLogoGameControllerA } from "react-icons/io";
import { PiBookBold } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
const data = [
    {
        name : 'spider man 2 cd',
        type : 'games',
        desc : 'this is a game',
        img : '/user.png'
    },
    {
        name : 'spider man 2 cd',
        type : 'games',
        desc : 'this is a game',
        img : '/user.png'
    },
    {
        name : 'spider man 2 cd',
        type : 'games',
        desc : 'this is a game',
        img : '/user.png'
    },
    {
        name : 'spider man 2 cd',
        type : 'games',
        desc : 'this is a game',
        img : '/user.png'
    },
    {
        name : 'spider man 2 cd',
        type : 'games',
        desc : 'this is a game',
        img : '/user.png'
    },
    {
        name : 'spider man 2 cd',
        type : 'games',
        desc : 'this is a game',
        img : '/user.png'
    },
    {
        name : 'spider man 2 cd',
        type : 'games',
        desc : 'this is a game',
        img : '/user.png'
    },
    {
        name : 'spider man 2 cd',
        type : 'games',
        desc : 'this is a game',
        img : '/user.png'
    },
]

const Display = () => {
  return (
    <div className='flex px-10 py-[50px] pt-[100px] gap-10'>
        <div className='h-full w-[15%] bg-secondary rounded-3xl px-3 py-3'>
            <h1 className='text-center'>POPULAR CATEGORIES</h1>
            <div className='flex flex-col gap-5 py-7'>
                <div className='w-full bg-primary px-3 py-3 rounded-xl flex gap-3 items-center'><IoLogoGameControllerA className='text-red-400 text-2xl' />
GAMES</div>
                <div className='w-full bg-primary px-3 py-3 rounded-xl flex gap-3 items-center'><PiBookBold className='text-amber-500 text-2xl' />
BOOKS</div>
                <div className='w-full bg-primary px-3 py-3 rounded-xl flex gap-3 items-center'><BsThreeDots  className='text-green-400 text-2xl' />
OTHER</div>
            </div>
        </div>
        <div className='w-full'>
            <div className='bg-white w-[30%] flex rounded-full gap-3'>
                <FaSearch className='text-[40px] bg-red-400 p-3 rounded-full' />
                <input type="text" className='w-full text-black outline-0' placeholder='search...' />
            </div>
            <div className='w-full relative h-full py-5 flex gap-5 flex-wrap'>
                
                {data.map(item => (
                    <div className='min-h-[400px] w-[300px] p-5 bg-secondary z-10' key={data.indexOf(item)}>
                        <img src={item.img} className='rounded-2xl mb-3'/>
                        <h1 className='uppercase text-[20px]'>{item.name}</h1>
                        <p className='text-gray-500'>{item.desc}</p>
                        <div className='border-2 border-red-400 my-2 text-red-400 rounded-full w-fit p-1 px-2 text-[13px]'>{item.type}</div>
                        <button className='bg-green-600 cursor-pointer w-full text-center rounded-lg p-5 mt-5 text-[20px]'>X-CHANGE</button>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Display