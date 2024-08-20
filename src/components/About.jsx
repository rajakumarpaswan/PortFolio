import { useEffect, useState } from "react";
import { Button } from "@mantine/core";
//@ts-ignore
import DOTS from "vanta/src/vanta.dots";
//@ts-ignore
// import TRUNK from "vanta/src/vanta.trunk"
import User from "../User";
import Typewriter from "typewriter-effect";
import Resumeviewer from "./Resumeviewer";
import { IconDownload } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
// "use client";
// import { useTheme } from "next-themes";
// import { NeonGradientCard } from "./magicui/Neon-gradient-card";
 


 
// import { useEffect, useState } from "react";

// import Profile from ""

function About() {
  const [dots, setDots] = useState(null);
  // const [trunk,setTrunk] =useState(null)
  // const { theme } = useTheme();
  // const [color, setColor] = useState("#ffffff");
  const [opened, { open, close }] = useDisclosure(false);

  // useEffect(() => {
  //   setColor(theme === "dark" ? "#ffffff" : "#000000");
  // }, [theme]);
 
  useEffect(() => {
    if (!dots) {
      setDots(
        DOTS({
          el: "#bg",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x64FFDA,
          color2: 0x4420ff,
          backgroundColor: 0x112240,
          size: 3.5,
          spacing: 36.0,
          showLines: false,
        })
      );
    }
    // if(!trunk){
    //   setTrunk(
    //       TRUNK({
    //         el: "#photo",
    //         mouseControls: true,
    //         touchControls: true,
    //         gyroControls: false,
    //         minHeight: 200.00,
    //         minWidth: 200.00,
    //         scale: 1.00,
    //         scaleMobile: 1.00,
    //         color: 0x64FFDA,
    //         backgroundColor: 0x4c5055,
    //         spacing: 0,
    //         chaos: 4
    //       })
    //   )
    // }
    return () => {
      if (dots) dots.destroy();
      //  if(trunk) trunk.destroy();
    };
  }, []);
  return (
    <div className="flex  px-16     overflow-hidden  relative 
  
    h-[100vh] w-full justify-around items-center -z-10   font-mono" id="bg">
          
      <div className="ml-10   w-3/5 flex flex-col  mt-20  ">
        <p className="text-[#64FFDA] text-3xl ">Hi, I am</p>
        <h1 className="text-white text-[4.25rem]   font-extrabold ">{User.name}</h1>
        <p className="text-white text-4xl flex font-semibold  ">
          i'm a&nbsp; 
          <span className="text-[#64FFDA] ">
            <Typewriter
              options={{
                strings: User.stack,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </p>
      <p className=" text-[#889280] text-justify mt-5  font-semibold">
          {User.bio}
        </p>
<div className="flex gap-2 mt-6">
<Button onClick={open} className=" text-[#112240] w-fit" size="lg" variant="filled" color="#64FFDA ">Check Resume</Button>
 <Button component="a"  href="/Raja resume.pdf" download={User.name} className=" text-white border-[#64FFDA] hover:bg-[#64FFDA] hover:text-[#112240]" variant="outline"   size="lg"  rightSection={<IconDownload size={20} />}>Download</Button>

</div>
      </div>
        <div className="w-[25vw] mt-20  neon-gradient-shadow flex justify-center items-center overflow-hidden   rounded-full   h-[50vh]" id="photo">
        
          <img className="w-[100%] h-[100%]  rounded-full" src="/pro2.jpg" alt="profile" />
          
        </div>
        
<Resumeviewer opened={opened} close={close}/>
    </div>
  );
}

export default About;
