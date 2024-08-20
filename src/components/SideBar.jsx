import { useDisclosure } from "@mantine/hooks";
import { Drawer,Burger } from "@mantine/core";
// import { NavLink } from "react-router-dom";
// import NavLinks from './Navbar'
// import { IconHexagonLetterR } from "@tabler/icons-react";
const links =["About", "Work", "Experience", "Skills", "Contact"]
const NavLinks = ()=>{
  return links.map((link,index)=>{
    return  <a className="hover:text-[#64FFDA] hover:underline hover:decoration-solid text-lg" key={index} href="">
    {link}
  </a>
  })
}
function SideBar() {
  const [opened, {toggle}] = useDisclosure(false);
  return (
    <div className="hidden md-mx:block bs-max:block z-10  bg-[#112240] ">
      <Drawer.Root className=" hidden md-mx:block bs-max:block z-0" opened={opened} onClose={toggle} position="right" size="sm">
        <Drawer.Overlay className="z-0" overlayProps={{ backgroundOpacity: 0.5, blur: 3 }} />
        <Drawer.Content className="z-0 "  bg="#0A192F">
          
          <Drawer.Body className="mt-24 flex flex-col font-mono gap-6 items-center " >{NavLinks()}</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Burger className="text-white" opened={opened} size="lg" lineSize={3.5} color="#64FFDA" onClick={toggle}  aria-label="Toggle navigation" />
    </div>
  );
}

export default SideBar;

