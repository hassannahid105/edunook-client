import React from "react";
import { FaBookOpen, FaChevronRight } from "react-icons/fa";

const Course = ({ image }) => {
  return (
    <div className="  bg-second px-10 py-10 grid grid-cols-1 md:grid-cols-6 rounded-lg">
      <div className="md:col-span-4">
        <p className="flex gap-2 items-center text-white text-xl font-medium mb-4">
          <FaBookOpen size={40} className="text-yellow-400" />
          New Course
        </p>
        <h3 className=" text-xl md:text-3xl  font-extrabold leading-relaxed mb-8 text-white">
          Enroll Now and Save Big on Quality Learning
        </h3>

        <button className="md:w-6/12 uppercase h-[68px] hover:text-main  hover:transition-all hover:duration-300   mt-6 flex items-center gap-2 py-6 px-6 justify-center text-black font-bold text-sm md:text-lg tracking-wide bg-yellow-400">
          View Course
          <FaChevronRight />
        </button>
      </div>
      <div className="w-full md:col-span-2 relative -top-20 h-[160px] hidden md:block">
        <img className="w-full" src={image} alt="" />
      </div>
    </div>
  );
};

export default Course;
