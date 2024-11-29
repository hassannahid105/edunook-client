import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../component/hooks/useaxios";
import AssignmentCard from "../AllAssignments/AssignmentCard";
import { FaChevronRight } from "react-icons/fa";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const { data } = await axiosInstance(`/assignments`);
      const cutoff = data.slice(0, 3);
      setAssignments(cutoff);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  // Delete function

  return (
    <div className="p-4 mb-4">
      <div className="e-container py-6 md:py-10 ">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-600 md:mb-4">
            Assignments
          </h2>
          <p>Browse all available assignments in one place.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 max-w-7xl mx-auto md:mt-12">
        {assignments.map((assignment) => (
          <AssignmentCard
            key={assignment._id}
            assignment={assignment}
          ></AssignmentCard>
        ))}
      </div>
      <div className="md:flex items-center justify-center w-full">
        <Link to="/allassignments">
          <button className="w-full uppercase h-[68px] hover:text-main md:bg-second  hover:transition-all hover:duration-300 mt-6 flex items-center gap-2 py-6 px-6  justify-center text-black font-bold text-sm md:text-xl tracking-wide">
            Browse Assignment
            <FaChevronRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Assignments;
