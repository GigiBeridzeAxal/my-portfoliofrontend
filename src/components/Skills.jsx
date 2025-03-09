import React from 'react'

export default function Skills() {
  const skills =[
    {
      skillname:"Javascript",
      skillimage:'space/js.png',
      skilldesc:"Frontend"
    },
    {
      skillname:"CSS",
      skillimage:'space/css.png',
      skilldesc:"Frontend"
    },
    {
      skillname:"Html",
      skillimage:'space/html.png',
      skilldesc:"Fontend"
    },
    {
      skillname:"Figma",
      skillimage:'space/figma.png',
      skilldesc:"Design"
    },
    {
      skillname:"Next.js",
      skillimage:'space/next.png',
      skilldesc:"Backend"
    },
    {
      skillname:"MongoDB",
      skillimage:'space/mongodb.png',
      skilldesc:"Database"
    },
    {
      skillname:"NodeJS",
      skillimage:'space/node-js.png',
      skilldesc:"Backend"
    },
    {
      skillname:"React",
      skillimage:'space/react.png',
      skilldesc:"Frontend"
    },
    {
      skillname:"TailwindCSS",
      skillimage:'space/tailwind.png',
      skilldesc:"Frontend"
    },
    {
      skillname:"Stripe",
      skillimage:'space/stripe.webp',
      skilldesc:"Payment System"
    },
    {
      skillname:"Framer-Motion",
      skillimage:'space/framer.png',
      skilldesc:"Animations"
    },
    {
      skillname:"Three.js",
      skillimage:'three.png',
      skilldesc:"3d Web Models"
    },
    {
      skillname:"Wordpress",
      skillimage:'https://th.bing.com/th/id/R.617238c937f0b354fbde2dbc06143af8?rik=ivT0RW7eBgOsjQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f05%2fWordPress-Logo-Free-Download-PNG.png&ehk=hoPwfQ2sAbj1h9mCQQ1JJBcf3YAFjkjWDcbXurLY9Vo%3d&risl=&pid=ImgRaw&r=0',
      skilldesc:"Web  Tool"
    },

  ]
  return (
    <div className="skills mt-[244px] w-[100%] flex items-center justify-center gap-[55px]">

      <div className="skillsframe w-[80%] flex flex-col items-start gap-[55px] ">
      <h1 className='text-[36px] text-center  text-gray-500 font-[900] w-[100%] sm:w-[500px]'> Technologies I Use in Development</h1>


      <div className="skillsbox justify-center sm:justify-center gap-[15px]  flex flex-wrap w-[100%]">

      {skills.map(data => 

        <div className='p-[15px] w-[100%] rounded-[10px] border-1 border-solid flex items-center  gap-[15px] text-white bg-slate-800/90 md:w-[250px]'>
          <img className='w-[50px] h-[50px]  p-[10px] bg-slate-900/90' src={data.skillimage} alt="" />

          <div className='flex flex-col justify-between items-start'>
            <span>{data.skillname}</span>
            <span className='text-[14px] text-gray-400'>{data.skilldesc}</span>
          </div>

        </div>
      )}

      </div>




      </div>
    </div>
  )
}
