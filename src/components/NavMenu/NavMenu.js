import React from 'react';
import './NavMenu.css';
import { NavLink } from "react-router-dom";


export default function NavMenue(props) {
    function socialIcons() {
        return (
            <li>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/andreisurzhan">
                    <img className="social-icon"
                        src={require("../../assets/icons/linkedin.svg")}
                        alt="linkedin icon">
                    </img>
                </a>
            </li>
        );
    }

    return (
        props.isShown
            ? <ul id="nav-menu" className={props.isVertical ? "nav-menu-vertical" : ""}>
                <li>
                    <NavLink className="link" to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink className="link" to="/about">About</NavLink>
                </li>
                {props.isVertical ? socialIcons() : null}
            </ul>
            : null
    );
}