
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getAllMature from '../services/Active-service';
//import './src/App.css';
const Maturity5days = () => {
  const [Mature, setMature] = useState([]);

    useEffect(()=>{
      getMatureFromAPI();},
      []);
const getMatureFromAPI = ()=>{getAllMature()
  .then(res => {
      setMature(res.data);
      console.log(res.data);
  })
  .catch(err => {
      Mature([]);
      console.log(err);
  })}


  return (
    <div className="table-container">
     <header className="page-header"></header>
      <h1>Bonds maturing in the next/past 5 days</h1>
        {Mature.map((Matures) => (
          <div key = {Mature.security_id}>
    <table>
      <thead>
        <tr>
          <th>ISIN</th>
          <th>CUSIP</th>
          <th>Type</th>
          <th>Issuer_name</th>
          <th>Maturity_date</th>
          {/* <th>Facevalue</th>
          <th>Bondcurrency</th> */}
          <th>Coupon</th> 
        </tr>
      </thead>
      <tbody>
        {Mature.map((Matures) => (
          <tr key={Matures.user_id}>
            <td>{Matures.isin}</td>
            <td>{Matures.cusip}</td>
            <td>{Matures.type}</td>
            <td>{Matures.issuer_name}</td>
            <td>{Matures.maturity_date}</td>
            <td>{Matures.facevalue}</td>
            <td>{Matures.bondcurrency}</td>
            <td>{Matures.coupon}</td> 
          </tr>
        ))}
      </tbody>
    </table>
            </div>
        ))}
      </div>
    
  );
}

export default Maturity5days;