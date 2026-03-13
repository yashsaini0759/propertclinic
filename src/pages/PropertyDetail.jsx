import React from 'react';
import './PropertyDetail.css'; // Assuming there is a corresponding CSS file for styling

const PropertyDetail = ({ property }) => {
    return (
        <div className="property-detail">
            <img src={property.image} alt={property.title} className="property-image" />
            <h1 className="property-title">{property.title}</h1>
            <p className="property-description">{property.description}</p>
            <p className="property-location">Location: {property.location}</p>
        </div>
    );
};

export default PropertyDetail;