// import React from 'react';
import { Card, Image, Group, Text, Button, Badge } from "@mantine/core";

import { useDisclosure } from '@mantine/hooks';
import { useState } from "react";
import Des from "./Des";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';




const ProjectInfo = [
  {
    title: "Mic E-commerce Web-App",
    description: "The buying and selling of goods and services over the internet. It encompasses a wide range of online business activities, including retail shopping, digital marketplaces, online auctions, and more.",
    image: "/Ecommerce.png",
    technologies: ["Tailwind CSS", "React.JS", "Rest API"],
    link: "https://github.com/"
  },
  {
    title: "Gana clone Web-App",
    description: "The buying and selling of goods and services over the internet. It encompasses a wide range of online business activities, including retail shopping, digital marketplaces, online auctions, and more.",
    image: "/Gana.com.png",
    technologies: ["Tailwind CSS", "React.JS", "API"],
    link: "https://youtube.com/"
  },
  {
    title: "Diet Web-App",
    description: "The buying and selling of goods and services over the internet. It encompasses a wide range of online business activities, including retail shopping, digital marketplaces, online auctions, and more.",
    image: "/Diet.png",
    technologies: ["Tailwind CSS", "React.JS", "Material UI"],
    link: "https://linkedin.com/"
  },

  {
    title: "Gana clone Web-App",
    description: "The buying and selling of goods and services over the internet. It encompasses a wide range of online business activities, including retail shopping, digital marketplaces, online auctions, and more.",
    image: "/Gana.com.png",
    technologies: ["Tailwind CSS", "React.JS", "API"],
    link: "https://youtube.com/"
  },
  {
    title: "Diet Web-App",
    description: "The buying and selling of goods and services over the internet. It encompasses a wide range of online business activities, including retail shopping, digital marketplaces, online auctions, and more.",
    image: "/Diet.png",
    technologies: ["Tailwind CSS", "React.JS", "Material UI"],
    link: "https://linkedin.com/"
  },
  {
    title: "Diet Web-App",
    description: "The buying and selling of goods and services over the internet. It encompasses a wide range of online business activities, including retail shopping, digital marketplaces, online auctions, and more.",
    image: "/Diet.png",
    technologies: ["Tailwind CSS", "React.JS", "Material UI"],
    link: "https://linkedin.com/"
  },
  // Add other projects as needed
];

function ProjectsCards() {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    open();
  };

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div data-aos="fade-up" data-aos-duration="800"  className="mt-10 flex w-[90%] mx-14 px-16 flex-wrap gap-y-5 font-mono     justify-between  items-center ">
      {ProjectInfo.map((project, index) => (
            
          <Card key={index}  onClick={()=>handleCardClick(project)}    className=" bg-[#112240] hover:scale-[1.02] cursor-pointer transition-transform duration-300 ease-in-out hover:shadow-[0_0px_10px_1px_#64FFDA] text-white border-[#64FFDA] border-[2px]"  shadow="sm" w="320px" h="400px" padding="lg" radius="md" withBorder>
          <Card.Section   className="p-3">
            <Image className="rounded-xl" src={project.image} height={160} alt={project.title} />
          </Card.Section>

          <Group justify="space-between" mt="xs" mb="xs">
            <Text className="" fw={500}>{project.title}</Text>
           
          </Group>
          
          <Group className="1" mb="xs">
           {
            project.technologies.map((tecno,index) =><Badge key={index} className="text-[.5rem]" variant="outline" color="#64FFDA">{tecno}</Badge>)
           }
          </Group>

          <Text classNames="" size="sm" className="text-justify" lineClamp={3} c="dimmed">
            {project.description}
          </Text>

          <Button className="mt-7 text-[#112240] bg-[#64FFDA] hover:bg-black "  fullWidth  radius="md" component="a" href={project.link} target="_blank">
            Show More
          </Button>
        </Card>
       

    
        
      

      ))}
      {/* <Modal.Root opened={opened} className="p-4  bg-[#112240]"  onClose={close} size="xl">
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header className="bg-[#112240] text-white">
            <Modal.Title className="text-[2rem]">{selectedProject?.title}</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body className="bg-[#112240]">
          {selectedProject && (
              <>
                <Image   src={selectedProject.image} alt={selectedProject.title} />

                <Text mt="md" size="md">{selectedProject.description}</Text>
                <Group mt="md">
                  {selectedProject.technologies.map((tecno, index) => (
                    <Badge mt="md" key={index} variant="outline" color="#64FFDA">{tecno}</Badge>
                  ))}
                </Group>
               

                 <div className="flex justify-between items-center gap-5">
                <Button className="mt-7  text-[#64FFDA] bg-black "  fullWidth  radius="md" component="a" href={selectedProject.link} target="_blank">
            View code
          </Button>
          <Button className="mt-7 text-[#112240] hover:text-[#112240] bg-[#64FFDA] hover:bg-[#64FFDA]"  fullWidth  radius="md" component="a" href={selectedProject.link} target="_blank">
            Live App
          </Button>
          </div>
              </>
            )}

          </Modal.Body>
         
        </Modal.Content>
      </Modal.Root> */}
     <Des selectedProject={selectedProject} opened={opened} close={close} />
    </div>
  );
}

export default ProjectsCards;
