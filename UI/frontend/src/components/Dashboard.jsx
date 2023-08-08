// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import IssuerList from './IssuerList';
import Booklist from './Booklist';
import ActiveBonds from './ActiveBonds';
import Maturity5days from './Maturity5days';

const Dashboard = () => {
  return (
    <div>
      <h2>Home Dashboard</h2>
      <div>
        <Link to="/IssuerList">
          <button>IssuerList</button>
        </Link>
        <Link to="/Booklist">
          <button>Booklist</button>
        </Link>
        <Link to="/ActiveBonds">
          <button>ActiveBonds</button>
        </Link>
        <Link to="/Maturity5days">
          <button>Maturity5days</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

