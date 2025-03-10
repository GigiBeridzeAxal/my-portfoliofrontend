import { ArrowDown, ArrowDown01, ArrowDownCircle, ArrowUp, ArrowUpCircle, Copy } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { toast } from 'react-toastify'


export default function CodingManner() {

    


  const [animposx , setanimposx] = useState(0)
  const [animposy , setanimposy] = useState(0)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("beridzegigi19@gmail.com");
      toast.success("You Succesfuly Copied Email ")
     
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  useEffect(() => {

    setInterval(() => {

      setanimposx(Math.random()*500)
      setanimposy(Math.random()*250)
    }, 8000);

  },[])


 

  return (
    <div className="skills w-[100%] flex text-center  items-center justify-center ">
    <div className="skillsframe  w-[95%] justify-center md:flex md:justify-center gap-[25px]  text-center text-white">


        <div className='w-[100% ] md:w-[50%] overflow-hidden flex flex-col gap-[25px]'>

           <div className='w-[100%] borderlight rounded-[15px]  justify-end items-end flex relative bg-slate-900/50 h-[250px]'>
            <h1 className='absolute bottom-[25px] left-[25px] text-[20px] lg:text-[23px] sm:text-[20px]  font-[900] w-[80%] sm:w-[80%] lg:w-[500px] text-start'>Quality and app agility are the formula of the best website</h1>

           <img width={350} src="performance.png" alt="" />

           </div>
           
           <div className='w-[100% ] relative overflow-hidden gap-[25px] borderlight rounded-[15px] colorforemailcopy flex flex-col justify-center items-center h-[250px]'>
             <div className="animation">
              <motion.div transition={{duration:8}} animate={{left:animposx , bottom:animposy}}  className="anim1 bg-blue-500 z-[-2] absolute w-[20px] h-[20px]"></motion.div>
             </div>
            <h1 className='font-[900] sm:text-[24px] w-[70%]'>Lets Connect To Work And Create High Quality Products</h1>

            <button onClick={() => copyToClipboard()} className='p-[15px] cursor-pointer bg-slate-900 rounded-[4px] w-[270px] flex items-center justify-center gap-[15px]'><Copy></Copy> Copy Email Address</button>



           </div>

        </div>

        
        <div className='w-[100%]  mt-[25px] md:mt-[0px] md:w-[50%]'>

           <div className='w-[100%] relative overflow-hidden borderlight  rounded-[15px] p-[20px] bg-slate-900/50 flex items-start flex-col justify-start  h-[525px]'>



           <div className='w-[100%]  text-[20px] sm:text-[26px] mt-[100px]  sm:w-[340px] font-[900] '>
           Precise and optimized code writing manner

           </div>

           <img style={{minWidth:'800px'}} width={650} className='p-[10px] right-[-435px] sm:right-[-335px] bottom-[-65px] absolute rounded-[15px] bg-slate-900/50' src="Codings.png" alt="" />
           
           </div>

        </div>





   
   
    </div>

   
</div>
  )
}
