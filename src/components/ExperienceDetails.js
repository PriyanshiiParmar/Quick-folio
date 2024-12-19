import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExperience } from "../store/experienceDetailsSlice";

const ExperienceDetails = ({ onNext, onPrev, numOfExp, setNumOfExp, experiences, setExperiences }) => {
 
  const dispatch = useDispatch();
  // Function to add more sections
  const addExp = () => {
    setNumOfExp(numOfExp + 1);
    setExperiences((prev) => [
      ...prev,
      { company: "", role: "", duration: "", description: "" }
    ]);
  };

  // Function to handle input changes
  const handleInputChange = (index, field, value) => {
    setExperiences((prev) => {
      const updatedExperiences = [...prev];
      updatedExperiences[index] = {
        ...updatedExperiences[index],
        [field]: value,
      };
      return updatedExperiences;
    });
  };

  // Function to handle save
  const handleSave = () => {
    dispatch(addExperience(experiences));
    onNext();
  };

  return (
    <div>
      <div className="border border-purple-950 my-10 xl:w-1/3 lg:w-1/2 md:w-1/2 sm:w-3/4 xsm:w-1/2 mx-auto rounded-lg shadow-xl bg-white">
        <h1 className="font-yessava text-center p-3 text-3xl text-purple-900">
          Let's move forward and add your experience...
        </h1>
        {experiences.map((exp, index) => (
          <div key={index} className="border">
            <div className="flex justify-end p-2 cursor-pointer" onClick={() => {
              if (numOfExp > 1) {
                setNumOfExp(numOfExp - 1);
                setExperiences((prev) => prev.slice(0, -1));
              }
            }}>
              {numOfExp > 1 ? "❌" : " "}
            </div>
            <div className="flex flex-col m-3 p-2">
              <label htmlFor={`company-${index}`}>Company / organization</label>
              <input
                className="p-2 border bg-gray-200"
                id={`company-${index}`}
                type="text"
                value={exp.company}
                onChange={(e) => handleInputChange(index, "company", e.target.value)}
              />
            </div>
            <div className="flex flex-col m-3 p-2">
              <label htmlFor={`role-${index}`}>Role:</label>
              <input
                className="p-2 border bg-gray-200"
                id={`role-${index}`}
                type="text"
                value={exp.role}
                onChange={(e) => handleInputChange(index, "role", e.target.value)}
              />
            </div>
            <div className="flex flex-col m-3 p-2">
              <label htmlFor={`duration-${index}`}>Duration:</label>
              <input
                className="p-2 border bg-gray-200"
                id={`duration-${index}`}
                type="text"
                value={exp.duration}
                onChange={(e) => handleInputChange(index, "duration", e.target.value)}
              />
            </div>
            <div className="flex flex-col m-3 p-2">
              <label htmlFor={`description-${index}`}>Brief description:</label>
              <textarea
                className="p-2 border bg-gray-200"
                id={`description-${index}`}
                value={exp.description}
                onChange={(e) => handleInputChange(index, "description", e.target.value)}
              ></textarea>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-around m-3">
          <button
            onClick={onPrev}
            className="bg-transparent hover:bg-purple-800 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded m-auto"
          >
            Prev
          </button>
          <button
            onClick={addExp}
            className="bg-transparent hover:bg-purple-800 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded m-auto"
          >
            Add more
          </button>
          <button
            onClick={handleSave}
            className="bg-transparent hover:bg-purple-800 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded m-auto"
          >
            Save & continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetails;
