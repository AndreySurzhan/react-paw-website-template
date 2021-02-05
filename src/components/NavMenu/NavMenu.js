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
                {
                    props.isVertical 
                        ? <div>
                            <li>
                                <NavLink to="/home">
                                    <img className="social-icon"
                                        src={require("../../assets/icons/airbnb.svg")}
                                        alt="airbnb icon">
                                    </img>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/home">
                                    <img className="social-icon"
                                        src={require("../../assets/icons/airbnb.svg")}
                                        alt="vrbo icon">
                                    </img>
                                </NavLink>
                            </li>
                        </div>
                        : null
                }
            </ul>
            : null
    );
}