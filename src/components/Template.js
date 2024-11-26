import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Home from "./Home";
import Journey from "./Journey";
import Projects from "./Projects";
import Skills from "./Skillls";

const Template = () =>{
    return(
        <div>
            <Header/>
            <Home/>
            <About/>
            <Journey/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    )
}
export default Template;