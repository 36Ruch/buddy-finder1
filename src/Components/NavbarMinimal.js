import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NavbarMinimal = () => (
  <nav className="navbar">
    <div className="navbar-links-container">
      <ul className="navbar-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="navbar-auth">
      <NavLink to="/login" className="login-btn">Login</NavLink>
      <NavLink to="/signup" className="signup-btn">Signup</NavLink>
    </div>
  </nav>
);

export default NavbarMinimal;