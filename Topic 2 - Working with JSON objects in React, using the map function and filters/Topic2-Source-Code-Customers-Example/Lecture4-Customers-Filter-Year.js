import React from "react";
import { customers } from "./customers";


/** To use a filter function in Javascript
 * We need to create a function which operates on
 * all objects in an array of objects.
 * We want to search or filter using the PROPERTY named 'year'
 * We write our new function OUTSIDE of function App().
 */
function customerYearFilter(filterYear) {
  return function (customerObject) {
    return customerObject.year === filterYear;
  };
}

function App() {
  return (
    <>
      <h1>CS385 Online Shop Customers</h1>
      {customers.filter(customerYearFilter(2020)).map((c, index) => (
        <p key={index}>
          Customer: <b>{c.email}</b>, Credit: €{c.credit}, Joined: {c.year}
        </p>
      ))}
    </>
  );
}

export default App;

