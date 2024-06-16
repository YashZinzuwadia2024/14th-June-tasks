import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to="/">
                <div className="logo">
                    <h2>14th June Task</h2>
                </div>
            </Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/product-list">Products</Link>
                <Link to="/form-validation">Form Validation</Link>
                <Link to="/child-component-state-control">Child State</Link>
            </div>
        </nav>
    )
}

export default Navbar
