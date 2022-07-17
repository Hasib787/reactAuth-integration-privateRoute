import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.style.css";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <div className="header">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      {user.email && <button onClick={logout}>Logout</button>}
    </div>
  );
};

export default Header;
