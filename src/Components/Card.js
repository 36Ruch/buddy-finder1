import React from 'react';
import './Card.css';
const Card = ({ title, description, image, showConnect }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-img" />}
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
      {showConnect && (
        <button className="connect-btn">Connect</button>
      )}
    </div>
  );
};
export default Card;
