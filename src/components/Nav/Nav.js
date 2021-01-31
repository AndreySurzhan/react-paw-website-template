import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import './Nav.css';
import '../../shared/styles/elevation.css';
import Backdrop from '../Backdrop/Backdrop';
import NavMenue from '../NavMenue/NavMenue';
import Burger from '../Burger/Burger';


export default function Nav(props) {
  // eslint-disable-next-line no-unused-vars
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavMenueOpened, setIsNavMenueOpened] = useState(false);
  const listenScrollEvent = () => window.scrollY > 10
    ? setIsScrolled(true)
    : setIsScrolled(false);
  const stylesOnScroll = isScrolled ? 'full-opacity elevation-8' : '';

  useEffect(() => window.addEventListener("scroll", listenScrollEvent));

  return (
    <div>
      <nav className={`nav ${stylesOnScroll}`}>
        <h1 className="logo">
          <NavLink className="link" to="/home">Logo</NavLink>
        </h1>
        <Burger onClick={() => setIsNavMenueOpened(!isNavMenueOpened)}></Burger>
        <NavMenue isOpened={isNavMenueOpened}></NavMenue>
      </nav>
      <Backdrop></Backdrop>
    </div>
  );
}
