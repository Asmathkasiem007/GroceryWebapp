import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GroceryList from './components/GroceryList';

const App = () => {
  return (
    <div>
      <h1>Grocery List</h1>
      <GroceryList />
    </div>
  );
}

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<GroceryList />} />
    </Routes>
  </Router>
);

export default App;
