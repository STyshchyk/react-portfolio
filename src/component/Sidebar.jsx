import React from 'react';
import {Link, NavLink} from "react-router-dom";
import logoS from "../assets/images/logo-s.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to={"/"}>
                <img src={logoS} alt="logo"/>
                <span>Sviatoslav</span>
            </Link>
            <nav className="navigation">
                <NavLink

                    activeclassname="active"
                    to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>
                <NavLink

                    activeclassname="active"
                    className="about-link"
                    to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                </NavLink>
                <NavLink

                    activeclassname="active"
                    className="contact-link"
                    to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                </NavLink>
            </nav>
            <nav className="social">
                <ul>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/sviatoslav-tyshchyk-a96a13160/"
                        >
                            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/STyshchyk"
                        >
                            <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.instagram.com/sv.yurie/"
                        >
                            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;