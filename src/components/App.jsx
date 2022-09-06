import './App.css';
import React from 'react';
import Navbar from './NavBar/NavBar.jsx'
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer  saludo="hola"/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
