import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Home />
          </>
        } />
        <Route path="/cart" element={
          <>
            <Header />
            <Cart />
          </>
        } />

      </Routes>
    </Router>
  );
}

export default App;
