import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Landing } from './components/layout/Landing';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Landing />} />
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/login' element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default App;
