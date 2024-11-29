import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import image from "../../assets/images/slider/slide4.jpg";
import toast from "react-hot-toast";
import axiosInstance from "../../component/hooks/useaxios";

const AssignmentSubmit = () => {
  const { user, isLoading } = useAuth();
  const [examiner, setExaminer] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { title } = location.state || {};
  if (isLoading) {
    return <p>Loading.....</p>;
  }
  console.log();
  // !
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosInstance(`/assignments/details/${id}`);
      setExaminer(data);
    };
    getData();
  }, []);
  // !

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (examiner?.user?.userEmail === user.email) {
      return toast.error(" You cannot submit an assignment that you created.");
    }
    const form = e.target;
    const pdf = form.pdf.value;
    const note = form.note.value;
    const submitObj = {
      pdf,
      note,
      title: title,
      assignmentId: id,
      examiner: examiner.user.userEmail,
      examinerMarks: examiner.marks,
      status: "pending",
      examinee: {
        examineeEmail: user?.email,
        examineeName: user?.displayName,
      },
    };
    try {
      const { data } = await axiosInstance.post(
        `/submittedassignments`,
        submitObj
      );
      if (data.status === "unauthorized") {
        return toast.error(
          "You have already submitted this assignment. Duplicate submissions are not allowed.",
          { duration: 6000 }
        );
      }
      // navigate("/myassignment");
      toast.success("Assignment added successful");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="bg-white dark:bg-gray-900 mt-6 m-4 e-container py-10">
      <div className="flex justify-center ">
        <div
          className="hidden bg-cover bg-right-top bg bg- lg:block lg:w-2/5"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
              Assignment Submission
            </h1>

            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Submit your assignments effortlessly with our user-friendly form.
              Upload files, add details, and ensure a seamless submission
              process.
            </p>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-6 mt-8"
            >
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  PDF LINK
                </label>
                <input
                  type="text"
                  placeholder="SHARE YOUR ASSIGNMENT preventDefault"
                  name="pdf"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  QUICK NOTE
                </label>
                <textarea
                  placeholder="Write your assignment QUICK Note here..."
                  name="note"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                ></textarea>
              </div>

              <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span>Submit Assignment </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 rtl:-scale-x-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssignmentSubmit;
