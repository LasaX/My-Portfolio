import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';


const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Full Stack Developer.", "Frontend Developer.", "Backend Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-3 ">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO </h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Lasantha </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide ">
        As a Full Stack Developer, I design, develop, and maintain both the front-end and back-end components
         of web applications. My responsibilities include creating user-friendly interfaces, ensuring seamless 
         server-side functionality, managing databases, and integrating APIs. I work across the entire software 
         development lifecycle, delivering scalable, efficient, and high-quality solutions.
        </p>
        <a
      href="Cv.pdf"
      download="Lasantha's-CV"
      className=" w-40 p-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Download My CV
    </a>
      </div>
      
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner