import React, { useState } from 'react';
import './Burger.css';

const Burger = ({ onClick, ...props }) => {

    const [isClicked, setIsClicked] = useState(false);
    function handleClick(event) {
        event.preventDefault();
        onClick();
        setIsClicked(!isClicked)
    }

    return (
        <div
            id="burger"
            aria-label="Toggle menu"
            onClick={handleClick}
            className={isClicked ? "burger-is-clicked" : ""}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Burger;