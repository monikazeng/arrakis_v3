
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getAllIssuers from '../services/Issuer-service';

const IssuerList = () => {
  const [Issuers, setIssuer] = useState([]);

    useEffect(()=>{
      getIssuerFromAPI();},
      []);
const getIssuerFromAPI = ()=>{getAllIssuers()
  .then(res => {
      setIssuer(res.data);
      console.log(res.data);
  })
  .catch(err => {
      setIssuer([]);
      console.log(err);
  })}


  return (
    <div>
      <header className="page-header"></header>
      <h1>Bond Issuer List</h1>
        {Issuers.map((Issuer) => (
          <div key = {Issuer.user_id}>
            <button >{Issuer.issuer}</button>
            </div>
        ))}
      </div>
    
  );
}

export default IssuerList;