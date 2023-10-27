
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from "./components/Navigation";
import About from './components/About';
import Portfolio from './components/Portfolio';
import CV from './components/CV';
import Footer from './components/Footer';
import Contact from './components/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/App.css";
function App() {
  return (
    <div className="App">
      <Router>
      <Navigation/>
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
