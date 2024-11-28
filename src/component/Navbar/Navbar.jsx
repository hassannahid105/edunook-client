import { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { TfiEmail } from "react-icons/tfi";
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineSendTimeExtension } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logOut, user, isLoading } = useAuth();
  const handleLogOut = () => {
    logOut();
  };
  return (
    <nav className=" fixed w-full z-20 bg-main shadow-md shadow-[#596869] text-gray-600 md:text-white dark:bg-gray-800">
      <div className="e-container h-24 mx-auto md:flex justify-between items-center">
        <div className="flex items-center justify-between lg:text-2xl px-4 sm:w-full pt-4 md:pt-0">
          <Link to="/" className="flex items-end font-bold ">
            <img className="w-auto h-6 sm:h-10" src={logo} />
            <span className="">DU NOOK</span>
          </Link>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen
              ? "translate-x-0 opacity-100 "
              : "opacity-0 -translate-x-full"
          } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center text-lg flex-shrink-0`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link
              to="/"
              className="my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              Home
            </Link>
            <Link
              to="/allassignments"
              className="my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              Assignments
            </Link>
            <Link
              to="/allsubmitted"
              className="my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              Submited
            </Link>

            <Link
              to="/login"
              className="my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              Log In
            </Link>

            <Link
              to="/register"
              className="my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              Register
            </Link>
          </div>
          <div className="md:hidden">
            <div
              className="w-full md:w-auto absolute right-0 z-20  py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800 border-t-4 border-second"
              onClick={() => setIsOpen(false)}
            >
              {/* new here */}
              <a className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                <div className="mx-1">
                  <h1 className="text-sm font-semibold dark:text-gray-200 uppercase mb-2">
                    {user?.displayName}
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
                    <TfiEmail />
                    {user?.email}
                  </p>
                </div>
              </a>

              <hr className="border-gray-200 dark:border-gray-700 " />
              <Link
                to="/createassignment"
                className="flex items-center pl-3 px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {/* Profile SVG path here */}
                <span className="mx-1 flex items-center justify-center gap-2">
                  <IoCreateOutline /> Create Assignment
                </span>
              </Link>
              <Link
                to="/submitassignments"
                className="flex items-center p-3 text-sm pl-3 text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {/* Settings SVG path here */}

                <span className="mx-1 flex items-center justify-center gap-2">
                  <MdOutlineSendTimeExtension />
                  Submitted Assignments
                </span>
              </Link>
              <Link
                to={"/myassignment"}
                className="flex items-center  pl-3 p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="mx-1 flex items-center justify-center gap-2">
                  <CiCirclePlus />
                  My Assingment
                </span>
              </Link>
              <hr className="border-gray-200 dark:border-gray-700" />
              <button
                onClick={handleLogOut}
                className="flex w-full  pl-3 items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="mx-1 flex items-center justify-center gap-2">
                  <IoLogOutOutline />
                  Logout
                </span>
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        {/* drop down  */}
        {user?.email && (
          <div className="md:justify-center md:block">
            <div className="md:relative transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300">
              {/* ============================================================================================= */}
              <div className="md:relative inline-block">
                {/* Dropdown toggle button */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="avatar hidden md:block md:pr-4"
                >
                  {user ? (
                    <div className="hover:ring-4  duration-200 ring-second ring-offset-base-200 w-12 rounded-full ring-offset-2 transform ">
                      <img
                        title={user?.displayName}
                        src={user.photoURL}
                        alt="Profile Picture"
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {/* Dropdown menu */}
                {isOpen && (
                  <div
                    className="w-full  md:w-auto absolute right-0 z-20  py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800 border-t-4 border-second"
                    onClick={() => setIsOpen(false)}
                  >
                    {/* new here */}
                    <a className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                      <div className="mx-1">
                        <h1 className="text-sm font-semibold dark:text-gray-200 uppercase mb-2">
                          {user?.displayName}
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
                          <TfiEmail />
                          {user?.email}
                        </p>
                      </div>
                    </a>

                    <hr className="border-gray-200 dark:border-gray-700 " />
                    <Link
                      to="/createassignment"
                      className="flex items-center pl-3 px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      {/* Profile SVG path here */}
                      <span className="mx-1 flex items-center justify-center gap-2">
                        <IoCreateOutline /> Create Assignment
                      </span>
                    </Link>
                    <Link
                      to="/submitassignments"
                      className="flex items-center p-3 text-sm pl-3 text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      {/* Settings SVG path here */}

                      <span className="mx-1 flex items-center justify-center gap-2">
                        <MdOutlineSendTimeExtension />
                        Submitted Assignments
                      </span>
                    </Link>
                    <Link
                      to={"/myassignment"}
                      className="flex items-center  pl-3 p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span className="mx-1 flex items-center justify-center gap-2">
                        <CiCirclePlus />
                        My Assingment
                      </span>
                    </Link>
                    <hr className="border-gray-200 dark:border-gray-700" />
                    <button
                      onClick={handleLogOut}
                      className="flex w-full  pl-3 items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span className="mx-1 flex items-center justify-center gap-2">
                        <IoLogOutOutline />
                        Logout
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
