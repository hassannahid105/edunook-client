import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { RiDeleteBin7Fill } from "react-icons/ri";

const AssignmentCard = ({ assignment, handleDelete, handleUpdate }) => {
  const {
    _id,
    title,
    description,
    marks,
    thumbnail,
    difficulty,
    user: cardUser,
  } = assignment;
  const { user } = useAuth();
  return (
    <div className="shadow-xl relative">
      <figure>
        <img src={thumbnail} alt="" />
      </figure>
      <div className="">
        <h2 className="text-3xl font-extrabold mx-6 mt-8">
          {title}
          <div className="absolute top-6 text-lg font-normal capitalize bg-third  text-white px-4 py-1">
            {difficulty}
          </div>
        </h2>
        <p className="text-sm  mx-4 py-1 pl-2 mb-6">
          {description.substring(0, 50)}
        </p>
        <div className="flex justify-center gap-8 mx-6 ">
          <p className="flex flex-col justify-center text-center bg-second w-4/12 py-6 mb-8 text-xl font-bold">
            Marks:
            <span className="text-4xl">{marks}</span>
          </p>
          <div>
            <button
              onClick={() => handleDelete(user?.email, cardUser, _id)}
              className="badge badge-neutral"
            >
              <RiDeleteBin7Fill />
              Delete
            </button>
            <Link to={`/update/${_id}`} className="badge badge-neutral">
              Update
            </Link>
          </div>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/details/${_id}`}>
            <div className="badge badge-outline">View Assignment</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
