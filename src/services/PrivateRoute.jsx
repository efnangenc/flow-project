import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({special}) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? special : <Navigate to="/home" />;
};

export default PrivateRoute;
