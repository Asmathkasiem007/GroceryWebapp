import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GroceryList = () => {
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/groceries')
      .then((response) => setGroceries(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Grocery List</h1>
      <ul>
        {groceries.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
