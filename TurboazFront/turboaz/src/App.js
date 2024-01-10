import React, { useState } from 'react';
import CarsList from './CarsList';
import CarDetails from './CarDetails';
import './App.css';

function App() {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  const handleCloseDetails = () => {
    setSelectedCar(null);
  };
  return (
    <div className="App">
      <div>
      {selectedCar ? (
        <CarDetails selectedCar={selectedCar} onClose={handleCloseDetails} />
      ) : (
        <CarsList onCarClick={handleCarClick} />
      )}
    </div>
    </div>
  );
}

export default App;
