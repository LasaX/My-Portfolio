import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title=""
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Real Time Train Tracker "
          des=" Developed a real-time Train Monitoring System using Arduino, GPS-enabled ESP32, and a full-stack web 
          app with React, MongoDB, Express.js, and Node.js."
          src={projectOne}
          git="https://github.com/LasaX/Real-time-train-tracking-system"
          web="https://train-tracking-system-tau.vercel.app"
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Developed a dynamic e-commerce platform using the MERN stack, integrating RTK Query for efficient state management
           and API interaction. The application features user authentication, product browsing, a shopping cart, secure payment gateway 
           integration, and an admin dashboard for managing products and orders."
          src={projectTwo}
          git="https://github.com/LasaX/E---Commerce-App"
          web=""
        />
        <ProjectsCard
          title="Blogging App"
          des=" Created a feature-rich blogging application leveraging the MERN stack and Redux Toolkit Query for state and data fetching
           management. The platform allows users to create, edit, and manage blog posts, comment on articles, and engage with other users."
          src={projectThree}
          git="https://github.com/LasaX/Blog-App"
          web=""
        />
        
      </div>
    </section>
  );
}

export default Projects