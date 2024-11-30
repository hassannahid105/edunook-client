import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../../src/assets/img/create.jpg";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import axiosInstance from "../../component/hooks/useaxios";
import Calendar from "../../component/DatePicker/Calendar";

const CreateAssignment = () => {
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleCreateAssignment = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const marks = form.marks.value;
    const date = startDate;
    const thumbnail = form.thumbnail.value;
    const difficulty = form.difficulty.value;
    const resources = form.resources.value;
    const time = form.time.value;
    const description = form.description.value;
    const assignmentObj = {
      title,
      marks,
      date,
      thumbnail,
      difficulty,
      resources,
      time,
      description,
      user: { userEmail: user?.email, userName: user?.displayName },
    };
    console.table(assignmentObj);
    try {
      const { data } = await axiosInstance.post(`/assignment`, assignmentObj);
      if (data.acknowledged) {
        navigate("/allassignments");
        toast.success("Create Assignment successfully", {
          duration: 6000,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="bg-white dark:bg-gray-900 md:mt-6 px-6 py-6 md:px-10 md:py-32">
      <div className="md:flex justify-center ">
        <div
          className="hidden bg-cover lg:block lg:w-2/5"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        <div className="md:flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
              Get your free account now.
            </h1>

            <p className="mt-4 text-gray-500 dark:text-gray-400 mb-10">
              Let’s get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>

            <form onSubmit={handleCreateAssignment} className=" ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Math Homework"
                    name="title"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Marks
                  </label>
                  <input
                    type="number"
                    placeholder="100 Marks"
                    name="marks"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Thumbnail
                  </label>
                  <input
                    type="text"
                    placeholder="your photo URL"
                    name="thumbnail"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="assignmentDifficulty"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >
                    Choose Assignment Difficulty:
                  </label>

                  <select
                    id="assignmentDifficulty"
                    name="difficulty"
                    defaultValue="easy"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Resources
                  </label>
                  <input
                    type="text"
                    name="resources"
                    placeholder="Resources or materials are needed"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Time Limit
                  </label>
                  <input
                    type="text"
                    name="time"
                    placeholder="An optional field for timed assignments"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <Calendar
                  setStartDate={setStartDate}
                  startDate={startDate}
                ></Calendar>

                <div className="md:col-span-2">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Description
                  </label>
                  <textarea
                    placeholder="Write your assignment description here..."
                    name="description"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  ></textarea>
                </div>

                <button className="md:col-span-2 flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  <span>Create Assignment </span>

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
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAssignment;
