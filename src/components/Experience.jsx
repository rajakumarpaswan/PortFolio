// import React from 'react'
// import ExperienceInfo from "../User"; // Assuming ExperienceInfo is an array of experiences
import { Timeline, Text } from "@mantine/core";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect,createRef } from 'react';
const ExperienceInfo = [
    {
      role: "Front-End Developer",
      company: "Atsuya Technology",
      date: "DEC 2023 - FEB 2024",
      des: "Worked with front-end development at atsuya in real-time industry project with deliverables like synchronous form validation, implementation of keyboard events and image contrast correction.",
      technologies: ["Tailwind CSS", "React.JS", "Material UI"],
    },
    {
      role: "Front-End Developer",
      company: "MIC ",
      date: "DEC 2022- MAR 2023",
      des: "Worked Developed responsive and interactive web pages for an e-commerce application.Integrated Material UI to E-commerce Admin Application to achieve User Experience.with front-end development at atsuya in real-time industry project with deliverables like synchronous form validation, implementation of keyboard events and image contrast correction.",
      technologies: ["Tailwind CSS", "React.JS", "Material UI"],
    },
  ];

function Experience() {
  const refs ={
    Experience:createRef(),
  }
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div  data-aos="fade-up" ref={refs.Experience} data-aos-duration="800"  className=" section mt-10    w-[100%] font-mono   ">

      <h1 className="text-center text-white  text-[2rem]">Experience</h1>
      <Timeline className="mx-14 px-16 mt-5 " active={1} bulletSize={25}  color="#64FFDA">
        {ExperienceInfo.map((role, index) => (
            
          <Timeline.Item  key={index} title={role.title}>
            <Text  color="white" size="lg">
              {role.company} - {role.date}
            </Text>
            <Text  color="white" className="text-justify mt-2" size="md">{role.des}</Text>
            <div className="text-white  text-lg mt-2">
                <span>skills : </span>
                {
                    role.technologies.map((tech,index)=>(
                      <span className="pl-3 " key={index}>
                        &#x2022; {tech}
                      </span>
                    ))
                }
            </div>
          </Timeline.Item>
        
          
        ))}
      </Timeline>
      
    </div>
  );
}

export default Experience;
