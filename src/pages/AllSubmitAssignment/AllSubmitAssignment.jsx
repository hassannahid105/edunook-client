import axios from "axios";
import { useEffect, useState } from "react";
import SubmitedCard from "./SubmitedCard";

const AllSubmitAssignment = () => {
  const [submittedassignments, setSubmitedAssignment] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios("http://localhost:5000/allsubmited");
        const pendingAssignment = data.filter((i) => i.status === "pending");
        setSubmitedAssignment(pendingAssignment);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  return (
    <div className="container mx-auto">
      <h2>All submited assignments</h2>
      <div className="grid grid-cols-4 gap-4 bg-red-300">
        {submittedassignments?.map((assignment) => (
          <SubmitedCard
            key={assignment._id}
            assignment={assignment}
          ></SubmitedCard>
        ))}
      </div>
    </div>
  );
};

export default AllSubmitAssignment;
