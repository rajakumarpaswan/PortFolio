import {

  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const SocialLinks = [
    { link: "https://github.com/rajakumarpaswan", icon: IconBrandGithub },
    {
      link: "https://www.linkedin.com/in/raja-kumar-paswan-b97b5b293/",
      icon: IconBrandLinkedin,
    },
    {
      link: "https://www.youtube.com/channel/UCrvv60kVaZZyRP9JKSgV6bw",
      icon: IconBrandYoutube,
    },
    {
      link: "https://www.linkedin.com/in/raja-kumar-paswan-b97b5b293/",
      icon: IconBrandInstagram,
    },
  ];
 
function Social() {
  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div  className="flex text-[#889280] items-center gap-10 fixed bottom-44 -left-40 rotate-90">
    {SocialLinks.map((sociallink, index) => {
      const IconComponent = sociallink.icon;
      return (
        <a
       
          key={index}
          href={sociallink.link}
          className="font-mono text-lg hover:text-[#64FFDA] hover:-translate-x-2
        transiton transform duration-300 ease-in-out"
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security measure when using target="_blank"

           
        >
          <div data-aos="fade-up-left" data-aos-duration="600" className=""> 
          <IconComponent className="-rotate-90" size={30} />

          </div>
        </a>
      );
    })}
    <hr className="border-[2px] w-40 rounded-full text-[#889280] border-[#889280]" />
  </div>
  );
}

export default Social;
