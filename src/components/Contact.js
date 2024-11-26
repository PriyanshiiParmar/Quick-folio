const Contact = () => {
    return (
      <div className="bg-gray-900 text-white text-center p-3">
        <h1 className="text-4xl my-2">Contact <span className="text-cyan-400">Me!</span></h1>
        <form className="flex flex-col justify-center">
          <input className="bg-gray-900 p-3 border-2 border-cyan-300 rounded-md w-1/3 mx-auto my-3" type="text" placeholder="Full Name"/>
          <input className="bg-gray-900 p-3 border-2 border-cyan-300 rounded-md w-1/3 mx-auto my-3" type="email" placeholder="Email Address"/>
          <input className="bg-gray-900 p-3 border-2 border-cyan-300 rounded-md w-1/3 mx-auto my-3" type="number" placeholder="Mobile Number"/>
          <input className="bg-gray-900 p-3 border-2 border-cyan-300 rounded-md w-1/3 mx-auto my-3" type="text" placeholder="Email Subject"/>
          <textarea rows="4" className="bg-gray-900 p-3 border-2 border-cyan-300 rounded-md w-1/3 mx-auto my-3" placeholder="Your Message"></textarea>
          
          <button className="relative inline-flex items-center justify-center p-0.5 mt-4 mx-auto overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Submit
            </span>
          </button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  