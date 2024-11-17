import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AssignmentDetails = () => {
  const {
    _id,
    title,
    resources,
    user,
    description,
    marks,
    date,
    thumbnail,
    difficulty,
  } = useLoaderData();

  return (
    <>
      {user && (
        <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 m-10">
          <img
            className="object-cover w-full h-64"
            src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="Article"
          />

          <div className="p-6">
            <div>
              <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                {date}
              </span>
              <a
                href="#"
                className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                tabIndex="0"
                role="link"
              >
                {title}
              </a>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </div>

            <div className="mt-4">
              <div className="flex items-center">
                <div className="flex items-center">
                  <img
                    className="object-cover h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                    alt="Avatar"
                  />
                  <a
                    href="#"
                    className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                    tabIndex="0"
                    role="link"
                  >
                    {user?.userName}
                    {user?.userEmail}
                  </a>
                </div>

                <Link
                  className="ml-auto"
                  to={`/submit/${_id}`}
                  state={{ title: title }}
                >
                  <button className="btn btn-primary">Take Assignment</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AssignmentDetails;
