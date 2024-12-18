import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialSingIn = () => {
  const { googleSignIn, facebookSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  // !   google log in
  const handleGoogleLogIn = async () => {
    try {
      const result = await googleSignIn();
      console.log(result);
      navigate("/");
      console.log("result");
    } catch (error) {
      console.log(error);
    }
  };
  // !   facebook log in
  const handleFacebookLogIn = async () => {
    try {
      const result = await facebookSignIn();
      console.log(result);
      navigate("/");
      console.log("result");
    } catch (error) {
      console.log(error);
      console.log("error");
    }
  };
  return (
    <div className="flex flex-col md:flex-row w-full gap-4 mt-4">
      {/* google log in  */}
      <button
        onClick={handleGoogleLogIn}
        className="bg-white flex items-center text-gray-700 dark:text-gray-300 justify-center gap-x-3 text-sm sm:text-base  dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5"
      >
        <svg
          className="w-5 h-5 sm:h-6 sm:w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3033_94454)">
            <path
              d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
              fill="#4285F4"
            />
            <path
              d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
              fill="#34A853"
            />
            <path
              d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z"
              fill="#FBBC04"
            />
            <path
              d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
              fill="#EA4335"
            />
          </g>
          <defs>
            <clipPath id="clip0_3033_94454">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <span>Sign in with Google</span>
      </button>
      {/* facebook login */}
      <button
        onClick={handleFacebookLogIn}
        className="bg-[#1877F2] flex gap-x-3 text-sm sm:text-base items-center justify-center text-white rounded-lg hover:bg-[#1877F2]/80 duration-300 transition-colors border border-transparent px-8 py-2.5"
      >
        <svg
          className="w-5 h-5 sm:h-6 sm:w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3033_94669)">
            <path
              d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_3033_94669">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <span>Sign in with Facebook</span>
      </button>
    </div>
  );
};

export default SocialSingIn;
