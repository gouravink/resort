import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import logo from '../Assets/logo-main.png'
import { FaAlignRight } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);

    const isLoggedIn = () => localStorage.getItem("authenticated_email");

    const logOut = () => {
        localStorage.removeItem("authenticated_email");
        localStorage.removeItem("authenticated_password");
        window.location.href = "/"
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
                {console.log('sedfsdafsdf',isLoggedIn())}
                <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                    {isLoggedIn() ?
                        <li>
                            <Link to="/">HOME</Link>
                            <Link to="/rooms">ROOMS</Link>
                            <button onClick={() => logOut()}>Logout</button>
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