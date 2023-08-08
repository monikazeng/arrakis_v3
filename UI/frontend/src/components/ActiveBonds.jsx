
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getAllActiveBonds from '../services/Active-service';

const ActiveBonds = () => {
  const [Active, setActive] = useState([]);

    useEffect(()=>{
      getActiveFromAPI();},
      []);
const getActiveFromAPI = ()=>{getAllActiveBonds()
  .then(res => {
      setActive(res.data);
      console.log(res.data);
  })
  .catch(err => {
      Active([]);
      console.log(err);
  })}


  return (
    <div className="table-container">
    <header className="page-header"></header>
      <h1>Active Bonds List</h1>
        
    <table>
      <thead>
        <tr>
          <th>ISIN</th>
          <th>CUSIP</th>
          <th>Type</th>
          <th>Issuer</th>
          <th>Maturity_date</th>
          <th>Facevalue</th>
          <th>Bondcurrency</th> 
          <th>Coupon</th> 
        </tr>
      </thead>
      <tbody>
        {Active.map((Actives) => (
          <tr key={Actives.user_id}>
            <td>{Actives.isin}</td>
            <td>{Actives.cusip}</td>
            <td>{Actives.type}</td>
            <td>{Actives.issuer}</td>
            <td>{Actives.maturity_date}</td>
            <td>{Actives.face_Value}</td>
            <td>{Actives.currency}</td>
            <td>{Actives.coupon}</td> 
          </tr>
        ))}
      </tbody>
    </table>
            </div>
        
      
    
  );
}

export default ActiveBonds;