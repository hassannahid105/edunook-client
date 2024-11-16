import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AssignmentCard = ({ assignment, handleDelete, handleUpdate }) => {
  const {
    _id,
    title,
    description,
    marks,
    date,
    thumbnail,
    difficulty,
    user: cardUser,
  } = assignment;
  const { user } = useAuth();
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
        <p>Marks: {marks}</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${_id}`}>
            <div className="badge badge-outline">View Assignment</div>
          </Link>
          <button
            onClick={() => handleDelete(user?.email, cardUser, _id)}
            className="badge badge-neutral"
          >
            delete
          </button>
          <Link to={`/update/${_id}`} className="badge badge-neutral">
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
