import { Star } from 'lucide-react'
import React, { useEffect } from 'react'
import {motion} from 'framer-motion'

export default function Reviews() {
    

    const reviews = [

        {
            projectname:"React Bug Fixes on Website",
            reviewdesc:"He's amazing—very knowledgeable and fast. I'll definitely hire him again and highly recommend him for MERN projects.",
            reviewimage:'https://www.freelancer.com/ppic/268931518/logo/3920689/profile_logo_3920689.jpg?image-optimizer=force&format=webply&width=120',
            reviewname:"Roland S.",
            stars:5
        },
        {
        
            projectname:"Convert 4 React forms to HTML",
            reviewdesc:"He has once again done an outstanding job. I wholeheartedly recommend and endorse him.",
            reviewimage:'https://www.freelancer.com/ppic/268931518/logo/3920689/profile_logo_3920689.jpg?image-optimizer=force&format=webply&width=120',
            reviewname:"Roland S.",
            stars:5
        },
        {
            reviewdesc:"He communicates well and did my project as I wanted it.",
            reviewimage:'T.PNG',
            reviewname:"David M.",
            projectname:"Telegram Ads Poster App -- 2",
            stars:4.9
        },

        {
            projectname:"React Bug Fixes on Website",
            reviewdesc:"He's amazing—very knowledgeable and fast. I'll definitely hire him again and highly recommend him for MERN projects.",
            reviewimage:'https://www.freelancer.com/ppic/268931518/logo/3920689/profile_logo_3920689.jpg?image-optimizer=force&format=webply&width=120',
            reviewname:"Roland S.",
            stars:5
        },
        {
        
            projectname:"Convert 4 React forms to HTML",
            reviewdesc:"He has once again done an outstanding job. I wholeheartedly recommend and endorse him.",
            reviewimage:'https://www.freelancer.com/ppic/268931518/logo/3920689/profile_logo_3920689.jpg?image-optimizer=force&format=webply&width=120',
            reviewname:"Roland S.",
            stars:5
        },
        {
            reviewdesc:"He communicates well and did my project as I wanted it.",
            reviewimage:'T.PNG',
            reviewname:"David M.",
            projectname:"Telegram Ads Poster App -- 2",
            stars:4.9
        },


    ]

    const marque = document.querySelector('.custommarque')
    const marqueframe = document.querySelector('.custommarqueframe')




   



  return (
    <div id='reviews' className="reviews flex-col justify-center items-center w-[100%] mt-[240px] flex items-center 
    justify-center">



        <h1 className='text-white font-[900] w-[90%] text-center mb-[50px] text-[36px] flex-wrap'>A few words from <span className='text-blue-500'>Our Clients</span></h1>
        <motion.div   transition={{duration:2 , repeat:Infinity ,}} initial={{opacity:0.3}}  animate={{opacity:1}} className="attetion mb-[50px] text-red-500">Attention train comes !</motion.div>

        

             
             <div className="custommarque relative  w-[100%]  flex items-center justify-center overflow-hidden">

                <div className="marqueblur">

                </div>
                <div className="marqueblurright">

</div>
                
                <div className="custommarqueframe  realtive h-[400px] flex gap-[170px]">
      
                
             {reviews.map((data, id) => 

<motion.div key={id}   style={{ "--position": id }}className="reviewbox   w-[420px] bg-slate-900/50 rounded p-[20px] h-[320px] flex-col justify-between flex flex-col gap-[10px]">
  <div className='flex flex-col gap-[25px]'>   <h2 className='text-white font-[900]'>{data.projectname}</h2>
  <div className='text-gray-100 max-w-[400px]  text-[24px] w-[400px]'>{data.reviewdesc}</div></div>
  <div className="reviewprofile flex items-center w-[100%]  gap-[10px] justify-between text-white">

    <div className="stars flex items-center justify-center gap-[10px]">
        <Star className='text-yellow-500'></Star> {data.stars}
    </div>

    <div className='gap-[10px] flex items-center justify-center'>
    <h3>{data.reviewname}</h3> <img width={50} className='rounded-[50%]' src={data.reviewimage} alt="" />
    </div>

  </div>





</motion.div >




)}
          


              
          </div>

   </div>





                

            


    </div>
  )
}
