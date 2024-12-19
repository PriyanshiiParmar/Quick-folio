import React from "react";

const GeneratedResume = ({ resumeData }) => {
  if (!resumeData) {
    return (
      <div className="flex justify-center items-center p-10">
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-xl">
          <h2 className="text-xl text-center text-white">No resume data available</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center p-10">
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-xl">
        <h2 className="text-3xl text-center text-white mb-4">{resumeData.name}'s Resume</h2>
        <div className="text-white mb-6">
          <p><strong>Address:</strong> {resumeData.address}</p>
          <p><strong>Phone:</strong> {resumeData.phone}</p>
          <p><strong>Date of Birth:</strong> {resumeData.dob}</p>
          <p><strong>Nationality:</strong> {resumeData.nationality}</p>
          <p><strong>LinkedIn:</strong> <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer">{resumeData.linkedin}</a></p>
          <p><strong>CGPA:</strong> {resumeData.cgpa}</p>
        </div>
        
        <div className="text-white mb-6">
          <h3 className="text-xl mb-2">Objective</h3>
          <p>{resumeData.objective}</p>
        </div>

        <div className="text-white mb-6">
          <h3 className="text-xl mb-2">Skills</h3>
          <p>{resumeData.skills}</p>
        </div>

        <div className="text-white mb-6">
          <h3 className="text-xl mb-2">Languages</h3>
          <p>{resumeData.languages}</p>
        </div>

        <div className="text-white mb-6">
          <h3 className="text-xl mb-2">Education</h3>
          <p>{resumeData.education}</p>
        </div>

        <div className="text-white mb-6">
          <h3 className="text-xl mb-2">Projects</h3>
          <p>{resumeData.projects}</p>
        </div>

        <div className="text-white mb-6">
          <h3 className="text-xl mb-2">Experience</h3>
          <p>{resumeData.experience}</p>
        </div>
      </div>
    </div>
  );
};

export default GeneratedResume;
