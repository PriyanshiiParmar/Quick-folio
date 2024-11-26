const Projects = () => {
    return (
      <div className="bg-gray-950 text-white">
        <h1 className="text-center text-4xl font-bold py-5">Projects</h1>
        <div className="flex justify-evenly flex-wrap">
          {[
            {
              title: "Food Delivery App",
              description:
                "Introduction Traffic Management Systems (TMS) use a variety of technologies. to manage traffic flows and the effects of congestion on the roading network.",
              imgSrc:
                "https://varindia.com/storage/news/uploads/2018/02/6459ee5ef2f6d.jpg",
            },
            {
              title: "Traffic Management System",
              description:
                "Introduction Traffic Management Systems (TMS) use a variety of technologies. to manage traffic flows and the effects of congestion on the roading network.",
              imgSrc:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv3ieEO4jvZWoJw1IHTNN9xnTXR3p-dzhvcRAsmU6oXVRPHwZ-8gAPJwPBLUnDGR5xvAY&usqp=CAU",
            },
            {
              title: "Fighting Game",
              description:
                "Introduction Traffic Management Systems (TMS) use a variety of technologies. to manage traffic flows and the effects of congestion on the roading network.",
              imgSrc:
                "https://media.wired.com/photos/627da1085d49787abdf713b4/master/pass/Pakistani-Gamers-Want-a-Seat-at-the-Table-Culture-shutterstock_1949862841.jpg",
            },
          ].map((project, index) => (
            <div key={index} className="max-w-xs mx-2 my-4">
              <img
                className="w-full h-52 bg-gray-900 p-3 m-2 cursor-pointer"
                src={project.imgSrc}
                alt=""
              />
              <div className="bg-gray-900 rounded-md p-2 mx-3">
                <p className="font-bold">{project.title}</p>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;
  