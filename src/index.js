import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './global.css';
import Home from './pages/Home';
import Details from './pages/Details';
import Series from './pages/Series';
import SeriesDetails from './pages/SeriesDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/details/:id" element={<Details />}/>
    <Route path="/series" element={<Series />}></Route>
    <Route path="/seriesdetails/:id" element={<SeriesDetails />}></Route>
  </Routes>
  </BrowserRouter>
);


