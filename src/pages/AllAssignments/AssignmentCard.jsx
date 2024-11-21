import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { GrDocumentUpdate } from "react-icons/gr";

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
    <div className="shadow-lg relative bg-gray-100">
      <figure className="h-[250px]">
        <img src={thumbnail} alt="" />
      </figure>
      <div className="">
        <h2 className="text-2xl font-extrabold mx-6 pt-8">
          {title}
          <div className="absolute top-6 text-lg font-normal capitalize bg-main  text-white px-4 py-1">
            {difficulty}
          </div>
        </h2>
        <p className="text-sm  mx-4 py-1 pl-2 pb-4">
          {description.substring(0, 50)}...
        </p>
        <div className="flex  gap-10 mx-6 uppercase">
          <p className="flex flex-col justify-center text-center bg-[#e8ede6] w-4/12  text-lg font-bold gap-1">
            Marks: {marks}
          </p>
          <div className="flex flex-col gap-4 ">
            <button
              onClick={() => handleDelete(user?.email, cardUser, _id)}
              className="flex justify-start items-center  text-xl"
            >
              <RiDeleteBin7Fill />
              <span className="text-xl">Delete</span>
            </button>
            <Link to={`/update/${_id}`} className="flex text-xl">
              <GrDocumentUpdate />
              <span className="text-xl">Update</span>
            </Link>
          </div>
        </div>
        <div className="text-xl pb-6 hover:text-main transition-all duration-150 hover:border-main">
          <Link to={`/details/${_id}`}>
            <div className=" mx-6 text-center border-2 mt-4 py-4 border-[#b2eebfd8]  font-extrabold  text-xl uppercase">
              View Assignment
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
