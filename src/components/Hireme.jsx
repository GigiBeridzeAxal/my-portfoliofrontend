import { DollarSign, Euro } from 'lucide-react'
import React from 'react'

export default function Hireme() {

    const hiredetails = [
        {
            cardname:'Project Hire',
            cost:"100-750",
            desc:"This service includes one-time cooperation which will continue until the project is completed",
            benefits:["24/7 Support" , "Production Ready" , "Full Resposnive" , "Admin Panels" , "Optimized"]


        }
    ]

  return (
    <div className="hireme">
        <div className="hiremeframe">

            {hiredetails.map(data => <div className='w-[100%] p-[20px] text-white bg-slate-800/50 h-[500px]'>

            <h1 className='text-[20px] font-[900]'>{data.cardname}</h1>

            <h3 className='text-[26px] flex gap-[5px]'>Price: <span  className='flex items-center font-[700] justify-center gap-[5px]'>{data.cost} <DollarSign className='size-[20px] text-green-500 '></DollarSign></span></h3>



            </div>)}

            

             

        </div>
    </div>
  )
}
