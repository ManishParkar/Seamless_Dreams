import React from 'react';
import './PropertyCard.css';

function PropertyCard({ title, description, imageUrl }) {
  return (
    <div className="property-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Learn More</button>
    </div>
  );
}

export default PropertyCard;
