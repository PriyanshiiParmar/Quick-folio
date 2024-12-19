import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../store/personalDetailsSlice";

const PersonalDetails = ({
  onNext,
  name,
  image,
  setImage,
  setName,
  role,
  setRole,
  description,
  setDescription,
}) => {
  // const handleFileUpload = (event) => {
  //   setImage(event.target.files[0]);
  // };
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(
      addData({
        name: name,
        role: role,
        description: description,
        profilePic: image,
      })
    );
    onNext();
    console.log(image)
  };
  return (
    <div>
      <div className="border border-purple-950 my-10 xl:w-1/3 lg:w-1/2 md:w-1/2 sm:w-3/4 xsm:w-1/2 mx-auto rounded-lg shadow-xl bg-white">
        <h1 className="font-yessava text-center p-3 text-3xl text-purple-900">
          Let's start with your basic details.
        </h1>
        <div className="flex flex-col m-3 p-2 ">
          <label htmlFor="name">Name:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border bg-gray-200"
            id="name"
            type="text"
          />
        </div>
        <div className="flex flex-col  m-3 p-2 ">
          <label htmlFor="role">Role:</label>
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="p-2 border bg-gray-200"
            id="role"
            type="text"
          />
        </div>
        <div className="flex flex-col  m-3 p-2 ">
          <label htmlFor="description">Brief description:</label>
          <textarea
            className="p-2 border bg-gray-200"
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="flex flex-col  m-3 p-2 ">
          <label htmlFor="image">Upload image:</label>
          {/* <input
            onChange={handleFileUpload}
            
            id="image"
            type="file"
          /> */}
          <input
            className=" p-2 border bg-gray-200"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              const imageURL = URL.createObjectURL(file);
              localStorage.setItem("image url", )
              console.log("File:", file);
              if (file) {
                setImage(imageURL);
              }

            }}
          />
          <img src={image} alt=""/>
        </div>
        <div className="flex items-center justify-center m-3">
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
export default PersonalDetails;
