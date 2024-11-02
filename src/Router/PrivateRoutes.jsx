import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();
  if (isLoading) {
    console.log("loading.......");
    return (
      <p>
        <span className="loading loading-ring loading-lg"></span>
      </p>
    );
  }
  if (!user) {
    console.log("login");
    return navigate("/login");
  }
  return <div>{children}</div>;
};

export default PrivateRoutes;
