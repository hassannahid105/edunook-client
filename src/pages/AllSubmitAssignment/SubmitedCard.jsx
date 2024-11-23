import React, { useState } from "react";
import MarksModal from "../../component/Modal/MarksModal";
import Pdf from "../../component/Pdf/Pdf";
import { FaAward, FaRegUser } from "react-icons/fa";
import { PiTargetBold } from "react-icons/pi";
import { MdOutlineMailOutline, MdPictureAsPdf } from "react-icons/md";

const SubmitedCard = ({ assignment, handlePdf, getData }) => {
  const { examinee, status, title, examinerMarks, note, pdf, _id } = assignment;
  let [isOpen, setIsOpen] = useState(false);
  const handleGivenMarks = (e) => {
    setIsOpen(true);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };
  console.log(examinerMarks);
  return (
    <>
      <div className=" overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 pt-6">
        <div className="py-2">
          <div className="grid grid-cols-2">
            <div></div>
            <p className="bg-second text-white text-xl px-4 py-3 text-center uppercase  font-bold rounded-l-full">
              {status}
            </p>
          </div>
          <div className="px-6">
            <h1 className="text-xl font-bold py-4 text-gray-800 capitalize dark:text-white">
              {title}
            </h1>
            <p className="mt-1 text-sm text-gray-600  dark:text-gray-400">
              {note}
            </p>
            <hr className="my-4 border-green-500" />
            <div className="pb-4">
              <div className="text-gray-600 flex gap-2 text-lg items-center">
                <FaRegUser />
                <p className="text-sm">{examinee.examineeName}</p>
              </div>
              <div className="text-gray-600 flex gap-2 text-lg items-center">
                <PiTargetBold />
                <p className="text-sm"> Marks: {examinerMarks}</p>
              </div>
              <div className="text-gray-600 flex gap-2 text-lg items-center">
                <MdOutlineMailOutline />
                <p className="text-sm"> {examinee.examineeEmail}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-6 bg-gray-900 ">
          <div
            onClick={handlePdf}
            className=" flex gap-2 items-center px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
          >
            <span className="text-2xl">
              <MdPictureAsPdf />
            </span>

            <button>Open pdf</button>
          </div>
          <div
            onClick={handleGivenMarks}
            className=" flex gap-2 items-center px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
          >
            <span className="text-2xl">
              <FaAward />
            </span>

            <button className="">Given Marks</button>
          </div>
        </div>

        <div>
          <MarksModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleModalClose={handleModalClose}
            getData={getData}
            id={_id}
            examinee={examinee}
          ></MarksModal>
        </div>
      </div>
    </>
  );
};

export default SubmitedCard;
