import axios from "axios";
import React, { useEffect, useState } from "react";
import AssignmentTable from "./AssignmentTable";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import MarksModal from "../../component/Modal/MarksModal";

const SubmitAssignment = () => {
  const [assignments, setAssignments] = useState([]);
  const { user } = useAuth();
  console.log(user);
  const getData = async () => {
    const { data } = await axios(
      `http://localhost:5000/allsubmited?email=${user?.email}`
    );
    const pending = data.filter((assign) => assign.status === "pending");
    setAssignments(pending);
  };
  useEffect(() => {
    getData();
  }, [user, assignments]);
  //  delete assignment
  // const handleDelete = async (id) => {
  //   try {
  //     const { data } = await axios.delete(
  //       `http://localhost:5000/assignments/${id}`
  //     );
  //     if (data.deletedCount > 0) {
  //       toast.success("Delete items successfully");
  //       getData();
  //     }
  //   } catch (err) {
  //     toast.error(err.message);
  //   }
  // };
  // // !  update assignment
  // const handleUpdate = async (id) => {
  //   try {
  //     const { data } = await axios.patch(
  //       `http://localhost:5000/assignments/${id}`
  //     );
  //     if (data.deletedCount > 0) {
  //       toast.success("Delete items successfully");
  //       getData();
  //     }
  //   } catch (err) {
  //     toast.error(err.message);
  //   }
  // };
  // ! ================================worikng====================

  return (
    <section className="container px-4 mx-auto max-w-7xl">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white">
          My submitted assignment for all user
        </h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
          {assignments.length} Assignments
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Examinee Name</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                          />
                        </svg>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Examinee Email
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Marks
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <span className="">Given Marks</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {/* table data here */}
                  {assignments?.map((assignment) => (
                    <AssignmentTable
                      key={assignment._id}
                      assignment={assignment}
                      getData={getData}
                    ></AssignmentTable>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmitAssignment;
