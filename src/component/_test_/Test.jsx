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
      <div className="card glass w-96">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
