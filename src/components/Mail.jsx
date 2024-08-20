
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
function Mail() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div   className="flex text-[#889280] items-center gap-10 fixed bottom-40 -right-48 rotate-90 ">
    
        <a   href="mailto:rajakumarpaswan505@gmail.com " className="font-mono text-lg tracking-widest hover:text-[#64FFDA] hover:-translate-x-2
        transiton transform duration-300 ease-in-out" >
           <div  data-aos="fade-down-left" data-aos-duration="600">
           rajakumarpaswan505@gmail.com
            </div>  
        </a>
      
        <hr className="border-[2px] w-40 rounded-full text-[#889280] border-[#889280]" />
    </div>
  )
}

export default Mail