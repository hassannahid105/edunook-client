import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";
import join from "../../../assets/img/join.png";
const JoinUs = () => {
  return (
    <div className="e-container grid grid-cols-1 md:grid-cols-2 py-10 md:py-32 p-6 md:p-0">
      <div>
        <img src={join} alt="" />
      </div>
      <div>
        <p className="flex gap-2 items-center text-main text-xl font-medium mb-4">
          <FcIdea size={40} className="" />
          Joint Our Team
        </p>
        <h3 className="text-2xl md:text-5xl text-black font-extrabold leading-[60px] mb-8">
          Join Us Become an Instructor & Inspire Learning
        </h3>
        <p className="text-lg text-gray-700/90 mb-8">
          As an instructor with us, you'll have the opportunity to inspire,
          guide, and mentor our diverse community of students. Whether you're an
          industry expert, an academic guru, or an experienced professional
        </p>
        <button className="md:w-6/12 uppercase h-[68px] hover:text-main  hover:transition-all hover:duration-300   mt-6 flex items-center gap-2 py-6 px-6 justify-center text-black font-bold text-sm md:text-lg tracking-wide bg-yellow-400">
          Browse Assignment
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default JoinUs;
