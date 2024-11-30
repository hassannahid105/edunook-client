import { useState } from "react";
import MarksModal from "../../component/Modal/MarksModal";

const AssignmentTable = ({ assignment, getData }) => {
  const { _id, title, date, examinee, examinerMarks, status } = assignment;
  let [isOpen, setIsOpen] = useState(false);
  const handleMarks = (e) => {
    setIsOpen(true);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };
  console.log(examinee?.examineeName);
  return (
    <>
      <tr>
        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <div className="inline-flex items-center gap-x-3">
            <div className="flex items-center gap-x-2">
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
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {examinee?.examineeName}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          <p className="px-3 py-1 text-xs text-black rounded-full dark:bg-gray-800 bg-orange-400/60 ">
            {examinerMarks}
          </p>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <div className="flex items-center gap-x-2">
            <p className="px-3 py-1 text-xs text-blue-500 rounded-full dark:bg-gray-800 bg-blue-100/60">
              {examinee?.examineeEmail}
            </p>
          </div>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <div className="flex items-center gap-x-6 ">
            <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
              <div
                onClick={handleMarks}
                className="flex gap-1 items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
                Marks
              </div>
            </button>
          </div>
        </td>
      </tr>

      {/* TODO: mark modal */}
      <div>
        <MarksModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleModalClose={handleModalClose}
          // getData={getData}
          id={_id}
          examinee={examinee}
        ></MarksModal>
      </div>
    </>
  );
};

export default AssignmentTable;
