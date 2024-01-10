import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const CarsList = ({ onCarClick }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
        const response = await axios.get('https://myturboaz.azurewebsites.net/Car');      
      setCars(response.data);
    };

    fetchCars();
  }, []);

  return (
    <div className='list-container'>
      <h1>Cars</h1>
      <div className="car-list">
        {cars.map((car) => (
          <div key={car.id} className="car-card" onClick={() => onCarClick(car)}>
            <h3>{car.make} {car.model}</h3>
            <p>Year: {car.year}</p>
            <p>Price: ${car.price}</p>
            <img src={car.url} alt={`${car.make} ${car.model}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsList;