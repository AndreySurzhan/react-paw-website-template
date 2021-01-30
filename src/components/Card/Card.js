import React from 'react';
import './Card.css';
import '../../shared/styles/elevation.css';

export default function Card(props) {
  const imageStyles = {
    borderRadius: '1rem',
    width: props.style ? props.style.width : '',
    marginRight: props.style ? '1rem' : '',
    marginLeft: props.style ? '1rem' : ''
  };

  return (
    <div style={props.style ?? {}} className="card elevation-4">
      {
        props.image
          ? (<img
            style={imageStyles}
            className="elevation-2"
            src={props.image.src}
            alt={props.image.alt}>
          </img>)
          : undefined
      }
      <h3>{props.title}</h3>
      <h4>{props.subtitle}</h4>
      <p>{props.text}</p>
    </div>
  );
}
