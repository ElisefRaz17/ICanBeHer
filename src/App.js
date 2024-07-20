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
import Profile from "./components/pages/Favorites";
import Favorites from "./components/pages/Favorites";

function App() {
  const [user, setUser] = useState(undefined);
  // const {auth, onAuthStateChanged} = useAuth();
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
          <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
