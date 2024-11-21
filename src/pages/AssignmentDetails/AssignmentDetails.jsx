import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";

const AssignmentDetails = () => {
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
  } = useLoaderData();
  //   the assignment was created: {date}
  //   {description}
  //   {title}

  //   {user?.userName}
  //   {user?.userEmail}

  return (
    <>
      {user && (
        <div className="grid grid-cols-2 gap-20 e-container py-20">
          <figure className="w-full h-">
            <img src={thumbnail} alt="" className="w-full " />
          </figure>
          <div className="">
            <h2 className="text-4xl capitalize font-bold pb-4 ">{title}</h2>
            <p className="text-xl text-gray-400 py-6">
              Created: <span className="text-second ">{date}</span>
            </p>
            <p className="leading-8 text-lg text-gray-500 pb-10">
              {description}
            </p>
            <button className="text-second text-lg font-bold pb-10">
              Read more
            </button>
            <p className="text-4xl font-bold text-second">Marks: {marks}</p>
            <div className=" my-10 flex justify-between items-center">
              <Link to={`/submit/${_id}`} state={{ title: title }}>
                <button className="capitalize rounded-md h-[68px] hover:bg-main hover:text-second hover:transition-all hover:duration-300   mt-6 flex items-center gap-2 py-6 px-14  justify-center bg-second text-white font-bold text-sm md:text-xl tracking-wide">
                  Add To Cart
                  <span className="text-4xl">
                    <MdOutlineShoppingCart />
                  </span>
                </button>
              </Link>
              <div className="capitalize flex gap-2 self-end items-end justify-center">
                mastery challenges:
                <span className="uppercase   text-lg font-normal  bg-second  text-white px-4 py-1">
                  {difficulty}
                </span>
              </div>
            </div>
            <div>
              <p>email</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AssignmentDetails;
