import React from "react";
import { cars } from "./cars";

/*
Filter function. 
which will check for a particular string in the 'make' property
of the array of JSON objects. 
filter() with map() 
*/

function carMake(searchStr) {
  return function (carObject) {
    // change our strings to lower case
    let searchStrLr = searchStr.toLowerCase();
    let targetCarMake = carObject.make.toLowerCase();

    // prevent an empty string being checked for inclusion in the make.
    let n = searchStrLr.length;

    if (n <= 0) return false;
    else return targetCarMake.includes(searchStrLr);
  };
}

function App() {
  return (
    <>
      <h1>Working with arrays of JSON objects</h1>
      {cars.map((c, index) => (
        <p key={index}>
          Car {c.id}: <b>{c.make}</b>, year {c.year} <b>{index}</b>
        </p>
      ))}
    </>
  );
}

export default App;

