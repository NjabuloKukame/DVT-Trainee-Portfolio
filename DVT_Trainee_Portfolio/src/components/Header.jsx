import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Header.css'
import dvtLogo from "../assets/dvt_logo.jpg";
import homeIcon from "../assets/icons8-home-100.png";
import menuIcon from "../assets/icons8-menu-100.png";
import supportIcon from "../assets/icons8-support-100.png";
import darkModeIcon from "../assets/icons8-moon-100.png";
import logOutIcon from "../assets/icons8-log-out-100.png";

function Header(){
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "enabled";
    });

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    }, [darkMode]);

    return(
        <header className='header'>
            <div className='logo'>
                <img src={dvtLogo} alt="Logo" />
                <div className='logo-text'>Development <br /> <span className='yellow-text'>Trainee</span></div>
            </div>

            <nav className="navbar">
                <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
                    <img src={homeIcon} alt="Home Icon" className="icon home-icon" />
                </Link>

                <Link to="/login" className={`nav-link ${location.pathname === "/login" ? "active" : ""}`}>
                    Login
                </Link>

                <Link to="/portfolio" className={`nav-link ${location.pathname === "/portfolio" ? "active" : ""}`}>
                    Portfolio
                </Link>

                <Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}>
                    About
                </Link>

                <Link to="/search" className={`nav-link ${location.pathname === "/search" ? "active" : ""}`}>
                    Search
                </Link>
            </nav>


            <div className="menu" onClick={toggleSidebar}>
                <img src={menuIcon} alt="Menu Icon" className="icon"/>
            </div>

            <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
                <button className="close-btn" onClick={toggleSidebar}>X</button>

                <div className="sidebar-content">
                    <img src={supportIcon} alt="" className="sidebar-logo"/>
                    <h2>Support</h2>
                </div>

                <div className={`sidebar-content dark-mode ${darkMode ? "dark-mode-enabled" : ""}`} onClick={() => setDarkMode(!darkMode)}>
                    <img src={darkModeIcon} alt="" className="sidebar-logo"/>
                    <h2>Dark Mode</h2>
                </div>

                <div className="sidebar-content log-out">
                    <img src={logOutIcon} alt="" className="sidebar-logo"/>
                    <h2>Logout</h2>
                </div>

            </div>
        </header>
    );
}

export default Header;