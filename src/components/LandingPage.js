import "aos/dist/aos.css";
import { landingPageHeading, landingPageOverView } from "../utils/texts";
import { useRef, } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const navigateToForm = ()=>{
    navigate('/form')
  }
  const scrollDown = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" w-full">
      <h3 className="text-4xl font-bold font-italics text-purple-900 m-5 h-full">
        Welcome{" "}
      </h3>
      <div className="h-screen">
        <div className="text-center  animate__animated animate__slideInUp font-yessava">
          <h1 className="text-5xl w-[60%] font-bold mx-auto mt-28 mb-16  text-pink-700">
            {landingPageHeading}
          </h1>
          <p className="text-center text-2xl w-[70%] mx-auto ">
            {landingPageOverView}
          </p>
        </div>
        <div className="flex items-center justify-center mt-16">
        <button
          onClick={scrollDown}
          className="bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded "
        >
          Get Started
        </button>
      </div>
      </div>
     
      <div ref={sectionRef}>
        <h1 className="text-6xl text-center text-pink-700 font-yessava p-5 h-screen">
          Customize
          <div className="border-2 border-dotted border-pink-500 w-1/4 h-72 flex justify-center items-center mx-auto my-[10%]">
            <button onClick={navigateToForm} className="p-5">➕</button>
          </div>
        </h1>
      </div>
    </div>
  );
};
export default LandingPage;
