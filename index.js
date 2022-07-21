import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './src/global.css';
import Home from './src/pages/Home';
import Details from './src/pages/Details';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/details/:id" element={<Details/>}/>
  </Routes>
  </BrowserRouter>
);


