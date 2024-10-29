import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Test from "../component/_test_/Test";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import LogIn from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <p>404</p>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/test",
        element: <Test></Test>,
      },
    ],
  },
]);

export default router;
