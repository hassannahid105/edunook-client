import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialSingIn from "../../component/SocialSingIn/SocialSingIn";
import logo from "../../assets/logo.png";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import toast from "react-hot-toast";

const LogIn = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    //!  create user with email and password
    try {
      const result = await createUser(email, password);
      if (result?.user) {
        try {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
          });
          toast.success("create user successfully");
        } catch (err) {
          console.log(err);
        }
      }
      navigate("/");
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <header className={`bg-gray-900`}>
      <div className="container px-20 mx-auto">
        <nav className="flex flex-col py-6 sm:flex-row sm:justify-between sm:items-center">
          <Link to="/">
            <img className="w-auto h-6 sm:h-7 lg:h-12" src={logo} alt="" />
          </Link>

          <div className="flex items-center mt-2 -mx-2 sm:mt-0">
            <Link
              to="/login"
              className="px-3 py-1 text-sm font-semibold text-white transition-colors duration-300 transform rounded-md border-2 hover:bg-gray-700"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="px-3 py-1 text-sm font-semibold text-white transition-colors duration-300 transform rounded-md hover:bg-gray-700"
            >
              Sign Up
            </Link>
          </div>
        </nav>

        <div className="flex flex-col items-center py-6 lg:h-[36rem] lg:flex-row">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-100 lg:text-4xl">
              Access
            </h2>

            <h3 className="mt-2 text-2xl font-semibold text-gray-100">
              Your <span className="text-blue-400">Account</span>
            </h3>

            <p className="mt-4 text-gray-100">
              Log in to access exclusive features and stay connected with us
            </p>
          </div>

          <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
            <div className="w-full max-w-xl bg-white rounded-lg dark:bg-gray-800">
              <div className="px-6 py-8 text-center">
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-white fo">
                  Sign In
                </h2>
                {/* Social sing in button */}
                <div>
                  <SocialSingIn></SocialSingIn>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mt-4">
                    <input
                      className="block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                      type="name"
                      placeholder="Full Name"
                      aria-label="name"
                      name="name"
                    />
                    <input
                      className="block mt-4 w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                      type="email"
                      placeholder="Email address"
                      aria-label="Email address"
                      name="email"
                    />

                    <input
                      className="block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                      type="photo"
                      placeholder="Photo Url"
                      aria-label="photo"
                      name="photo"
                    />
                    <input
                      className="block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                      type="password"
                      placeholder="Password"
                      aria-label="Password"
                      name="password"
                      autoComplete="on"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <Link
                      href="#"
                      className="text-sm text-gray-600 dark:text-gray-200 hover:underline"
                    >
                      Forget Password?
                    </Link>

                    <button
                      type="submit"
                      className="px-6 py-2 font-medium text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LogIn;
