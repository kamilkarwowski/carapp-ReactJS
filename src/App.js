import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cars from './Cars';
import reportWebVitals from './reportWebVitals';
import NavBar from './NavBar';
import Dodaj from './Dodaj';
import Contact from './Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Footer from './Footer';


function App() {
    return(
      
      <BrowserRouter>
      <NavBar/>
        <div className="App">
            <Routes>
            <Route path="dodaj" element={<Dodaj/>}/>
            <Route path="cars" element={<Cars/>}/>
            <Route path="contact" element={<Contact/>}/>
              
            </Routes>
        </div>
      </BrowserRouter>)
  }
  
  export default App;
  