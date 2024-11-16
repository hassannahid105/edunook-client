import axios from "axios";
import React from "react";

const SubmittedTable = ({ assignment }) => {
  const { _id, title, marks, date, examinerEmail, thumbnail, status, pdf } =
    assignment;
  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <input
            type="checkbox"
            className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
          />

          <div className="flex items-center gap-x-2">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src={thumbnail}
              alt=""
            />
            <div>
              <h2 className="font-medium text-gray-800 dark:text-white ">
                {title}
              </h2>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                {date}
              </p>
            </div>
          </div>
        </div>
      </td>
      <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center px-6 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
          <h2 className="text-sm font-normal text-red-600">{status}</h2>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {examinerEmail}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {pdf.substring(0, 20)}...
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <p
            onClick={() => alert("add here")}
            className="px-3 py-1 text-xs text-blue-500 rounded-full dark:bg-gray-800 bg-blue-100/60"
          >
            Given Marks
          </p>
        </div>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-6">
          <button className="btn">Submit Assignment</button>
        </div>
      </td>
    </tr>
  );
};

export default SubmittedTable;
