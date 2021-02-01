import React from 'react';
import './NavMenu.css';
import { NavLink } from "react-router-dom";


export default function NavMenue(props) {
    return (
        props.isShown
            ? <ul id="nav-menu" className={props.isVertical ? "nav-menu-vertical" : ""}>
                <li>
                    <NavLink className="link" to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink className="link" to="/about">About</NavLink>
                </li>
            </ul>
            : null
    );
}