import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./customDatePickerWidth.css";
import "react-datepicker/dist/react-datepicker.css";
const Test = ({ setStartDate, startDate }) => {
  return (
    <div style={{ width: "324px", float: "none" }}>
      {" "}
      {/* Adjust the width here */}
      <DatePicker
        placeholder="Math Homework"
        className="react-datepicker__month-container"
        name="date"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        inline
      />
    </div>
  );
};

export default Test;
