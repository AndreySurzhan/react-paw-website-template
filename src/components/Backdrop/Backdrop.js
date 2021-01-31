import React from 'react';
import './Backdrop.css';

export default function Backdrop(props) {
    const backdropStyles = props.zIndex ? { zIndex: props.zIndex } : { zIndex: 2 };

    return (
        <div style={backdropStyles} id="backdrop"></div>
    );
}