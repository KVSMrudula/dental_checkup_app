import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Dental Checkup</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/doctors">About</Link>
        <Link to="/request">Request Checkup</Link>
        <Link to="/results">Checkup Results</Link>
      </div>
    </div>
  );
};

export default Navbar;
