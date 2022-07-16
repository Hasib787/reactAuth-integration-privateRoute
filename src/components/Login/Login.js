import React from "react";
import { NavLink } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { user, signInUsingGoogle } = useFirebase();
  return (
    <div>
      <h2>User Login</h2>
      <button onClick={() => signInUsingGoogle()}>SignIn with Google</button>
      <br />
      <NavLink to="/register">New user?</NavLink>
      <br />
      <h5>{user.displayName}</h5>
    </div>
  );
};

export default Login;
