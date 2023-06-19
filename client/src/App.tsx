import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Build from './pages/Build'
import Contact  from './pages/Contact';
import Landing from './pages/Landing';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Router>
      <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
      </Routes>
    </Router>
    </div>
  );
}                                  



export default App;

