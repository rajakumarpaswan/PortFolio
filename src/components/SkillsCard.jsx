// import React from 'react'

// import Skills from "./Skills"
import { Group,Badge } from "@mantine/core"
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


const SkillsInfo =[
{
    title :"Languages",
    skill:["C","C++","Python","JavaScript",]
    },
    {
        title :"Tools",
        skill:["Git","GitHub","VS code","PostMan",]
        },
        {
            title :"FrontEnd Development",
            skill:["HTML","CSS","Tailwind CSS", "React.JS", "Rest API","JavaScript","Material UI","Mantine UI","Boostrap",]
            },
]

function SkillsCard() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div data-aos="fade-up" data-aos-duration="800"  className="mt-10 flex w-[90%] mx-14 px-16 flex-wrap gap-y-5 font-mono      justify-between  items-center ">
        {SkillsInfo.map((skill,index)=>(
        <div key={index} className="border-[2px] font-mono   w-[48%] rounded-xl p-4 cursor-pointer transition-transform duration-300 ease-in-out hover:shadow-[0_0px_10px_1px_#64FFDA] text-white border-[#64FFDA]  ">
                <p className="text-[1rem] text-white text-center font-bold">{skill.title}</p>
                <Group className="1" mb="xs">
           {
           skill.skill.map((tecno,index) =><Badge mt="md" key={index} className="text-[1rem] font-mono  " variant="outline" color="#64FFDA">{tecno}</Badge>)
           }
          </Group>
            </div>
        ))}
    </div>
  )
}

export default SkillsCard