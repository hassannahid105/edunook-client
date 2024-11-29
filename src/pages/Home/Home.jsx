import React from "react";
import Slide from "../../component/Slider/Slider";
import Assignments from "./Assignments";
import Faq from "./Faq/Faq";

const Home = () => {
  return (
    <div className="">
      <Slide></Slide>
      {/* assignment */}
      <Assignments></Assignments>
      <div className="bg-second">
        <Faq></Faq>
      </div>
    </div>
  );
};

export default Home;
