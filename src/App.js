import React, {useState, createContext, useContext} from "react";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Hero from "./components/Hero";
import AspirationOutput from "./components/pages/AspirationOutput";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";

export const StateContext = createContext();
function App() {
  const [aspiration, setAspiration] = React.useState("");
  return (
    <StateContext.Provider value={{aspiration,setAspiration}}>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hero/>}/>
        <Route path="/aspiration" element={<AspirationOutput/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/sign-in" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      <Footer/>
    </Router>
    </StateContext.Provider>
  );
}

export default App;
