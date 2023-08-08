import React from 'react';
//import Booklist from './components/Booklist';
import IssuerList from './components/IssuerList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Booklist from './components/Booklist';
function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/dashboard" element={<Booklist/>} />
    </Routes>
  </Router>
  );
}

export default App;