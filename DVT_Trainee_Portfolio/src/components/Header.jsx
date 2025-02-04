import { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css'
import dvtLogo from "../assets/dvt_logo.jpg";
import homeIcon from "../assets/icons8-home-100.png";
import menuIcon from "../assets/icons8-menu-100.png";

function Header(){
    return(
        <header className='header'>
            <div className='logo'>
                <img src={dvtLogo} alt="Logo" />
                <div className='logo-text'>Development <br /> <span className='yellow-text'>Trainee</span></div>
            </div>

            <nav  className="navbar">

              
                    <Link to="/" className="nav-link">
                        <img src={homeIcon} alt="Home Icon"  className="icon home-icon"/>
                    </Link>

                    <Link to="/" className="nav-link">
                        Login
                    </Link>

                    <Link to="/" className="nav-link">
                        Portfolio
                    </Link>

                    <Link to="/" className="nav-link">
                        About
                    </Link>

                    <Link to="/" className="nav-link">
                        Search
                    </Link>
               
  
            </nav>

            <div className="menu">
                <img src={menuIcon} alt="Menu Icon" className="icon"/>
            </div>
        </header>
    );
}

export default Header;