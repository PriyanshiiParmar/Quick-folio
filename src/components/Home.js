import { user_img } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"; // Import the LinkedIn icon
const Home = () => {
  return (
    <div>
      <div className="bg-gray-950 pt-10 text-white flex justify-around">
        <div>
          <p className="font-bold text-3xl my-2">Hello, it's </p>
          <p className="font-bold text-4xl">Ayush Mehra</p>
          <h2 className="font-bold text-3xl my-2">
            And I'm a <span className="text-cyan-300">frontend developer</span>
          </h2>
          <p className="w-1/2 my-2">
            Once your portfolio is generated, you can see it live! Review how it
            looks, and make any adjustments to ensure it aligns with your style
            and goals.
          </p>
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="text-white cursor-pointer hover:text-blue-500 mr-5 text-lg border border-teal-100 p-2 rounded-full hover:bg-white hover:animate-pulse"
          />
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="text-white cursor-pointer hover:text-gray-600 mr-5 text-lg border border-teal-100 p-2 rounded-full hover:bg-white hover:animate-pulse"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            size="2x"
            className="text-white cursor-pointer hover:text-cyan-300 mr-5 text-lg border border-teal-100 p-2 rounded-full hover:bg-white hover:animate-pulse"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className="text-white cursor-pointer mr-5 text-lg border border-teal-100 p-2 rounded-full hover:bg-white hover:animate-pulse hover:text-red-500 hover:shadow-red-500"
          />
          <button className="block bg-cyan-400 py-2 rounded-md my-2 px-4 hover:bg-cyan-500 hover:shadow-sm hover:shadow-cyan-400 font-bold">Resume</button>
        </div>
        <div>
          <img
            className="h-56 w-56 rounded-full mx-10"
            src={user_img}
            alt="user"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
