import React, { useState, createContext, useContext } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import AspirationOutput from "./components/pages/AspirationOutput";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import { AspirationContext, AspirationProvider } from "./components/context";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Logic from "./components/Logic";
function App() {
  // const context = useContext(AspirationContext);
  return (
    <Provider store={store} context={AspirationContext}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/aspiration" element={<AspirationOutput />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
