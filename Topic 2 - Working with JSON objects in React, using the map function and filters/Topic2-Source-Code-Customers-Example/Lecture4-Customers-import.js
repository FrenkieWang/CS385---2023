import React from "react";
import {customers} from "./customers";
/**
 * Here we IMPORT the array called customers from the 
 * Javascript file called 'customers.js'. 
 * BE CAREFUL - make sure you have the array name correct. 
 * So, this file can contain a really big array of objects.
 * Our map function remains the same. 
 */

function App() {


  return (
    <>
      <h1>CS385 Online Shop Customers</h1>
      {customers.map((c, index) => (
        <p key={index}>
          Customer: <b>{c.email}</b>, Credit: €{c.credit}, Joined: {c.year}
        </p>
      ))}
    </>
  );
}

export default App;
