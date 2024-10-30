import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Test from "../component/_test_/Test";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import LogIn from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import AllAssignments from "../pages/AllAssignments/AllAssignments";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import ManageAssignment from "../pages/ManageAssignment/ManageAssignment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
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
        path: "allassignments",
        element: <AllAssignments></AllAssignments>,
      },
      {
        path: "createassignment",
        element: <CreateAssignment></CreateAssignment>,
      },
      {
        path: "manageassignment",
        element: <ManageAssignment></ManageAssignment>,
      },
      {
        path: "/test",
        element: <Test></Test>,
      },
    ],
  },
]);

export default router;
