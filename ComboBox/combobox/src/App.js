import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    axios.get('https://localhost:44376/Product/Categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const handleCategoryChange = (categoryId) => {
    console.log(categoryId)
    axios.get(`https://localhost:44376/Product/Category/${categoryId}`)
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  };
  console.log(products);
  console.log(categories);

  return (
    <div>
      <label>Select a category:</label>
      <select onChange={(e) => handleCategoryChange(e.target.value)}>
        <option value="">All categories</option>
        {categories.map(category => (
          <option key={category.productCategoryId} value={category.productCategoryId}>
            {category.name}
          </option>
        ))}
      </select>

      <ul>
        {products.map(product => (
          <li key={product.Id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
