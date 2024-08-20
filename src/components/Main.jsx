// import { Tabs } from '@mantine/core';
// import { useState } from 'react';
// import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
// import { Link } from 'react-router-dom';

import Navbar from "./Navbar";
import Mail from "./Mail";
import Social from "./Social";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";
import User from "../User";
// import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect, useState, useRef } from "react";
// import { Loader } from "@mantine/core";
import Loader from "./Loader";
// import { Element } from "react-scroll";
// import { ScrollArea } from "@mantine/core";

function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const sections = {
    About: useRef(null),
    Projects: useRef(null),
    Experience: useRef(null),
    Skills: useRef(null),
    Contact: useRef(null),
  };

  const scrollToSection = (section) => {
    window.scrollTo({
      top: sections[section].current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="">
      
   
   

      {loading ? (
        <Loader /> // Show Loader while loading is true
      ) : (
        <>
          <Navbar scrollToSection={scrollToSection} />
          <div ref={sections.About}><About /></div>
      <div ref={sections.Projects}><Projects /></div>
      <div ref={sections.Experience}><Experience /></div>
      <div ref={sections.Skills}><Skills /></div>
      <div ref={sections.Contact}><Contact /></div>
          <footer>
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              className="text-white text-[1.2rem] text-center mt-10 font-mono"
            >
              <div className="text-[2rem]">{User.name}</div>
              <div>
                {" "}
                copyright &copy; {new Date().getFullYear()} {User.name} || All
                Rights Reserved
              </div>
            </div>
          </footer>
          <Mail />
          <Social />
        </>
      )}
       
    </div>
  );
}
export default Main;
