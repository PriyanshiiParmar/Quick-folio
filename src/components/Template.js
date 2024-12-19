import { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Home from "./Home";
import Journey from "./Journey";
import Projects from "./Projects";
import Skills from "./Skillls";

const Template = () => {
  const [portfolio, setPortfolio] = useState(null);
  const getUserData = async () => {
    const storedData = await localStorage.getItem("portfolio");
    if (storedData) {
      const userDetails = await JSON.parse(storedData);
      setPortfolio(userDetails);
    }
  };
  useEffect(() => {
    getUserData()
  }, []);
  console.log(portfolio?.personalDetails, "portfolia");
  return (
    <div>
      <Header />
      <Home personalDetails={portfolio?.personalDetails} socialLinks={portfolio?.socialLinks}/>
      {/* <About/> */}
      <Journey educationDetails={portfolio?.educationDetails} experience={portfolio?.experienceDetails}/>
      <Skills skills={portfolio?.skills}/>
      {/* <Projects/> */}
      <Contact/>
    </div>
  );
};
export default Template;
