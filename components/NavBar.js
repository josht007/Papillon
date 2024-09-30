
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/find-therapist">Find a Therapist</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;