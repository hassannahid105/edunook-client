import axios from "axios";
import React, { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AllAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const result = await axios("http://localhost:5000/assignments");
      setAssignments(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  // Delete function
  const handleDelete = async (email, carduser, id) => {
    console.log(email, id, carduser.userEmail);
    if (email === carduser.userEmail) {
      try {
        const { data } = await axios.delete(
          `http://localhost:5000/assignments/${id}`
        );
        if (data.deletedCount > 0) {
          toast.success("Assignment deleted successfully");
          getData();
        }
      } catch (err) {
        toast.error(err.message);
      }
    } else {
      toast.error(
        "You are not authorized to delete this assignment as it was created by another user.",
        {
          duration: 5000,
        }
      );
    }
  };
  // update function
  const handleUpdate = async (id) => {
    try {
      const { data } = await axios.patch(
        `http://localhost:5000/assignments/${id}`
      );
      if (data.deletedCount > 0) {
        toast.success("Assignment updated successfully.");
        getData();
        navigate("/allassignments");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  // update by selected option
  const handleSortByDifficulty = async (difficulty) => {
    try {
      const result = await axios(
        `http://localhost:5000/assignments?difficulty=${difficulty}`
      );
      setAssignments(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="p-4 mb-4">
      <h2>All Assignments come here now</h2>
      <div className="w-full text-center flex gap-2 items-center justify-center">
        <select
          onChange={(e) => handleSortByDifficulty(e.target.value)}
          className="select select-primary w-full max-w-xs"
        >
          <option selected value="easy">
            Easy
          </option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button className="btn btn-primary" onClick={() => getData()}>
          Reset
        </button>
      </div>
      <div></div>
      <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-12">
        {assignments.map((assignment) => (
          <AssignmentCard
            key={assignment._id}
            assignment={assignment}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          ></AssignmentCard>
        ))}
      </div>
    </div>
  );
};

export default AllAssignments;
