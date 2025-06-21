import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Customer from "./Pages/Customer";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import React from 'react';


function App() {
  return (



    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="customer" element={<Customer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;