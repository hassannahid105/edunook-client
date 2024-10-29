import { useContext, useState } from "react";

import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const Test = () => {
  const { user, googleSignIn, facebookSignIn } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(true);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => console.log(result))
      .then((error) => console.log(error.message));
  };
  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then((result) => console.log(result))
      .then((error) => console.log(error));
  };
  return (
    <div className="max-w-7xl mx-auto py-6 mb-8 text-center">
      <h2 className="uppercase text-2xl my-6 ">test file for any thing</h2>
      <button
        className="btn btn-secondary"
        onClick={() => handleGoogleSignIn()}
      >
        Google sing in
      </button>
      <br />
      {/* ============================================================================================= */}
      <div className="relative inline-block">
        {/* Dropdown toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 block text-gray-700 bg-white border border-transparent rounded-full dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none"
        >
          <img
            class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
            src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
            alt="jane avatar"
          />
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div
            className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            {/* new here */}
            <a
              href="#"
              class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <div class="mx-1">
                <h1 class="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {user?.displayName}
                </h1>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  {user?.email}
                </p>
              </div>
            </a>

            <hr class="border-gray-200 dark:border-gray-700 " />
            {/*  */}
            <a
              href="#"
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
              <span className="mx-1">view profile</span>
            </a>
            <a
              href="#"
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
              <span className="mx-1">Settings</span>
            </a>
            <a
              href="#"
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
              <span className="mx-1">Keyboard shortcuts</span>
            </a>
            <hr className="border-gray-200 dark:border-gray-700" />
            <a
              href="#"
              className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5 mx-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Company profile SVG path here */}
              </svg>
              <span className="mx-1">Company profile</span>
            </a>
            <a
              href="#"
              className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
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
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;
