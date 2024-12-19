const Journey = ({ experience, educationDetails }) => {
  const educations = educationDetails;
  const experiences = experience;
  console.log(experiences);

  return (
    <div className="bg-gray-800 text-white py-10" id="journey">
      <h1 className="text-center font-bold text-4xl py-3 text-white">
        My <span className="text-cyan-400">Journey</span>
      </h1>

      {/* Education Section */}
      {educations && (
        <div className="my-10">
          <h1 className="text-2xl font-bold text-center mb-5">Education</h1>
          <div className="flex flex-wrap justify-center gap-6">
            {educations.map((education, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
              >
                <div className="bg-gray-900 border border-cyan-300 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl p-5">
                  <p>
                    <span className="font-bold text-lg mb-2">
                      {education?.school}
                    </span>{" "}
                    -{" "}
                    <span className="text-cyan-300 text-sm mb-2">
                      {education?.duration}
                    </span>
                  </p>

                  <p className="text-gray-300">CGPA: {education?.cgpa}</p>
                  <p className="text-gray-400 mt-2">{education?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Experience Section */}
      {experiences && (
        <div className="my-10">
          <h1 className="text-2xl font-bold text-center mb-5">Experience</h1>
          <div className="flex flex-wrap justify-center gap-6">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
              >
                <div className="bg-gray-900 border border-cyan-300 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl p-5">
                <p className="text-cyan-300 text-sm mb-2">
                    {experience?.duration+" years"} 
                  </p>
                  <p>
                  <span className="text-cyan-300 font-bold text-lg mb-2">
                    {experience?.company}
                  </span>
                  <span className=" text-lg mb-2">{" - "+experience?.role}</span>
                  </p>
                  <p className="text-gray-400">{experience?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Journey;
