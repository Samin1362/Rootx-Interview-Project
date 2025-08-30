import React from 'react';
import LogoLoop from '../../components/LogoLoop/LogoLoop';
import { 
  SiNumpy, 
  SiPython, 
  SiPytorch, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb 
} from "react-icons/si";


const TechBar = () => {

const techLogos = [
  // ML / Data Science
  { node: <SiPython className='text-[#FF914E]'/>, title: "Python", href: "https://www.python.org" },
  { node: <SiNumpy className='text-[#FF914E]'/>, title: "NumPy", href: "https://numpy.org" },
  { node: <SiPytorch className='text-[#FF914E]'/>, title: "PyTorch", href: "https://pytorch.org" },

  // Web Development
  { node: <SiHtml5 className='text-[#FF914E]'/>, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 className='text-[#FF914E]'/>, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiTailwindcss className='text-[#FF914E]'/>, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiReact className='text-[#FF914E]'/>, title: "React", href: "https://react.dev" },
  { node: <SiNodedotjs className='text-[#FF914E]'/>, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress className='text-[#FF914E]'/>, title: "Express.js", href: "https://expressjs.com" },
  { node: <SiMongodb className='text-[#FF914E]'/>, title: "MongoDB", href: "https://www.mongodb.com" },
];


  return (
    <div style={{ height: '80px', position: 'relative', overflow: 'hidden'}} className='max-w-[1240px] mx-auto my-[50px]'>
      <LogoLoop
        logos={techLogos}
        speed={60}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#FF914E"
        ariaLabel="Technology partners"
      />
    </div>
  );
};

export default TechBar;