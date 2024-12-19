import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phNo: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
     .send('service_ht8kmxh', 'template_mq3wjbe', formData, 'I1PtsVtk_bcaC59MD')
      .then((response) => {
        alert("Email sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((error) => {
        alert("Failed to send email. Please try again later.");
        console.log("FAILED...", error);
      });

    setFormData({
      name: "",
      email: "",
      phNo: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-800 text-white text-center p-3" id="contact">
      <h1 className="text-4xl my-2">
        Contact <span className="text-cyan-400">Me!</span>
      </h1>
      <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
        <input
          className="bg-gray-900 p-3 border-2 border-cyan-300 rounded-md w-1/3 mx-auto my-3"
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />
        <input
          className="bg-gray-900 p-3 border-2 border-cyan-300 rounded-md w-1/3 mx-auto my-3"
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
        />
        <input
          className="bg-gray-900 p-3 border-2 border-cyan-300 rounded-md w-1/3 mx-auto my-3"
          type="number"
          name="phNo"
          placeholder="Mobile Number"
          onChange={handleChange}
          required
        />
        <input
          className="bg-gray-900 p-3 border-2 border-cyan-300 rounded-md w-1/3 mx-auto my-3"
          type="text"
          name="subject"
          placeholder="Email Subject"
        />
        <textarea
          rows="4"
          className="bg-gray-900 p-3 border-2 border-cyan-300 rounded-md w-1/3 mx-auto my-3"
          name="message"
          placeholder="Your Message"
          onChange={handleChange}
          required
        ></textarea>

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
