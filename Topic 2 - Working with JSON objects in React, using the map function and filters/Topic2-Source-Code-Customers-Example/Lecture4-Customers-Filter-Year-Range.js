import React from "react";
import { customers } from "./customers";


function customerYearRange(startYear,endYear) {
  return function (customerObject) {
    return (customerObject.year >= startYear) && (customerObject.year <= endYear);
  };
}

function App() {
  return (
    <>
      <h1>CS385 Online Shop Customers</h1>
      {customers.filter(customerYearRange(2016,2018).map((c, index) => (
        <p key={index}>
          Customer: <b>{c.email}</b>, Credit: €{c.credit}, Joined: {c.year}
        </p>
      ))}
    </>
  );
}

export default App;

