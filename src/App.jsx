import React from "react";
import "./index.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home/home";
import Service from "./pages/service/service";
import Menu from "./pages/menu/menu";
import About from "./pages/about/about";
import Login from "./pages/login/login";

function App() {
  
  return (
<div className="app">
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  </Router>
 </div>
 
 );
}

export default App
