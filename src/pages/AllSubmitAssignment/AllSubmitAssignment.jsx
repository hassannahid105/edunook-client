import axios from "axios";
import { useEffect, useState } from "react";
import SubmitedCard from "./SubmitedCard";
import Pdf from "../../component/Pdf/Pdf";
import toast from "react-hot-toast";

const AllSubmitAssignment = () => {
  const [submittedassignments, setSubmitedAssignment] = useState([]);
  const [ispdf, setPdf] = useState(false);
  const getData = async () => {
    try {
      const { data } = await axios("http://localhost:5000/allsubmited");
      const pendingAssignment = data.filter((i) => i.status === "pending");
      setSubmitedAssignment(pendingAssignment);
    } catch (err) {
      toast.err(err.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  // handle pdf
  const handlePdf = () => {
    setPdf(!ispdf);
    console.log(ispdf);
  };
  return (
    <div className="container mx-auto">
      <h2>All submited assignments</h2>
      <div className="grid grid-cols-4 gap-4 bg-red-300">
        {submittedassignments?.map((assignment) => (
          <SubmitedCard
            key={assignment._id}
            assignment={assignment}
            handlePdf={handlePdf}
            ispdf={ispdf}
            getData={getData}
          ></SubmitedCard>
        ))}
      </div>
      {ispdf && <Pdf></Pdf>}
    </div>
  );
};

export default AllSubmitAssignment;
