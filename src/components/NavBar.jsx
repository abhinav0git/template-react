import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth/AuthContext";

const NavBar = () => {
  const { logout, user } = useAuth();

  return (
    <nav style={{ display: "flex", gap: 16, padding: 16, borderBottom: "1px solid #eee" }}>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/profile">Profile</Link>
      {user && <button onClick={logout} style={{ marginLeft: "auto" }}>Logout</button>}
    </nav>
  );
};

export default NavBar;
