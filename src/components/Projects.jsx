import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { Link, Send } from 'lucide-react'

export default function Projects() {
    const projects = [
      {
        projectname:'SinppetForge',
        projectimage:'Aicodesnippet.PNG',
        projectdesc:'This is Ai Integrated Code Snippet Generator',
        projecturl:'https://ai-code-snippet-frontend.vercel.app/',
        projecthashdags:["#React", "#NodeJS" , "#MongoDB" , "#ExpressJS" ,  "#NodeMailer"],
      stack:'Mern Stack'
    },
        {
            projectname:'EmailServer',
            projectimage:'emailserver1.PNG',
            projectdesc:'This is Complex SaaS website EmailServer',
            projecturl:'https://emailserverfrontend.vercel.app/',
            projecthashdags:["#React", "#NodeJS" , "#MongoDB" , "#ExpressJS" ,  "#NodeMailer"],
          stack:'Mern Stack'
        },
        {
            projectname:'Mobilebandencentrale',
            projectimage:'mobilebanden.PNG',
            projecturl:'https://react-bug-fix-project.vercel.app/',
            projectdesc:'This is Mern Stack Project From Freelancer.com',
            projecthashdags:["#React", "#NodeJS" , "#MongoDB" , "#ExpressJS" , "#NodeMailer" , "#GoogleMaps" , "#Whatsapp"],
           stack:'Mern Stack'
        },
        {
            projectname:'My-ItJobs',
            projectimage:'myitjobs1.PNG',
            projecturl:'https://my-it-jobs-five.vercel.app/',
            projectdesc:'This is Mern Stack Application For People Who Want To Find Job/People',
            projecthashdags:["#React", "#NodeJS" , "#MongoDB" , "#ExpressJS" , "#NodeMailer"],
          stack:'Mern Stack'
        },
        
        
        {
            projectname:'Juice Oiasis',
            projectimage:'Juice1.PNG',
            projecturl:'https://my-minipacketfrontend.vercel.app/',
            projectdesc:'This Simple Fullstack Web Application With Contact Form',
            projecthashdags:["#React", "#NodeJS" , "#MongoDB" , "#ExpressJS" ,  "#NodeMailer"],
            stack:'Mern Stack'

        },

    ]
  return (
    <div id='projects' className="projects w-[100%] mt-[240px] flex items-center flex-col gap-[55px] justify-center">
      <h1 className='text-white font-[900] text-[26px]'>Projects</h1>
        <div className="projectsframe justify-center text-white gap-[55px] flex flex-wrap gap-[25px] w-[100%]">


           {projects.map(data => 
                   <motion.div transition={{duration:0.6}} initial={{filter:'blur(10px)' ,    marginRight: '150px' , marginTop:'50px'  }} whileInView={{filter:'blur(0px)' , marginRight: '0px' , marginTop:'0px' }} className='w-[100%] md:w-[80%]  lg:flex items-end justify-between '>

                   <img  width={300} className='w-[100%] lg:w-[600px]  p-[10px] bg-white/10 rounded-[15px]' src={data.projectimage} alt="" />

                   <div className="info mt-[50px] md:w-[400px] p-[10px] flex flex-col gap-[10px] md:mt-0">

                      <h1 className='text-teal-300 text-[24px] font-[900]'>{data.projectname}</h1>
                      <h3 className='text-gray-400 text-[20px]'>{data.projectdesc}</h3>
                      <br />


                      <div className="custombtn relative">
                      <a href={data.projecturl} className='flex cursor-pointer livepreview items-center justify-start gap-[10px] '><Link></Link> Live Preview  
                       
                       

                       </a>
 
                      <div className="rotateanimation absolute"></div>
                      </div>

               


                   </div>
   
   
   
                 </motion.div>
           )}

             

        </div>
    </div>
  )
}
