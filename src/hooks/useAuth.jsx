import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";

const useAuth = () => {
  const userAuth = useContext(AuthContext);
  return userAuth;
};

export default useAuth;
