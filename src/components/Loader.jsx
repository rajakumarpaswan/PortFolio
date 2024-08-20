// import React from 'react'
//@ts-ignore
import BIRDS from "vanta/src/vanta.birds";
import { useEffect,useState } from "react";
import { IconHexagon } from "@tabler/icons-react";
function Loader() {
  const [birds, setBirds] = useState(null);
  useEffect(() => {
    if (!birds) {
      setBirds(
        BIRDS({
            el: ".raja",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color1: 0x8ddbb4,
            color2: 0x7c4ed,
            colorMode: "lerpGradient",
            birdSize: 2.60,
            wingSpan: 10.00,
            speedLimit: 8.00,
            separation: 100.00,
            alignment: 100.00,
            cohesion: 53.00,
            backgroundColor: 0x112240,
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
      if (birds) birds.destroy();
      //  if(trunk) trunk.destroy();
    };
  }, []);
  return (
    <div className=" w-[100vw] h-[100vh] overflow-hidden flex justify-center items-center">
    <div className="raja relative w-[70%] h-[70%]  animate-[ping_1.5s_ease-in-out_1_4s] flex justify-center items-center ">
        
        <IconHexagon className="absolute z-10    animate-[spin_5s_linear_infinite]  " size={300} color="#64FFDA" stroke={1.25}/>
        <div className="absolute text-[2rem] z-10  text-white font-semibold uppercase">welcome to Raja kumar portfolio</div>
    </div>
    </div>
  )
}

export default Loader