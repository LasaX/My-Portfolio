import React from 'react'



const ContactLeft = () => {
  return (
    <div className=" w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:pt-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Lasantha Dinidu</h3>
        <p className="text-lg font-normal text-red-500">
          Web Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
         
        I'm a Full Stack Developer specializing in building efficient, user-friendly applications. Feel free to reach out for collaboration or inquiries!  
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-red-400">+94 785336685</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-red-400">lasanthadinidu22@gmail.com</span>
        </p>
      </div>
     
    </div>
  );
}

export default ContactLeft