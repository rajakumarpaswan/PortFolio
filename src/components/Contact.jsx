// import React from 'react'
// import { Input } from '@mantine/core';
// import { FloatingLabel } from "flowbite-react"

import Floating from "./Floating"
import { Button } from "flowbite-react"
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function Contact() {
  useEffect(()=>{
    AOS.init();
  },[]);

  return (
    <div  className="p-7 font-mono">
     
        <h1   className="text-4xl  text-center mb-8 mt-5 text-white">Contact</h1>
        <div  data-aos="flip-left" data-aos-duration="800" className="border-[1px]  m-auto  shadow-[0px_0px_9px_0px_#64FFDA]   p-10 w-[48%] rounded-xl border-[#64FFDA] ">
        <p  className="text-xl   text-white">Lets connect</p>
        <Floating className=""/>
      
        </div>
        
    </div>
  )
}

export default Contact