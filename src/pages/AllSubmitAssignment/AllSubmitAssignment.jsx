import { useEffect, useState } from "react";
import SubmitedCard from "./SubmitedCard";
import Pdf from "../../component/Pdf/Pdf";
import toast from "react-hot-toast";
import axiosInstance from "../../component/hooks/useaxios";

const AllSubmitAssignment = () => {
  const [submittedassignments, setSubmitedAssignment] = useState([]);
  const [ispdf, setPdf] = useState(false);

  const getData = async () => {
    try {
      const { data } = await axiosInstance(`/allsubmited`);
      const pendingAssignment = data.filter((i) => i.status === "pending");
      setSubmitedAssignment(pendingAssignment);
    } catch (err) {
      toast.err(err.message);
    }
  };
  console.log(submittedassignments);
  useEffect(() => {
    getData();
  }, []);
  console.log(submittedassignments);
  // handle pdf
  const handlePdf = () => {
    setPdf(!ispdf);
    console.log(ispdf);
  };
  return (
    <div className="container mx-auto py-20 bg-gray-100">
      <div className="e-container">
        <div className="text-center  mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-600 mb-4">
            Submited All Assignments
          </h2>
          <p className="mb-4">Browse all available assignments in one place.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 p-4">
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
      </div>
      {ispdf && <Pdf></Pdf>}
    </div>
  );
};

export default AllSubmitAssignment;
