import React from "react";

const SubmitedCard = ({ assignment }) => {
  const { examinerEmail, status, title, marks, note, pdf, id } = assignment;
  return (
    <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
          {title}
        </h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{note}</p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 bg-green-300 py-1 px-3 max-w-max rounded-full">
          {status}
        </p>
      </div>

      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">Marks: 100</h1>
        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
          Given Marks
        </button>
      </div>
    </div>
  );
};

export default SubmitedCard;
