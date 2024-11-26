import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { BG_IMG } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import {
  firstStep,
  landingPageHeading,
  landingPageOverView,
  secondStep,
  stepsToFollowHeading,
  thirdStep,
} from "../utils/texts";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("./portfolio");
  };

  return (
    <div className="relative w-full h-screen">
      <img
        className="w-full h-full object-cover animate__animated animate__fadeIn"
        src={BG_IMG}
        alt="background-image"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-90 "></div>
      <div className="absolute inset-0 flex items-center justify-center text-white z-10">
        <div className="text-center  animate__animated animate__slideInUp">
          <h1 className="text-5xl w-[60%] font-bold mx-auto my-5 font-serif">
            {landingPageHeading}
          </h1>
          <p className="text-center text-2xl w-[70%] mx-auto font-serif">
            {landingPageOverView}
          </p>
        </div>
      </div>
      <div className=" pt-10 pb-20  bg-gray-900">
        <h1 className="text-4xl text-center font-bold text-white">
          {stepsToFollowHeading}
        </h1>
        <div className="flex justify-around items-center space-x-4 mx-14 flex-wrap">
          <div
            className=" bg-gray-400  my-28 rounded-lg shadow-lg p-10 cursor-pointer hover:animate-pulse  xl:w-1/4 lg:w-1/3 md:w-2/5 sm:w-2/3 text-gray-900"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-xl font-bold mb-2">Step 1</h3>
            <p>{firstStep} </p>
          </div>
          <div
            className=" bg-gray-400  my-28 rounded-lg shadow-lg p-10 cursor-pointer hover:animate-pulse  xl:w-1/4 lg:w-1/3 md:w-2/5 sm:w-2/3 text-gray-900"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-bold mb-2">Step 2</h3>
            <p>{secondStep}</p>
          </div>
          <div
            className=" bg-gray-400  my-28 rounded-lg shadow-lg p-10 cursor-pointer hover:animate-pulse xl:w-1/4 lg:w-1/3 md:w-2/5 sm:w-2/3 text-gray-900"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-xl font-bold mb-2">Step 3</h3>
            <p>{thirdStep}</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold py-2 px-10 rounded-full shadow-lg animate__animated animate__pulse animate__infinite"
            data-aos="pulse"
            data-aos-duration="1500"
            data-aos-iteration="infinite"
            onClick={handleClick}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
