import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">SESAME</Link>
        <Link to="/" className="navbar-link">Blogs</Link>
      </div>
      <div className="navbar-right">
        <button className="navbar-profile" onClick={() => navigate('/dashboard')}>My Profile</button>
      </div>
    </nav>
  );
};

export default Navbar; 