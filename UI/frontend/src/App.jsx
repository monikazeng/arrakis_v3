import React from 'react';
//import Booklist from './components/Booklist';
import './App.css';
import IssuerList from './components/IssuerList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Booklist from './components/Booklist';
import ActiveBonds from './components/ActiveBonds';
import Maturity5days from './components/Maturity5days';
function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/dashboard" element={<ActiveBonds/>} />
    </Routes>
  </Router>
  );
}

export default App;