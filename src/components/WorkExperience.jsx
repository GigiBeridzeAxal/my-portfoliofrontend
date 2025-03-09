import React from 'react'

export default function WorkExperience() {
    

    const experience = [
        {
            experiencetittle:"Freelancer",
            experiencedesc:"I have a Freelancer account where I am active and have completed projects",
              img:"space/tauri.svg"
        },
        {
            experiencetittle:"My Projects",
            experiencedesc:"I have my own projects which are quite complex you can check live ",
              img:"space/glaxy.png"
        }
    ]

  return (
    <div id='experience' className="workexperience w-[100%]  mt-[240px] flex items-center justify-center flex-col gap-[55px] ">
                    <h1 className='font-[900] text-[27px] text-white'> Work <span className='text-green-400 '>Experience</span></h1>
        <div className="workexperienceframe  w-[100%] flex items-center justify-center flex-wrap gap-[25px]">



            {experience.map(data => 

             <div className='p-[20px] rainbow bg-slate-900 rounded-[10px] flex flex-col gap-[15px] w-[90%] sm:w-[500px]'>
                <img width={60} src={data.img} alt="" />
                <h1 className='text-white text-[20px] font-[800]'>{data.experiencetittle}</h1>
                <h3 className='text-gray-300'>{data.experiencedesc}</h3>
             </div>

            )}

            


        </div>
    </div>
  )
}
