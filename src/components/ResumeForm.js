import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResumeForm = ({ setResumeData }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    dob: "",
    nationality: "",
    linkedin: "",
    skills: "",
    languages: "",
    cgpa: "",
    objective: "",
    education: "",
    projects: "",
    experience: "",
  });

  const navigate = useNavigate();  // Hook for navigation

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setResumeData(formData); // Update the state with the form data
    navigate("/generated-resume"); // Navigate to the generated resume page
  };
  return (
    <div className="flex justify-center items-center p-10">
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-xl">
        <h2 className="text-2xl text-center text-white mb-4">Fill Your Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
              placeholder="Enter your address"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">Nationality</label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
              placeholder="Enter your nationality"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">LinkedIn</label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
              placeholder="Enter your LinkedIn URL"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">Skills</label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
              placeholder="Enter your skills"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">Languages</label>
            <input
              type="text"
              name="languages"
              value={formData.languages}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
              placeholder="Enter the languages you speak"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">CGPA</label>
            <input
              type="text"
              name="cgpa"
              value={formData.cgpa}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
              placeholder="Enter your CGPA"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">Objective</label>
            <textarea
              name="objective"
              value={formData.objective}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
              placeholder="Enter your objective"
            />
          </div>

          {/* Education Details */}
          <div className="mb-4">
            <label className="block text-white mb-2">Education</label>
            <textarea
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
              placeholder="Enter your education details"
            />
          </div>

          {/* Projects Details */}
          <div className="mb-4">
            <label className="block text-white mb-2">Projects</label>
            <textarea
              name="projects"
              value={formData.projects}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
              placeholder="Enter your projects"
            />
          </div>

          {/* Experience Details */}
          <div className="mb-4">
            <label className="block text-white mb-2">Experience</label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
              placeholder="Enter your work experience"
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-2 bg-cyan-500 text-white font-bold rounded-md hover:bg-cyan-600 mt-4"
          >
            Generate Resume
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResumeForm;
