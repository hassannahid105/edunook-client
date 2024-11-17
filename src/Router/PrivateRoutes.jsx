import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <p>
        <span className="loading loading-ring loading-lg"></span>
      </p>
    );
  }
  if (!user) {
    console.log(user);
    return <Navigate to="/login"></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivateRoutes;
