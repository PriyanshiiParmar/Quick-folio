import React from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { user_img } from "../utils/constants";

const Home = ({ personalDetails, socialLinks }) => {
  const navigate = useNavigate(); // Use useNavigate hook

  // Navigate to the Resume form on click
  const handleResumeClick = () => {
    navigate('/resumeForm'); // Use navigate to change the route
  };

  return (
    <div className="bg-gray-950 pt-10 text-white flex xl:justify-around lg:justify-around md:justify-center items-center xl:flex-row lg:flex-row sm:flex-row flex-col-reverse pb-5">
      <div>
        <p className="font-bold xl:text-3xl lg:text-3xl md:text-3xl my-2">Hello, it's </p>
        <p className="font-bold text-4xl">{personalDetails?.name}</p>
        <h2 className="font-bold text-3xl my-2">
          And I'm a <span className="text-cyan-300">{personalDetails?.role}</span>
        </h2>
       <div className="flex mb-4">
  <a href={socialLinks?.linkedin} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon 
      icon={faLinkedin} 
      size="2x" 
      className="text-white cursor-pointer hover:text-blue-500 mr-5 text-lg border border-teal-100 p-2 rounded-full hover:bg-white hover:animate-pulse" 
    />
  </a>
  
  <a href={socialLinks?.github} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon 
      icon={faGithub} 
      size="2x" 
      className="text-white cursor-pointer hover:text-gray-600 mr-5 text-lg border border-teal-100 p-2 rounded-full hover:bg-white hover:animate-pulse" 
    />
  </a>
  
  <a href={socialLinks?.twitter} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon 
      icon={faTwitter} 
      size="2x" 
      className="text-white cursor-pointer hover:text-cyan-300 mr-5 text-lg border border-teal-100 p-2 rounded-full hover:bg-white hover:animate-pulse" 
    />
  </a>
  
  <a href={socialLinks?.instagram} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon 
      icon={faInstagram} 
      size="2x" 
      className="text-white cursor-pointer mr-5 text-lg border border-teal-100 p-2 rounded-full hover:bg-white hover:animate-pulse hover:text-red-500 hover:shadow-red-500" 
    />
  </a>
</div>
        <button
          onClick={handleResumeClick} 
          className="block bg-cyan-400 py-2 rounded-md my-2 px-4 hover:bg-cyan-500 hover:shadow-sm hover:shadow-cyan-400 font-bold"
        >
          Resume
        </button>
      </div>
      <div>
        <img className="h-56 w-56 rounded-full mx-10 border border-cyan-200 p-2" src={user_img} alt="user" />
      </div>
    </div>
  );
};

export default Home;
