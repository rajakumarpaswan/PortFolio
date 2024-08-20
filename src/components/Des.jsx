// import React from 'react'
import {  Image, Group, Text, Button, Badge ,Modal} from "@mantine/core";


function Des({ selectedProject, opened, close }) {
  return (
    <Modal.Root opened={opened} className="p-4  bg-[#112240]"  onClose={close} size="xl">
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
      </Modal.Root>
  )
}

export default Des