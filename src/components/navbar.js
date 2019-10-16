import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';
import {FaAlignRight} from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
    return(
        <nav className = "navbar">
            <div className = "nav-center">
                <div className = "nav-header">
                    <Link to ="/">
                        <img className= "logo" src = {logo} alt = "Beach Resort"></img>
                    </Link>
                    <button type = "button" className = "nav-btn" onClick = {() =>handleToggle()}>
                        <FaAlignRight className = "nav-icon"/>
                    </button>
                </div>
                <ul className = {isOpen ? "nav-links show-nav": "nav-links"}>
                    <li>
                        <Link to = "/">HOME</Link>
                        <Link to = "/rooms">ROOMS</Link>
                        <Link to = "/login">LOGIN</Link>
                        <Link to = "/signup">SIGNUP</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar