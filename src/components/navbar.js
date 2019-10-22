import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo-main.png'
import { FaAlignRight } from 'react-icons/fa';

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);

    const isLoggedIn = () => localStorage.getItem("authenticated_email");

    const logOut = () => {
        localStorage.removeItem("authenticated_email");
        localStorage.removeItem("authenticated_password");
        props.history.replace("/");
    }

    return (
        <nav className="navbar">
            <div className="nav">
                <div className="nav-header">
                    <Link to="/">
                        <img className="logo" src={logo} alt="Beach Resort"></img>
                    </Link>
                    <button type="button" className="nav-btn" onClick={() => handleToggle()}>
                        <FaAlignRight className="nav-icon" />
                    </button>
                </div>
                <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                    {isLoggedIn ?
                        <li>
                            <Link to="/">HOME</Link>
                            <Link to="/rooms">ROOMS</Link>
                        </li>
                        : <li>
                            <Link to="/">HOME</Link>
                            <Link to="/login">LOGIN</Link>
                            <Link to="/signup">SIGNUP</Link>
                        </li>
                    }
                </ul>             
            </div>
        </nav>
    )
}

export default Navbar