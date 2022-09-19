import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './NavBar/NavBar.jsx'
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';


const App = () => {
  return (

    <>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>} ></Route>
              <Route path="/category/:id" element={<ItemListContainer/>} ></Route>
              <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
              <Route path="/cart" element={<Cart/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
