import React from 'react'
import styles from './Page3.css'

const Page3 = () => {
  return (
    <div>
      <div id="dash"> 
        <h2>Dashboard</h2>
        <table>
          <tr>Trade Books</tr>
          <tr>Bonds maturing in 5 days</tr>
          <tr>Bonds matured in last 5 days</tr>
        </table>

      </div>
      <table id='table'>
         <thead>
           <tr>
             <th>ID</th>
             <th>ISIN</th>
             <th>CUSIP</th>
             <th>Maturity_Date</th>
             <th>ISSUER</th>
             <th>COUPON</th>
             <th>TYPE</th>
             <th>Face_Value</th>
             <th>CURRENCY</th>
             <th>STATUS</th>
           </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  )
}

export default Page3
 