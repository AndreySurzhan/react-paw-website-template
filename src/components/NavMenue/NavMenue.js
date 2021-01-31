import React, { useState } from 'react';
import './NavMenue.css';
import { NavLink } from "react-router-dom";

export default function NavMenue(props) {
    return (
        <ul style={{display: props.isOpened ? 'flex' : 'none'}} id="nav-menu">
            <li>
                <NavLink className="link" to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink className="link" to="/about">About</NavLink>
            </li>
        </ul>
    );
}