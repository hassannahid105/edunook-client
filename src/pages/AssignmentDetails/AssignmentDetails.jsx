import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AssignmentDetails = () => {
  const { data } = useLoaderData();

  const {
    _id,
    title,
    resources,
    user,
    description,
    marks,
    date,
    thumbnail,
    difficulty,
  } = data;
  console.log(title, resources, user);
  const { isLoading } = useAuth();
  //   the assignment was created: {date}
  //   {description}
  //   {title}

  //   {user?.userName}
  //   {user?.userEmail}
  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <>
      <div className="grid grid-cols-2 gap-20 e-container py-14">
        <figure className="w-full h-">
          <img src={thumbnail} alt="" className="w-full " />
        </figure>
        <div className="">
          <h2 className="text-4xl capitalize font-bold pb-4 ">{title}</h2>
          <p className="text-xl text-gray-400 py-4">
            Created: <span className="text-second ">{date}</span>
          </p>
          <p className="leading-8  text-gray-500 pb-8">{description}</p>
          <button className="text-second text-lg font-bold pb-8">
            Read more
          </button>
          <p className="text-4xl font-bold text-second">Marks: {marks}</p>
          <div className=" my-6 flex justify-between items-center">
            <Link to={`/submit/${_id}`} state={{ title: title }}>
              <button className="capitalize rounded-md h-[68px] hover:bg-main hover:text-second hover:transition-all hover:duration-300   mt-6 flex items-center gap-2 py-6 px-14  justify-center bg-second text-white font-bold text-sm md:text-xl tracking-wide">
                Add Assignment
                <span className="text-4xl">
                  <MdOutlineShoppingCart />
                </span>
              </button>
            </Link>
            <div className="capitalize flex gap-2 self-end items-end justify-center">
              mastery challenges:
              <span className="uppercase   text-lg font-normal  bg-second  text-white px-4 py-1 rounded-sm">
                {difficulty}
              </span>
            </div>
          </div>
          <div>
            <hr className="p-2" />
            <p className="text-xl capitalize ">Examiner: {user.userName}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignmentDetails;
