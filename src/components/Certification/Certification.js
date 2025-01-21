import React,{useState} from 'react'
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title'
import {  nodeCertification ,postman} from "../../assets";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#535458] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#535458] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Certification = () => {
      const [dotActive, setDocActive] = useState(0);
     const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       nextArrow:<SampleNextArrow />,
       prevArrow:<SamplePrevArrow />,
       beforeChange: (prev, next) => {
         setDocActive(next);
       },
       appendDots: (dots) => (
         <div
           style={{
             borderRadius: "10px",
             padding: "10px",
           }}
         >
           <ul
             style={{
               display: "flex",
               gap: "15px",
               justifyContent: "center",
               marginTop: "20px",
             }}
           >
             {" "}
             {dots}{" "}
           </ul>
         </div>
       ),
       customPaging: (i) => (
         <div
           style={
             i === dotActive
               ? {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "#ff014f",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
               : {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "gray",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
           }
         ></div>
       ),
     };
  return (
    <section
      id="certification"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="" des="certification" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              
              <div className="w-full lgl:w-[100%] h-full flex flex-col justify-between">
                <img className="w-96 h-96 lgl:w-[700px] mx-auto p-4" src={nodeCertification} alt="nodeCertification" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#535458] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Server-Side Web Programming
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        Conducted By University Of Moratuwa
                      </p>
                    </div>
                    
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Two ================== */}

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              
              <div className="w-full lgl:w-[100%] h-full flex flex-col justify-between">
                <img className="w-96 h-96 lgl:w-[700px] mx-auto pb-4" src={postman} alt="postman" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#535458] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Postman  API Fundamentals Student Expert
                      </h3>
                      <p className="  text-base text-gray-400 mt-3">
                        Conducted By Postman
                      </p>
                    </div>
                   
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Three ================== */}

          {/* <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              
              <div className="w-full lgl:w-[100%] h-full flex flex-col justify-between">
                <img className="w-96 h-96 lgl:w-[700px] mx-auto p-4" src={nodeCertification} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#535458] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        cer.
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via Upwork - Mar 4, 2015 - Aug 30, 2021 test
                      </p>
                    </div>
                    
                  </div>
                  
                </div
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    </section>
  );
}

export default Certification