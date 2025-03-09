import React from 'react'
import {motion} from 'framer-motion'

export default function BlackHole() {
  return (
    <motion.div  className='z-[-4]'>

      <video className='z-[-4]  absolute top-[-43%] md:top-[-42%] top-[-42%]  reverse object-cover  l-[0px] w-full h-full ' muted loop autoPlay src="space/blackhole.webm"></video>

    </motion.div >
  )
}
