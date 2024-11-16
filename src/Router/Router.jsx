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
import AssignmentDetails from "../pages/AssignmentDetails/AssignmentDetails";
import UpdateAssingment from "../pages/UpdateAssingment/UpdateAssingment";
import AssignmentSubmit from "../pages/AssignmentSubmit/AssignmentSubmit";
import SubmittedAssignments from "../pages/SubmitAssignment/SubmitAssignment";
import AllSubmitAssignment from "../pages/AllSubmitAssignment/AllSubmitAssignment";
import PrivateRoutes from "./PrivateRoutes";
import MarksModal from "../component/Modal/MarksModal";

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
        path: "manageassignment",
        element: (
          <PrivateRoutes>
            <ManageAssignment></ManageAssignment>
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
        path: "/submittedassignments",
        element: (
          <PrivateRoutes>
            <SubmittedAssignments></SubmittedAssignments>
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
        element: <MarksModal></MarksModal>,
      },
    ],
  },
]);

export default router;
