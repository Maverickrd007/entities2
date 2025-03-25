import React from 'react';
import './style.css'; // Add CSS file for the card styles

const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">
      <img src={destination.image} alt={destination.name} className="destination-image" />
      <div className="destination-info">
        <h2 className="destination-name">{destination.name}</h2>
        <p className="destination-location">{destination.location}</p>
        <p className="destination-description">{destination.description}</p>
        <p className="destination-price">{destination.price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
