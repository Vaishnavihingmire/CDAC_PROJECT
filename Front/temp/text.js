import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const user = true; 

const Homepage = () => {
  

  return (
    <div className="homepage">
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-container">
          <Link className="navbar-brand" to="/">
            Farmers Marketplace
          </Link>
          {user ? (
            <div className="d-flex align-items-center">
              <div className="profile-dropdown">
            <span className="dropdown-title">☰</span>
            <div className="dropdown-menu">
              <Link to="/profile">Profile</Link>
              <Link to="/logout">Logout</Link>
            </div>
          </div>
            </div>
          ) : (
            <div className="d-flex">
              <Link className="nav-link" to="/register">
                Register
              </Link>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Main Section */}
      <main className="main-section">
        <div className="content">
          <h1>Fresh Fruits & Vegetables</h1>
          <p>Directly from Farmers to Your Doorstep</p>
          <Link to="/order" className="btn-order">
            Order Now
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          &copy; 2024 Farmers Marketplace.{' '}
          <Link to="/terms">Terms & Conditions</Link>
        </p>
      </footer>
    </div>
  );
};

export default Homepage;



