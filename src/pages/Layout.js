import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaBars } from 'react-icons/fa';
import './Layout.css';

function Layout() {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <>
            <header>
                <div className="left-section">
                    <NavLink to="/" className="name-link">
                        <h1>Mae T. Alera</h1> {/* Replace 'Your Name' with your actual name */}
                        <p className="navbar-text">Tech Advocate</p> {/* Additional text below the name */}
                    </NavLink>
                </div>
                <nav className="navbar">
                    <FaBars className="hamburger" onClick={toggleNav} />
                    <ul className={isNavVisible ? 'show' : ''}>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={toggleNav}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={toggleNav}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={toggleNav}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/experience"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={toggleNav}
                            >
                                Experience
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={toggleNav}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="right-section">
                    <ul className="social-icons">
                        <li>
                            <a href="https://www.facebook.com/mae.alera?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="fa-facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fitszalera_me%3Figsh%3Dc3gyZWpnN3NmZG5z%26fbclid%3DIwZXh0bgNhZW0CMTAAAR1UXP_03SLsR7N-Ce4TPk4KKj4NXXQObxLEQzsBuoQ0pJGV9sg-wVixVY8_aem_1FhE_777A44NDCsOmQ76DA&h=AT0qw6G-SNdFb9B8_X8mD6KL1170PSzZH5GZ4i0JeMo5Yu6i-jwgyx0PqwaIDTDs0ohHvY8gfCys4NOPTByWjs7D_RhYnPljWOUb88jBrO_HTPq75w-TaKNMMK2NjKJD2dU99g" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="fa-instagram" />
                            </a>
                       
                            <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.tiktok.com%2F%40maealera27%3F_t%3D8nqyajpMKn2%26_r%3D1%26fbclid%3DIwZXh0bgNhZW0CMTAAAR2Vqdrq5N7PMexTHfnJJWBG_q9GHqyasX9Pz0wMJrunE0KHPimMG7XduyQ_aem_lRh83KmqzWXwAaEZQHVPsg&h=AT2qdD466mjA1ZKQLWSQ8YlMEB3SJdoLexaYa_3YyFcYLkG1S_BrR8yL9c2bnbMvpRAnE3tcS2mcvNkoxKMzynUvdBMLurFh3tOLkhrM9uzDZRCa3_6iyU0ichWUOA1jXN9ldQ" target="_blank" rel="noopener noreferrer">
                                <FaTiktok className="fa-tiktok" />
                            </a>
                        </li>
                    </ul>
                </div>
            </header>

            <div className="content">
                <Outlet />
            </div>

            <footer>
                <p>&copy; Mae T. Alera</p>
                <ul className="social-icons">
                    <li>
                        <a href="https://www.facebook.com/mae.alera?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="fa-facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fitszalera_me%3Figsh%3Dc3gyZWpnN3NmZG5z%26fbclid%3DIwZXh0bgNhZW0CMTAAAR1UXP_03SLsR7N-Ce4TPk4KKj4NXXQObxLEQzsBuoQ0pJGV9sg-wVixVY8_aem_1FhE_777A44NDCsOmQ76DA&h=AT0qw6G-SNdFb9B8_X8mD6KL1170PSzZH5GZ4i0JeMo5Yu6i-jwgyx0PqwaIDTDs0ohHvY8gfCys4NOPTByWjs7D_RhYnPljWOUb88jBrO_HTPq75w-TaKNMMK2NjKJD2dU99g" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="fa-instagram" />
                        </a>
                    
                        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.tiktok.com%2F%40maealera27%3F_t%3D8nqyajpMKn2%26_r%3D1%26fbclid%3DIwZXh0bgNhZW0CMTAAAR2Vqdrq5N7PMexTHfnJJWBG_q9GHqyasX9Pz0wMJrunE0KHPimMG7XduyQ_aem_lRh83KmqzWXwAaEZQHVPsg&h=AT2qdD466mjA1ZKQLWSQ8YlMEB3SJdoLexaYa_3YyFcYLkG1S_BrR8yL9c2bnbMvpRAnE3tcS2mcvNkoxKMzynUvdBMLurFh3tOLkhrM9uzDZRCa3_6iyU0ichWUOA1jXN9ldQ" target="_blank" rel="noopener noreferrer">
                            <FaTiktok className="fa-tiktok" />
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    );
}

export default Layout;
