import { Mail, MessageCircle, Phone, Send, User } from 'lucide-react'
import React , {Suspense, useRef} from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { toast } from 'react-toastify';

const secretkey = import.meta.env.VITE_APP_SECRETKEY
const backend = import.meta.env.VITE_APP_BACKEND

export default function Contact() {
    const formref = useRef()
    
    const sendmessage = async(e) => {
        e.preventDefault();

        console.log(formref.current[0].value)
        const fullname = formref.current[0].value
        const email = formref.current[1].value
        const phone = formref.current[2].value
        const message = formref.current[3].value


const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };

  const hashedsecret = await hashPassword(secretkey)


        const send = await axios.post(backend, {fullname , email , phone ,message , hashed:hashedsecret})

        if(send){
            toast.success("You Succesfully Send Message")
        }
         
        



    }
    const Model = () => {
        const { scene } = useGLTF("/Earth.glb"); // Load your model

        
    const modelRef = useRef()

   


    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.001; // Rotate on Y-axis
          }
    })
        return <primitive  ref={modelRef} object={scene}  scale={0.7} />;
      };
  return (
   <div id='contact' className="contact  mt-[200px] w-[100%] flex items-center justify-center">
    
    <div className="contactframe w-[80%] flex-wrap text-white flex  w-[80%] items-center 2xl:justify-between justify-center">

        <div className="leftsidew  ">
        <h1>Gigi Beridze: <span className='text-indigo-400 font-[900] w-[320px]'> 3d Web Developer</span></h1>

         <h1 className=' text-[24px] font-[900]'>Contact me to discuss any suggestions</h1>
        
          <div className="oursocials mt-[30px] ">  
          <h1 className='text-[20px] font-[700] mb-[15px]'>Socials</h1>   
           <div className="flex gap-[10px]">    <a href="https://www.freelancer.com/u/beridzegigi19" className='bg-slate-800 p-[10px]' ><img width={20} src="https://th.bing.com/th/id/R.512e9d9c9f8053701b53519934c2f0f3?rik=diNKAd8cxQR7nA&pid=ImgRaw&r=0" alt="" /></a>
           <a href="https://www.linkedin.com/in/gigi-beridze-87804932a/" className='bg-slate-800 p-[10px]'><img width={20} src="https://th.bing.com/th/id/R.d51da72e1f4675ba5aef9c956ed4c562?rik=FmeldpqK57Pqdw&riu=http%3a%2f%2fwww.freepnglogos.com%2fuploads%2fofficial-linkedin-logo----17.png&ehk=D2%2b5urO8gseetYQhxdSGq2qyTRbSvoavbbmoGEuOepo%3d&risl=&pid=ImgRaw&r=0" alt="" /></a></div>
          </div>

          <Canvas  className='w-[100%] h-[500px]'>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} />
      <Suspense fallback={null}>
        <Model  />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>


         

        </div>

 
        
         <form onSubmit={(e) => sendmessage(e)} ref={formref} className='mt-[50px] sm:w-[600px] w-[100%] flex flex-col gap-[25px]' >
         <h1  className='text-[24px] text-teal-200  font-[900]'>Contact Form</h1>
            <div className="input flex w-[100%] items-center justify-center gap-[10px] bg-slate-800 p-[10px]">
                <User></User>
            <input required className='w-[100%] outline-0 bg-slate-800' type="text" placeholder='Fullname' />

            </div>

            <div className="input flex  items-center justify-center gap-[10px] bg-slate-800 p-[10px]">
                <Mail></Mail>
            <input className='w-[100%] outline-0 bg-slate-800' type="mail" placeholder='Email' />

            </div>
            
            <div className="input flex  items-center justify-center gap-[10px] bg-slate-800 p-[10px]">
                <Phone></Phone>
            <input className='w-[100%] outline-0 bg-slate-800' type="text" placeholder='Phone Number' />

            </div>

               
            <div className="input flex  items-start justify-center gap-[10px] bg-slate-800 p-[10px]">
                <MessageCircle></MessageCircle>
            <textarea className='w-[100%] h-[150px] outline-0 bg-slate-800' type="text" placeholder='Message' />

            </div>

            <button className='text-white cursor-pointer contactsendbtn p-[10px]'>Send <Send></Send></button>





         </form>


    </div>
   </div>
  )
}
