import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import './Nav.css';
import '../../shared/styles/elevation.css';


export default function Nav(props) {
  // eslint-disable-next-line no-unused-vars
  const [isScrolled, setIsScrolled] = useState(false);
  const listenScrollEvent = () => window.scrollY > 10
    ? setIsScrolled(true)
    : setIsScrolled(false);
  const stylesOnScroll = isScrolled ? 'full-opacity elevation-8' : '';

  useEffect(() => window.addEventListener("scroll", listenScrollEvent));

  return (
    <nav className={`nav ${stylesOnScroll}`}>
      
		  <h1 className="logo">
          <NavLink className="link" to="/home">Logo</NavLink>
      </h1>

      <ul className="menu">
        <li className="menu-item">
          <NavLink className="link" to="/home">Home</NavLink>
        </li>
        <li className="menu-item">
          <NavLink className="link" to="/about">About</NavLink>
        </li>
      </ul>
      
    </nav>
  );
}
