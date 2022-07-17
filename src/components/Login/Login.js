import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div>
      <h2>User Login</h2>
      <button onClick={() => signInUsingGoogle()}>SignIn with Google</button>
      <br />
      <NavLink to="/register">New user?</NavLink>
    </div>
  );
};

export default Login;
