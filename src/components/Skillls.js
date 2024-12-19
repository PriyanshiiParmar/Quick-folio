import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaQuestionCircle, FaLightbulb } from 'react-icons/fa';  // Importing icons
import { useEffect, useState } from 'react';

const Skills = ({ skills }) => {
  const [visibleSkills, setVisibleSkills] = useState([]);

  // Simulate the process of skills appearing with an animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisibleSkills(skills);
    }, 200);
    return () => clearTimeout(timeout);
  }, [skills]);

  // Function to return icon based on skill name
  const getSkillIcon = (skill) => {
    switch (skill.toLowerCase()) {
      case 'react':
        return <FaReact size={40} className="text-cyan-400" />;
      case 'nodejs':
        return <FaNodeJs size={40} className="text-green-400" />;
      case 'html':
        return <FaHtml5 size={40} className="text-orange-500" />;
      case 'css':
        return <FaCss3Alt size={40} className="text-blue-400" />;
      case 'javascript':
        return <FaJsSquare size={40} className="text-yellow-500" />;
      default:
        // Default icon for unknown skills
        return <FaLightbulb size={40} className="text-gray-500" />;
    }
  };

  return (
    <div className="bg-gray-900 text-white py-5" id="skills">
      <h1 className="text-4xl font-bold text-center p-3">My <span className="text-cyan-400">Skills</span></h1>
      <div className="flex flex-wrap justify-center gap-8 p-4">
        {visibleSkills && visibleSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 text-center border-4 border-cyan-500 p-5 w-40 h-48 flex flex-col items-center justify-center rounded-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-cyan-600"
          >
            {/* Icon for the skill */}
            <div className="mb-3">
              {getSkillIcon(skill)}
            </div>
            {/* Skill name */}
            <h3 className="text-xl font-semibold">{skill}</h3>
            {/* Proficiency bar (example) */}
            <div className="mt-3 w-full h-1 bg-gray-300">
              <div className="w-4/5 h-full bg-cyan-500 rounded-md" /> {/* This represents proficiency */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
