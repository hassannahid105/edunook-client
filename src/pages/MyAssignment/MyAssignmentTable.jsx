import axios from "axios";
import React from "react";

const MyAssignmentTable = ({ assignment }) => {
  console.log(assignment.examinee.examineeEmail);
  const { title, examinerMarks, status, obtainMarks, feedback } = assignment;
  console.log(assignment.obtainMarks);
  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <div>
              <h2 className="font-medium text-gray-800 dark:text-white ">
                {title}
                <p>
                  <small>{assignment.examinee.examineeEmail}</small>
                </p>
              </h2>
            </div>
          </div>
        </div>
      </td>
      <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center px-6 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
          <h2 className="text-sm font-normal text-red-600">{status}</h2>
        </div>
      </td>
      <td
        className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
        title={feedback}
      >
        {feedback ? (
          <p>{feedback.substring(0, 20)}...</p>
        ) : (
          "when result is comming"
        )}
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <p className="px-3 py-1 text-xs text-blue-500 rounded-full dark:bg-gray-800 bg-blue-100/60 w-7/12 text-center">
            {examinerMarks}
          </p>
        </div>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        {obtainMarks ? (
          <p
            onClick={() => alert("add here")}
            className="px-3 py-1 text-xs text-blue-500 rounded-full dark:bg-gray-800 bg-blue-100/60 w-7/12 text-center"
          >
            {obtainMarks}
          </p>
        ) : (
          <p>Result comming soon.....</p>
        )}
      </td>
    </tr>
  );
};

export default MyAssignmentTable;
