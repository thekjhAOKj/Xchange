import React from 'react'
import {addPost} from '../../utils'

const page = () => {
  return (
    <div>
        <h1 className='uppercase text-[50px] text-center text-white'>create new <span className='text-red-400'>x</span> -change</h1>
        <form action={addPost} className='w-[50%] mx-auto text-white flex flex-col text-[30px]'>
            <label htmlFor="name">name :</label>
            <input type="text" className='border-2 border-white' />
            <label htmlFor="image">describtion :</label>
            <input type="text" className='border-2 border-white' />
            <button type='submit' className='bg-green-400'>submit</button>
        </form>
    </div>
  )
}

export default page