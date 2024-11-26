import { user_img } from "../utils/constants";

const About = () =>{
    return(
        <div className="bg-gray-900">
            <h1 className="text-center text-4xl font-bold text-white py-3">About Me</h1>
            <div className="flex justify-center items-center">
            <img src={user_img} className="h-36 w-36 rounded-full border border-cyan-200 p-1 m-3" alt=""/>
            </div>
            <div>
                <h1 className="font-bold my-2 text-center text-white text-3xl">Frontend Developer!</h1>
                <p className="mt-2 text-white  p-5  text-center">As a front-end developer, I specialize in crafting engaging, responsive, and user-friendly web interfaces. My expertise lies in translating design concepts into functional web applications using modern technologies like HTML, CSS, JavaScript, and frameworks such as React and Angular. With a keen eye for detail and a passion for creating seamless user experiences, I ensure that each element on the page not only looks great but also functions flawlessly. My role involves collaborating with designers and back-end developers to bring dynamic web applications to life, ensuring optimal performance across various devices and browsers. Through continuous learning and staying updated with the latest industry trends, I strive to deliver high-quality, accessible, and innovative web solutions.</p>
            </div>
        </div>
    )
}
export default About;