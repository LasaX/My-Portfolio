import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Real Time Train Tracker "
          des="Developed a real-time Train Monitoring System using Arduino, GPS-enabled ESP32, and a full-stack web 
          app with React, MongoDB, Express.js, and Node.js."
          src={projectOne}
          git="https://github.com/LasaX/Real-time-train-tracking-system"
          web="https://train-tracking-system-tau.vercel.app"
        />
        <ProjectsCard
          title="B2B Mobile Recharge Distribution Platform"
          des="B2B mobile recharge voucher distribution platform developed for an
international client. The system enables secure and efficient high-frequency
transactions between a central administrator and a network of overseas
agents. It was designed to meet global standards for financial accuracy,
security, and scalability. The platform was built using NestJS for the backend
and React.js for the frontend"
          src={projectTwo}
          git="https://gitlab.com"
          web=""
        />
        <ProjectsCard
          title="CRM & ERP System"
          des="Developed a full-stack Customer Relationship Management (CRM) and
Enterprise Resource Planning (ERP) platform  for a local bespoke tailoring
company to digitize and streamline their business operations. The system
replaces traditional manual bookkeeping by managing the entire lifecycle of
custom tailoring orders, including customer inquiries, measurement
management, order tracking, production workflow and financial records. The
application was built using the MERN stack."
          src={projectThree}
          git="https://gitlab.com"
          web=""
        />
      </div>
    </section>
  );
};

export default Projects;
