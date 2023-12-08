import React, { useState } from "react";

function App() {
  // create arrays called vegetables and fruit
  // as state variables in this Functional Component

  const [vegetables, setVegetables] = useState([
    { name: "Cabbage", price: 1.5 },
    { name: "Carrots", price: 0.8 }
  ]);

  const [fruit, setFruit] = useState([
    { name: "Orange", price: 0.55, origin: "ES" },
    { name: "Apple", price: 0.45, origin: "IE" }
  ]);

  // Combine the two arrays using the spread operator
  // this is just .... before the array
  let comboArray = [...vegetables, ...fruit];

  return (
    <div className="App">
      <h1>Example 12</h1>
      <h1>The Spread Operator</h1>
      <h3>Fruit and Vegetables - merged</h3>
      <h3>Using 'undefined' for object properties</h3>
      {comboArray.map((c, i) => (
        <li key={i}>
          Name: {c.name}, Price: €{c.price}&nbsp;
          {c.origin === undefined && <b>N/A</b>}
          {c.origin !== undefined && <b>{c.origin}</b>}
        </li>
      ))}
    </div>
  );
}
export default App;
