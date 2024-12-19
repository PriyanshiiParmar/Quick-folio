import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEducation } from "../store/educationDetailsSlice";
const EducationDetails = ({ onNext, onPrev, educations, setEducations, numOfEd, setNumOfEd }) => {
 
  const dispatch = useDispatch();

  const addEducations = () => {
    setNumOfEd(numOfEd + 1);
    setEducations((prev) => [
      ...prev,
      { school: " ", cgpa: " ", duration: " ", description: " " },
    ]);
  };
  const educationData = useSelector((state) => state.educationDetails);
  const handleInputChange = (index, field, value) => {
    setEducations((prev) => {
      const updatedEducations = [...prev];
      updatedEducations[index] = {
        ...updatedEducations[index],
        [field]: value,
      };
      return updatedEducations;
    });
  };

  const handleSave = () => {
    dispatch(addEducation(educations));
    onNext();
  };

  return (
    <div>
      <div className="border border-purple-950 my-10 xl:w-1/3 lg:w-1/2 md:w-1/2 sm:w-3/4 xsm:w-1/2 mx-auto rounded-lg shadow-xl bg-white">
        <h1 className="font-yessava text-center p-3 text-3xl text-purple-900">
          Let's move forward and add your education...
        </h1>
        {educations.map((education, index) => (
          <div key={index} className="border">
            <div className="flex flex-col m-3 p-2">
              <div
                className="flex justify-end p-2 cursor-pointer"
                onClick={() => {
                  if (numOfEd > 1) {
                    setNumOfEd(numOfEd - 1);
                    setEducations((prev) => prev.slice(0, -1));
                  }
                }}
              >
                {numOfEd > 1 ? "❌" : " "}
              </div>
              <label htmlFor={`school-${index}`}>College/School:</label>
              <input
                className="p-2 border bg-gray-200"
                id={`school-${index}`}
                type="text"
                value={education.school}
                onChange={(e) =>
                  handleInputChange(index, "school", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col m-3 p-2">
              <label htmlFor={`cgpa-${index}`}>CGPA:</label>
              <input
                className="p-2 border bg-gray-200"
                id={`cgpa-${index}`}
                type="text"
                value={education.cgpa}
                onChange={(e) =>
                  handleInputChange(index, "cgpa", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col m-3 p-2">
              <label htmlFor={`duration-${index}`}>Duration:</label>
              <input
                className="p-2 border bg-gray-200"
                id={`duration-${index}`}
                type="text"
                value={education.duration}
                onChange={(e) =>
                  handleInputChange(index, "duration", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col m-3 p-2">
              <label htmlFor={`description-${index}`}>Brief description:</label>
              <textarea
                className="p-2 border bg-gray-200"
                id={`description-${index}`}
                value={education.description}
                onChange={(e) =>
                  handleInputChange(index, "description", e.target.value)
                }
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
            onClick={addEducations}
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

export default EducationDetails;
