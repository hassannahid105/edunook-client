import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import LogIn from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import AllAssignments from "../pages/AllAssignments/AllAssignments";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import AssignmentDetails from "../pages/AssignmentDetails/AssignmentDetails";
import UpdateAssingment from "../pages/UpdateAssingment/UpdateAssingment";
import AssignmentSubmit from "../pages/AssignmentSubmit/AssignmentSubmit";
import AllSubmitAssignment from "../pages/AllSubmitAssignment/AllSubmitAssignment";
import PrivateRoutes from "./PrivateRoutes";
import Test from "../component/_test_/Test";
import MyAssignment from "../pages/MyAssignment/MyAssignment";
import SubmitAssignment from "../pages/SubmitAssignments/SubmitAssignment";

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
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <AssignmentDetails></AssignmentDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/assignments/details/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoutes>
            <UpdateAssingment></UpdateAssingment>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/assignments/details/${params.id}`),
      },
      {
        path: "createassignment",
        element: (
          <PrivateRoutes>
            <CreateAssignment></CreateAssignment>
          </PrivateRoutes>
        ),
      },
      {
        path: "submitassignments",
        element: (
          <PrivateRoutes>
            <SubmitAssignment></SubmitAssignment>
          </PrivateRoutes>
        ),
      },
      {
        path: "/submit/:id",
        element: (
          <PrivateRoutes>
            <AssignmentSubmit></AssignmentSubmit>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myassignment",
        element: (
          <PrivateRoutes>
            <MyAssignment></MyAssignment>
          </PrivateRoutes>
        ),
      },
      {
        path: "/allsubmitted",
        element: (
          <PrivateRoutes>
            <AllSubmitAssignment></AllSubmitAssignment>
          </PrivateRoutes>
        ),
      },
      {
        path: "/test",
        element: <Test></Test>,
      },
    ],
  },
]);

export default router;
