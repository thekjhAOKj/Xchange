'use client'
import React from 'react'
import { animate , motion } from 'framer-motion'

const Heroimg = () => {
  return (
    <div className='relative w-[50%] flex gap-[50px] items-center'>
            <div className='absolute w-[400px] h-[400px] blur-[400px] z-0 bg-red-500 top-[25%] left-[25%]'></div>
            <motion.div initial={{y : -110}} animate={{y : 70}} transition={{duration : 0.5 , repeatType : 'reverse', repeatDelay : 2, type:'spring' , repeat : Infinity}} className='relative w-[169px] h-[405px] top-[25px]'>
                <img src="/zelda.png" className='' alt="" />
                <img src="/shade.png" className='absolute top-0' alt="" />
            </motion.div>
            <motion.div
            initial={{y : 110}} animate={{y : -70}} transition={{duration : 0.5 , type:'spring' , repeatType : 'reverse', repeatDelay : 2 , repeat : Infinity}} className='relative w-[169px] h-[405px] bottom-[25px]'>
                <img src="/spider.png" className='' alt="" />
                <img src="/shade.png" className='absolute top-0' alt="" />
            </motion.div>
            <motion.div
            initial={{y : -110}}
             animate={{y : 70}} transition={{duration : 0.5 , repeatType : 'reverse', type:'spring', repeatDelay : 2 , repeat : Infinity}}className='relative w-[169px] h-[405px] top-[25px]'>
                <img src="/dark.png" className='' alt="" />
                <img src="/shade.png" className='absolute top-0' alt="" />
            </motion.div>
            <motion.div
            initial={{y : 110}}
             animate={{y : -70}} transition={{duration : 0.5, type:'spring' , repeatDelay : 2 , repeatType : 'reverse' , repeat : Infinity}} className='relative w-[169px] h-[405px] bottom-[25px]'>
                <img src="/king.png" className='' alt="" />
                <img src="/shade.png" className='absolute top-0' alt="" />
            </motion.div>
        </div>
  )
}

export default Heroimg