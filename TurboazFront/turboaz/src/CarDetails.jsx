import React from 'react';
import './App.css';
const CarDetails = ({ selectedCar, onClose }) => {
  return (
    <div>
      <h2>Car Details</h2>
      <button onClick={onClose}>Close</button>
      {selectedCar && (
        <div>
          <h3>{selectedCar.make} {selectedCar.model}</h3>
          <p>Year: {selectedCar.year}</p>
          <p>Color: {selectedCar.color}</p>
          <p>Price: ${selectedCar.price}</p>
          <img src={selectedCar.url} alt={`${selectedCar.make} ${selectedCar.model}`} />
        </div>
      )}
    </div>
  );
};

export default CarDetails;