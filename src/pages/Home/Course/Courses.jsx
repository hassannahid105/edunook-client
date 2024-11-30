import React from "react";
import Course from "./Course";
import course1 from "../../../assets/img/course1.png";
import course2 from "../../../assets/img/course2.png";

const Courses = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 py-8 md:py-16 md:mt-32 px-4 md:px-10">
      <Course image={course1}></Course>
      <Course image={course2}></Course>
    </div>
  );
};

export default Courses;
