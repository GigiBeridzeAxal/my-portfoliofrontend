import React, { useEffect, useState } from 'react'
import './Headercss.css'
import { ArrowRight, Blocks, GitBranch, Lightbulb, Linkedin, Menu, MessageCircle, PanelRightOpen, SkipBack, Stars, Youtube } from 'lucide-react'
import {motion} from 'framer-motion'

export default function Header() {

    const [menu , setmenu] = useState(false)
    const [scrolltype , setscrolltype] = useState('header')

    useEffect(() => {

      window.addEventListener('scroll' , (scr) => {

        if(window.scrollY > 100){
          setscrolltype('fixed')
        }else{
          setscrolltype('header')
        }
      })


    },[])

  return (
    <>
  {scrolltype == "fixed"  ?
            <div style={{zIndex:30}} className='fixed  text-white  left-[0] top-[0] w-[100%] text-white  p-[20px]  flex items-center justify-center'>
              <motion.div  initial={{y:-150}} animate={{y:0}} className='justify-center  p-[10px] w-[320px] flex flex gap-[10px] p-[10px] bg-white/10 rounded-[50px] backdrop-blur-[150px]'>
                         <motion.a  href='#projects' whileHover={{color:'oklch(0.707 0.165 254.624)'}} className='cursor-pointer rounded-[50px] '>Projects</motion.a>
            <motion.a whileHover={{color:'oklch(0.707 0.165 254.624)'}} href='#experience' className='cursor-pointer rounded-[50px] '>Experience</motion.a>
            <motion.a whileHover={{color:'oklch(0.707 0.165 254.624)'}} href='#reviews' className='cursor-pointer rounded-[50px]  '>Reviews</motion.a>
            <motion.a whileHover={{color:'oklch(0.707 0.165 254.624)'}} href='#contact' className=''>Contact</motion.a>
 
              </motion.div>
   
            </div>
            : null}

 <header className='w-[100%] z-[3] p-[20px] backdrop-blur-sm flex items-center justify-between'>

            <div className="gigiberidze text-white ">Gigi Beridze: <span className='text-blue-400'>Portfolio</span></div>

          



           <div className='text-white w-[370px] justify-center p-[10px] hidden sm:flex flex gap-[25px] p-[10px] bg-white/10 rounded-[50px] backdrop-blur-[150px] '>

            <motion.a  href='#projects' whileHover={{color:'oklch(0.707 0.165 254.624)'}} className='cursor-pointer rounded-[50px] '>Projects</motion.a>
            <motion.a whileHover={{color:'oklch(0.707 0.165 254.624)'}}  href='#experience' className='cursor-pointer rounded-[50px] '>Experience</motion.a>
            <motion.a whileHover={{color:'oklch(0.707 0.165 254.624)'}}  href='#reviews' className='cursor-pointer rounded-[50px]  '>Reviews</motion.a>
            <motion.a whileHover={{color:'oklch(0.707 0.165 254.624)'}} href='#contact' className=''>Contact</motion.a>
 


           </div>
            
  

            {menu ?

            <div className="openedmenug sm:hidden  gap-[10px] z-[-1] fixed flex pt-[120px] flex-col items-center justify-start top-0 right-0 bg-black w-[100%] h-[100vh]">

                <div className="fullstackdeveloperportoflio  text-white flex items-center justify-start w-[80%] p-[10px] gap-[10px]"><Stars></Stars> Fullstack Developer Portfolio</div>

                <h1 className='text-white text-start w-[80%] p-[10px] '>Navigate Easily</h1>
               
               <motion.div  className="items text-white   p-[10px] rounded-[15px] bg-gray-900/50  w-[80%] text-start p-[10px] flex justify-between"> <span className='flex items-center  gap-[10px]'><Blocks></Blocks> Projects</span> <ArrowRight></ArrowRight> </motion.div >
                      
               <div className="items text-white   p-[10px] rounded-[15px] bg-gray-900/50  w-[80%] text-start p-[10px] flex justify-between"> <span className='flex items-center  gap-[10px]'><Lightbulb></Lightbulb> Experience</span> <ArrowRight></ArrowRight> </div>
                                  
               <div className="items text-white   p-[10px] rounded-[15px] bg-gray-900/50  w-[80%] text-start p-[10px] flex justify-between"> <span className='flex items-center  gap-[10px]'><GitBranch></GitBranch> Skills</span> <ArrowRight></ArrowRight> </div>

               <div className="items text-white   p-[10px] rounded-[15px] bg-gray-900/50  w-[80%] text-start p-[10px] flex justify-between"> <span className='flex items-center  gap-[10px]'><MessageCircle></MessageCircle> Contact</span> <ArrowRight></ArrowRight> </div>

               <h1 className='text-white text-start w-[80%] p-[10px] '>Socials</h1>
        
                   <div className="socs flex items-center justify-start w-[80%] p-[10px] gap-[25px]">
                    <img width={50} className='rounded-[4px] p-[10px] bg-slate-900' src="https://th.bing.com/th/id/R.512e9d9c9f8053701b53519934c2f0f3?rik=diNKAd8cxQR7nA&pid=ImgRaw&r=0" alt="" />
 
                    <img width={50} className='rounded-[4px] p-[10px] bg-slate-900' src="       https://th.bing.com/th/id/R.d51da72e1f4675ba5aef9c956ed4c562?rik=FmeldpqK57Pqdw&riu=http%3a%2f%2fwww.freepnglogos.com%2fuploads%2fofficial-linkedin-logo----17.png&ehk=D2%2b5urO8gseetYQhxdSGq2qyTRbSvoavbbmoGEuOepo%3d&risl=&pid=ImgRaw&r=0" alt="" />
                   </div>

                

            </div>
            

            : null}




    </header>

    </>
   
  )
}
