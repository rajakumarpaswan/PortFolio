// import React from 'react'
import { Modal,ActionIcon,Tooltip} from "@mantine/core";
import { IconArrowBigDownLineFilled } from "@tabler/icons-react";

import { Document,Page } from "react-pdf";
import User from "../User";
// import { Tooltip } from "flowbite-react";
function Resumeviewer({opened,close}) {
  return (
    <div> 
    <Modal.Root opened={opened} className="p-4  bg-[#112240]"  onClose={close} size="xl">
    <Modal.Overlay />
    <Modal.Content>
      <Modal.Header className="bg-[#112240]  text-white">
        <Modal.Title className="text-[2rem] ">Resume</Modal.Title>
        <Tooltip className="text-black" label="Download" color="#64FFDA" position="right" offset={5}>
        <ActionIcon ml="md" component="a"  href="/Raja resume.pdf" download={User.name} mt="sm" variant="outline" aria-label="Settings">
      <IconArrowBigDownLineFilled color="#64FFDA" stroke={1.5} />
    </ActionIcon>
    </Tooltip>
        <Modal.CloseButton />
      </Modal.Header>
      <Modal.Body className="bg-[#112240]">
    
      <Document file="/Raja resume.pdf" >
        <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
      </Document>
      </Modal.Body>
     
    </Modal.Content>
  </Modal.Root></div>
  )
}

export default Resumeviewer