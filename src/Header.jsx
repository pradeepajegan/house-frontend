import React from "react";
import { Link } from "react-router-dom";
const Header = ({ isAuthenticated }) => {
  return (
    <nav className="header">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/details" className="nav-link">View Details</Link>
      <Link to="/schedule" className="nav-link">Schedule</Link>
    </nav>
  );
};

export default Header;
