import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const { user } = auth;
  return <div>{user.email ? children : <Navigate to="/login" />}</div>;
};

export default PrivateRoute;
