import React from "react";
import Slide from "../../component/Slider/Slider";
import Assignments from "./Assignments";
import Faq from "./Faq/Faq";
import JoinUs from "./JoinUs/JoinUs";
import Courses from "./Course/Courses";

const Home = () => {
  return (
    <div className="">
      <Slide></Slide>
      <Courses></Courses>
      {/* assignment */}
      <Assignments></Assignments>
      <div className="bg-second/30">
        <Faq></Faq>
      </div>
      <JoinUs></JoinUs>
    </div>
  );
};

export default Home;
