import React from 'react';
import './Backdrop.css';

export default function Backdrop(props) {
    const backdropStyles = props.zIndex ? { zIndex: props.zIndex } : { zIndex: 2 };
    
    function handleClick(event) {
        event.preventDefault();
        props.onClick();
    }
    
    return (
        <div 
            style={backdropStyles} 
            id="backdrop"
            onClick={handleClick}>
        </div>
    );
}