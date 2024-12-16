import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    // Check login status on component mount
    useEffect(() => {
        const userToken = JSON.parse(localStorage.getItem('user-token'));
        setIsLoggedIn(!!userToken);
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const handleLogout = () => {
        // Clear user token
        localStorage.removeItem('user-token');
        setIsLoggedIn(false);
        setIsDropdownOpen(false);

        // Redirect to login or homepage
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link className="navbar-brand" to="/">
                    Farmers Marketplace
                </Link>
                {isLoggedIn ? (
                    <div className="d-flex align-items-center">
                        <div className="dropdown">
                            <i
                                className="bi bi-person-circle"
                                onClick={toggleDropdown}
                                style={{ fontSize: '2rem' }}
                            ></i>

                            {isDropdownOpen && (
                                <div className="dropdown-content">
                                    <Link to="/user/profile">Profile</Link>
                                    <button
                                        className="dropdown-item"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="d-flex">
                        <Link className="nav-link" to="/register">
                            Register
                        </Link>
                        <Link className="nav-link" to="/">
                            Login
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
