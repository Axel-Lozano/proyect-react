import './App.css';
import React from 'react';
import Navbar from './fragment/NavBar'
import CartWidget from './fragment/CartWidget';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CartWidget/>
    </div>
  );
}

export default App;
