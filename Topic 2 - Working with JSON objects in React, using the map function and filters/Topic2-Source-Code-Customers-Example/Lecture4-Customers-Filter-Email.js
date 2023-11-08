import React from "react";
import { customers } from "./customers";
/**
 * The searchStr parameter is the string we wish to search for
 * in the customer email.
 * We then convert both the search and the target to lower case
 * to avoid problems around case sensitivity.
 * We use the Javascript function includes to see if the search
 * string is included or present in the target email.
 * We make a check for the length of the search string.
 * If it is <= 0 return false. If it is not then do the string
 * comparison */

function customerEmail(searchStr) {
  return function (customerObject) {
    let n = searchStr.length;

    let searchStrLower = searchStr.toLowerCase();
    let targetEmail = customerObject.email.toLowerCase();

    if (n <= 0) return false;
    else return targetEmail.includes(searchStrLower);
  };
}
/** We filter using our own filter function called
 * customerEmail. Filter to find only emails containing
 * the term 'google'. We use the map function to
 * render or print the objects with this email.
 */
function App() {
  return (
    <>
      <h1>CS385 Online Shop Customers</h1>
      {customers.filter(customerEmail("google")).map((c, index) => (
        <p key={index}>
          Customer: <b>{c.email}</b>, Credit: €{c.credit}, Joined: {c.year}
        </p>
      ))}
    </>
  );
}

export default App;

