import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSkills } from "../store/skillsDetailsSlice";

const SkillsDetails = ({
  onNext,
  onPrev,
  allSkills,
  setAllSkills,
  numOfSkills,
  setNumOfSkills,
}) => {
  const [skillList, setSkillList] = useState("");
  const dispatch = useDispatch();
  //   console.log(skillList)
  const updateSkills = () => {
    setAllSkills([...allSkills, skillList]);
    setSkillList(" ");
  };
  const removeSkill = (index) => {
    setAllSkills((prevState) => {
      const updatedSkills = [...prevState];
      updatedSkills.splice(index, 1);
      return updatedSkills;
    });
  };
  const handleNext = () => {
    dispatch(addSkills(allSkills));
    onNext();
  };
  //   console.log(allSkills,"allSkills")
  return (
    <div>
      <div className="border border-purple-950 my-10  xl:w-1/3 lg:w-1/2 md:w-1/2 sm:w-3/4 xsm:w-1/2 mx-auto rounded-lg shadow-xl bg-white">
        <h1 className="font-yessava text-center p-3 text-3xl text-purple-900">
          {" "}
          Let's showcase your unique skills!
        </h1>
        {Array.from({ length: numOfSkills }).map((_, index) => {
          return (
            <div className="border">
              <div className="flex flex-col m-3 p-2 ">
                <div
                  className="flex justify-end p-2 cursor-pointer"
                  onClick={removeSkill}
                >
                  {numOfSkills > 1 ? "❌" : " "}
                </div>
                <label htmlFor="college">Skill:</label>
                <div className="flex ">
                  <input
                    className="p-2 border bg-gray-200"
                    onChange={(e) => {
                      setSkillList(e.target.value);
                    }}
                    value={skillList}
                    id="college"
                    type="text"
                  />
                  <button onClick={updateSkills}>➕</button>
                </div>
              </div>
              <div className="m-5 flex justify-start flex-wrap">
                {allSkills.length > 0 &&
                  allSkills.map((skill, index) => {
                    return (
                      <div className="flex m-2" key={index}>
                        <p className="bg-purple-200 px-3 py-2 rounded-lg">
                          {skill}{" "}
                          <button
                            onClick={() => removeSkill(index)}
                            className="cursor-pointer"
                          >
                            ❌
                          </button>
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
        <div className="flex items-center justify-around m-3">
          <button
            onClick={onPrev}
            className="bg-transparent hover:bg-purple-800 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded m-auto"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="bg-transparent hover:bg-purple-800 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded m-auto"
          >
            Save & continue
          </button>
        </div>
      </div>
    </div>
  );
};
export default SkillsDetails;
