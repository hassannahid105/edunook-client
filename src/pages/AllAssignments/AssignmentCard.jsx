import React from "react";

const AssignmentCard = ({ assignment }) => {
  const { title, description, marks, date, thumbnail, difficulty } = assignment;
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{difficulty}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">View Assignment</div>
          <div className="badge badge-outline">Update</div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
