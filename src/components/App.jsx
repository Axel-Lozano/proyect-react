import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './NavBar/NavBar.jsx'
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (

    <>
    
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} ></Route>
            <Route path="/category/:id" element={<ItemListContainer/>} ></Route>
            <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
          </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
