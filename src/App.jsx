import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Catalogy from './components/Catalogy/Catalogy';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import ProductPage from './assets/ProductPage/ProductPage';
import UsersPage from './components/UsersPage/UsersPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/catalogWrapper' element={<Catalogy/>}></Route>
        <Route path='/catalogWrapper/:id' element = {<ProductPage/>}></Route>
        <Route path='/users' element = {<UsersPage/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;

