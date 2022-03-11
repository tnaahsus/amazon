import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';
import Footer from './components/Footer';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { onAuthStateChanged } from '@firebase/auth';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
  onAuthStateChanged(auth , (authUser) => {
    console.log("[USER] ", authUser);
    console.log(authUser)
    if (authUser) {
      dispatch({
        type: "SET_USER",
        user: authUser,
      });
    } else {
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
        } />
        <Route path="/cart" element={
          <>
            <Header />
            <Cart />
          </>
        } />
        <Route path="/login" element={
          <>
            <Login />
          </>
        } />

      </Routes>
    </Router>
  );
}

export default App;
