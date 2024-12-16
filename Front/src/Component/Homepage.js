import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Homepage = () => {

  return (
    <div className="homepage">
      <Navbar />
      {/* Overlay */}
      <div className="overlay"></div>

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

      <Footer />
    </div>
  );
};

export default Homepage;
