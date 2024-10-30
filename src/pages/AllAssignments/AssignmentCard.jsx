import React from "react";

const AssignmentCard = ({ assignment }) => {
  const { title, description, marks, date, thumbnail, difficulty } = assignment;
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img src={thumbnail} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{difficulty}</div>
        </h2>
        <p>{description.substring(0, 50)}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">View Assignment</div>
          <div className="badge badge-outline">Update</div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
