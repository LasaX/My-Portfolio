import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[550px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" (Hons) BICT"
            subTitle="University of Sri Jayawardhanapura (2022 - 2025)"
            result=""
            des="BICT Degree Program - University of Sri Jayewardenepura 
             The Bachelor of Information and Communication Technology (BICT) at the University of Sri Jayewardenepura equips students with a strong foundation in IT, software development, and communication technologies. It focuses on preparing graduates for careers in technology-driven industries, emphasizing practical skills and innovative solutions."
          />
          
        </div>
      </div>
      
    </motion.div>
  );
}

export default Education