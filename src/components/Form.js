import { useRef, useState } from "react";
import PersonalDetails from "./PersonalDetails";
import ExperienceDetails from "./ExperienceDetails";
import EducationDetails from "./EducationalDetails";
import SkillsDetails from "./SkillsDetails";
import SocialLinks from "./SocialLinks";
import { useSelector } from "react-redux";

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  //Personal Details data
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState({});

  //Experience section Data
  const [numOfExp, setNumOfExp] = useState(1);
  const [experiences, setExperiences] = useState([
    { company: "", role: "", duration: "", description: "" },
  ]);

  //Education section Data
  const [educations, setEducations] = useState([
    {
      school: " ",
      cgpa: " ",
      duration: " ",
      description: " ",
    },
  ]);
  const [numOfEd, setNumOfEd] = useState(1);

  //Skills section Data
  const [allSkills, setAllSkills] = useState([]);
  const [numOfSkills, setNumOfSkills] = useState(1);

  //social sectio Data
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('')

  return (
    <div className="bg-slate-200 min-h-screen">
      <h1 className="text-4xl font-yessava text-center p-5 text-purple-900">
        Provide the necessary information
      </h1>
      {currentStep === 1 && (
        <PersonalDetails
          onNext={handleNextStep}
          name={name}
          setRole={setRole}
          setName={setName}
          role={role}
          image={image}
          description={description}
          setImage={setImage}
          setDescription={setDescription}
        />
      )}
      {currentStep === 2 && (
        <ExperienceDetails
          onNext={handleNextStep}
          onPrev={handlePrevStep}
          numOfExp={numOfExp}
          setNumOfExp={setNumOfExp}
          experiences={experiences}
          setExperiences={setExperiences}
        />
      )}
      {currentStep === 3 && (
        <EducationDetails
          onNext={handleNextStep}
          onPrev={handlePrevStep}
          educations={educations}
          setEducations={setEducations}
          numOfEd={numOfEd}
          setNumOfEd={setNumOfEd}
        />
      )}
      {currentStep === 4 && (
        <SkillsDetails
          onNext={handleNextStep}
          onPrev={handlePrevStep}
          setAllSkills={setAllSkills}
          allSkills={allSkills}
          numOfSkills={numOfSkills}
          setNumOfSkills={setNumOfSkills}
        />
      )}
      {currentStep === 5 && (
        <SocialLinks
          onNext={handleNextStep}
          onPrev={handlePrevStep}
          linkedin={linkedin}
          setLinkedin={setLinkedin}
          setInstagram={setInstagram}
          github={github}
          setGithub={setGithub}
          twitter={twitter}
          setTwitter={setTwitter}
          instagram={instagram}
        />
      )}
    </div>
  );
};
export default Form;
