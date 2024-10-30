import axios from "axios";
import React, { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";

const AllAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios("http://localhost:5000/assignments");
        setAssignments(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  });
  return (
    <div>
      <h2>All Assignments come here</h2>
      <div className="grid grid-cols-4 gap-6 max-w-7xl mx-auto mt-12">
        {assignments.map((assignment) => (
          <AssignmentCard
            key={assignment._id}
            assignment={assignment}
          ></AssignmentCard>
        ))}
      </div>
    </div>
  );
};

export default AllAssignments;
