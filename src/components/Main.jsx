import { Stars } from 'lucide-react'
import React from 'react'
import {motion} from 'framer-motion'

export default function Main() {
  return (
    <div className="main h-[120vh] w-[100%] h-[100vh] lg:h-[100vh] sm:h-[150vh] flex items-center justify-start">
      <div className="mainframe p-[20px] lg:flex  justify-around  items-center  w-[100%]">

           <div className="left   text-white   sm:text-center lg:items-start  flex flex-col gap-[25px]">
            <motion.div initial={{opacity:0 , y:-50 ,  x:-50}} whileInView={{opacity:1 , y:0 , x:0}} className="fullstackdeveloper flex items-center justify-center gap-[5px]"><Stars></Stars> Fullstack Developer Portfolio</motion.div>
            <motion.h1  transition={{duration:0.8}} initial={{opacity:0  ,  x:-50}} whileInView={{opacity:1 , y:0 , x:0}} className='text-[26px] w-[100%] text-center lg:text-start w-[100%] lg:text-[70px] sm:text-[30px] sm:w-[100%]  sm:w-[100%]   sm:text-center '>Gigi Beridze: <span className='text-indigo-500'>Fullstack Developer</span></motion.h1>

            
            <motion.h3 initial={{opacity:0  , y:50 ,  x:-50}} whileInView={{opacity:1 , y:0 , x:0}}  className='w-[100%] text-center  lg:w-[600px] sm:text-center lg:text-start  md:text-[24px] sm:[18px]'>Hello I am Gigi I have 5 years of experience in programming and 3 years of experience in Fullestak Development You can check my projects and have work experience as well.</motion.h3>

             <motion.div initial={{opacity:0  ,  x:-50}} whileInView={{opacity:1 , y:0 , x:0}}  className="buttons  flex gap-[10px] flex-wrap justify-center lg:justify-start ">
              <motion.button className='p-[10px] cursor-pointer  rounded-[3px] explore sm:w-[170px]'>Explore</motion.button>
             </motion.div>

           </div>

           <motion.div className="right mt-[100px]  flex items-center sm:mt-[100px] md
           :mt-[0px]  justify-center">

            <img width={600} height={600} src="space/mainIconsdark.svg" alt="" />

           </motion.div>
      
      </div>
    </div>
  )
}
