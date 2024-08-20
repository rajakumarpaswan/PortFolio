// import { Anchor } from "@mantine/core"
// import { Tabs } from '@mantine/core';
// import { Tabs } from "@mantine/core"
import { IconHexagonLetterR } from "@tabler/icons-react";
import SideBar from "./SideBar";

// import { Tabs } from "@mantine/core";
import { useEffect, useState } from "react";
// import { Link } from "react-scroll";
// import { link } from "fs";


const links =["About", "Projects", "Experience", "Skills", "Contact"]
// const sectionIds = ["about", "work", "experience", "skills", "contact"];
const NavLinks = ({ scrollToSection, activeLink, setActiveLink })=>{

  return links.map((link,index)=>{
     
    return  <a    onClick={() => {
      scrollToSection(link);
      setActiveLink(link);
    }}  className={`hover:text-[#64FFDA] cursor-pointer font-mono text-lg ${activeLink === link ? 'text-[#64FFDA]' : ''}`} key={index} >
    {link}  
  </a>
  })
}

function Navbar({scrollToSection}) {
  
  const [activeLink, setActiveLink] = useState('About');
const [show,setShow] =useState(true)
const [lastscrollY,setLastScrollY] =useState(0)
const [shadow,setShadow] =useState(false)

const controlNavbar = () =>{
  if(window.scrollY>lastscrollY && window.scrollY > 100)
    {
    setShow(false)
  }else{
    setShow(true)
  }
  if(window.scrollY>100)
    {
     setShadow(true)
  }else{
    setShadow(false)
  }
  setLastScrollY(window.scrollY)

 

}

useEffect(()=>{
  window.addEventListener('scroll',controlNavbar);
  return () =>window.removeEventListener('scroll',controlNavbar)
})
  
  return (
    <nav  className={`w-full ${show ? "translate-y-0" :"-translate-y-28"} transition-transform duration-500 ease-in-out ${shadow ? "shadow-[0px_10px_30px_-10px_#020c1b]":"" } flex justify-between  fixed z-10 items-center bg-[#112240] px-10 py-6  `}>
      <IconHexagonLetterR
        stroke={1.2}
        size={60}
        className="text-[#64FFDA] z-10 text-2xl dm-mono-regular"
      />
      <div  id="navbar"  className=" flex gap-7 text-[#889280] md-mx:hidden bs-max:hidden  ">
        <NavLinks scrollToSection={scrollToSection} activeLink={activeLink} setActiveLink={setActiveLink}/>
      </div>
      

      <SideBar />
    </nav>
  );
}

export default Navbar;
