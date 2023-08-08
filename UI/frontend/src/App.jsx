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
import AllSercurity from './components/AllSecurity';

function App() {
  return (
    <Router>
     <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/IssuerList" element={<IssuerList/>}/>
        <Route path="/Booklist" element={<Booklist/>} />
        <Route path="/ActiveBonds" element={<ActiveBonds/>}/>
        <Route path="/Maturity5days" element={<Maturity5days/>}/>
        <Route path="/AllSercurity" element={<AllSercurity/>}/> 
      {/* <Route path="/dashboard" element={<Maturity5days/>} /> */}
    </Routes>
  </Router>
  );
}

export default App;