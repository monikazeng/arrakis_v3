
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getAllSecurity from '../services/AllSecurity-service';

const AllSecurity = () => {
    const [Securities, setSecurity] = useState([]);

    useEffect(()=>{
      getSecurityFromAPI();},
      []);
const getSecurityFromAPI = ()=>{getAllSecurity()
  .then(res => {
      setSecurity(res.data);
      console.log(res.data);
  })
  .catch(err => {
      setSecurity([]);
      console.log(err);
  })}
  return (
    <div className="table-container">
    <header className="page-header"></header>
      <h1>All Securities List</h1>
      <table>
        <thead>
            <tr>
                <td>ID</td>
                <td>ISIN</td>
                <td>Cusip</td>
                <td>type</td>
                <td>Issuer</td>
                <td>maturity_date</td>
                <td>Face_Value</td>
                <td>currency</td>
                <td>Coupon</td>
                <td>status</td>  
            </tr>
        </thead>
        <tbody>
            {Securities.map((security) => (
                <tr key = {security.id}>
                <td>{security.id}</td>
                <td>{security.isin}</td>
                <td>{security.cusip}</td>
                <td>{security.type}</td>
                <td>{security.issuer}</td>
                <td>{security.maturity_date}</td>
                <td>{security.face_value}</td>
                <td>{security.currency}</td>
                <td>{security.coupon}</td>
                <td>{security.status}</td>
                </tr>
            ))}

        </tbody>
            


      </table>
        
        
      </div>
    
  );
}

export default AllSecurity