import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSocialLinks } from "../store/socialLinksSlice";

const SocialLinks = ({
  onPrev,
  linkedin,
  github,
  twitter,
  instagram,
  setLinkedin,
  setGithub,
  setTwitter,
  setInstagram,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const personalDetails = useSelector((state) => state.personalDetails);
  const experienceDetails = useSelector((state) => state.experienceDetails);
  const educationDetails = useSelector((state) => state.educationDetails);
  const skills = useSelector((state) => state.skillsDetails);
  const socialLinks = useSelector((state) => state.socialLinks);
  const generatePortfolio = async () => {
    console.log(linkedin, " ", twitter, "  ", github, "   ", instagram);
    dispatch(
      addSocialLinks({
        linkedin,
        github,
        twitter,
        instagram,
      })
    );
    const allDetails = {
      personalDetails,
      experienceDetails,
      educationDetails,
      skills,
      socialLinks,
    };
    console.log(allDetails,'alldetails')
    if (
      personalDetails ||
      experienceDetails ||
      educationDetails ||
      skills ||
      socialLinks
    ) {
     await localStorage.setItem("portfolio", JSON.stringify(allDetails));
    }
    navigate("/portfolio");
  };

  return (
    <div>
      <div className="border border-purple-950 my-10  xl:w-1/3 lg:w-1/2 md:w-1/2 sm:w-3/4 xsm:w-1/2 mx-auto rounded-lg shadow-xl bg-white">
        <h1 className="font-yessava text-center p-3 text-3xl text-purple-900">
          Drop your social links
        </h1>
        <div className="flex flex-col m-3 p-2 ">
          <label htmlFor="linkedin">Linkedln:</label>
          <input
            className="p-2 border bg-gray-200"
            id="linkedin"
            value={linkedin}
            type="text"
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </div>
        <div className="flex flex-col  m-3 p-2 ">
          <label htmlFor="git">GitHub:</label>
          <input
            className="p-2 border bg-gray-200"
            id="git"
            type="text"
            value={github}
            onChange={(e) => {
              setGithub(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col  m-3 p-2 ">
          <label htmlFor="twitter">Twitter:</label>
          <input
            className="p-2 border bg-gray-200"
            id="twitter"
            type="text"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </div>
        <div className="flex flex-col  m-3 p-2 ">
          <label htmlFor="insta">Instagram:</label>
          <input
            className="p-2 border bg-gray-200"
            id="insta"
            type="text"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </div>
        <div class="flex items-center justify-center m-3">
          <button
            onClick={onPrev}
            class="bg-transparent hover:bg-purple-800 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded m-auto"
          >
            back
          </button>
          <button
            onClick={generatePortfolio}
            class="bg-transparent hover:bg-purple-800 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded m-auto"
          >
            Generate Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};
export default SocialLinks;
