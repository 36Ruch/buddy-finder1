import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-links-container">
      <ul className="navbar-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/buddies" className={({ isActive }) => isActive ? 'active' : ''}>
            Buddy Listing
          </NavLink>
        </li>
        <li>
          <NavLink to="/post" className={({ isActive }) => isActive ? 'active' : ''}>
            Post Request
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            About
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
