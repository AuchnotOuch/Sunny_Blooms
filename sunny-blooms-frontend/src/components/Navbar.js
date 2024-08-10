import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    // Determine the background color class based on the current path
    const getNavbarClass = () => {
        switch (location.pathname) {
            case '/about':
                return 'navbar magenta';
            case '/contact':
                return 'navbar purple';
            default:
                return 'navbar sunflower-yellow';
        }
    };

    return (
        <nav className={getNavbarClass()}>
            <ul>
                <li>
                    <NavLink
                        exact to="/"
                        className="nav-link"
                        activeClassName="active-link"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className="nav-link"
                        activeClassName="active-link"
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className="nav-link"
                        activeClassName="active-link"
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
