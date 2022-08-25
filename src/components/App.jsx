import './App.css';
import React from 'react';
import Navbar from './NavBar/NavBar.jsx'
import ItemListContainer from './ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer  saludo="hola"/>
    </div>
  );
}

export default App;
