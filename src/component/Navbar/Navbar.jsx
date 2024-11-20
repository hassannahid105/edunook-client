import { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logOut, user, isLoading } = useAuth();
  const handleLogOut = () => {
    console.log("logout");
    logOut();
  };

  return (
    <nav className=" fixed w-full z-20 bg-main shadow-md shadow-second text-white dark:bg-gray-800">
      <div className="e-container h-24 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between text-2xl">
          <Link to="/" className="flex items-end font-bold ">
            <img className="w-auto h-6 sm:h-10" src={logo} />
            <span className="">DU NOOK</span>
          </Link>

          <div className="flex lg:hidden">
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
          } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center text-lg `}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link
              to="/"
              className="my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Home
            </Link>
            <Link
              to="/allassignments"
              className="my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Assignments
            </Link>
            <Link
              to="/allsubmitted"
              className="my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Submited Assignment
            </Link>

            <Link
              to="/login"
              className="my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Log In
            </Link>

            <Link
              to="/register"
              className="my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Register
            </Link>
          </div>
          {/* drop down  */}
          {user?.email && (
            <div className="md:justify-center md:block">
              <div className="md:relative transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300">
                {/* ============================================================================================= */}
                <div className="md:relative inline-block">
                  {/* Dropdown toggle button */}
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:relative z-10 block border-4 bg-main border-second rounded-full dark:text-white"
                  >
                    <img
                      title={user?.displayName}
                      className="flex-shrink-0 object-cover mx-1 rounded-full w-12 h-12"
                      src={user?.photoURL}
                      alt="Profile Picture"
                    />
                  </button>

                  {/* Dropdown menu */}
                  {isOpen && (
                    <div
                      className="w-full md:w-auto absolute right-0 z-20  py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"
                      onClick={() => setIsOpen(false)}
                    >
                      {/* new here */}
                      <a
                        href="#"
                        className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        <div className="mx-1">
                          <h1 className="text-sm font-semibold dark:text-gray-200">
                            {user?.displayName}
                          </h1>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {user?.email}
                          </p>
                        </div>
                      </a>

                      <hr className="border-gray-200 dark:border-gray-700 " />
                      <Link
                        to="/createassignment"
                        className="flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        <svg
                          className="w-5 h-5 mx-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Profile SVG path here */}
                        </svg>
                        <span className="mx-1">Create Assignment</span>
                      </Link>
                      <Link
                        to="/submitassignments"
                        className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        <svg
                          className="w-5 h-5 mx-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Settings SVG path here */}
                        </svg>
                        <span className="mx-1">Submitted Assignments</span>
                      </Link>
                      <Link
                        to={"/myassignment"}
                        className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        <svg
                          className="w-5 h-5 mx-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Shortcuts SVG path here */}
                        </svg>
                        <span className="mx-1">My Assingment</span>
                      </Link>
                      <hr className="border-gray-200 dark:border-gray-700" />
                      <button
                        onClick={handleLogOut}
                        className="flex w-full items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        <svg
                          className="w-5 h-5 mx-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Logout SVG path here */}
                        </svg>
                        <span className="mx-1">Logout</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
