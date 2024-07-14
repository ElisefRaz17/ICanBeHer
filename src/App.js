import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/pages/Home";
import AspirationOutput from "./components/pages/AspirationOutput";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/aspiration" element={<AspirationOutput/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/sign-in" element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
