import React from "react";

function App() {
  let arrObjects = [
    { id: 54, price: 27.8, product: "Router" },
    { id: 123, price: 89.99, product: "Monitor" },
    { id: 223, price: 189.99, product: "SSD Hard Drive" },
    { id: 223, price: 189.99, product: "SSD Hard Drive" }
  ];

  return (
    <>
      <h1>Example 9 - Rendering Unseen Objects</h1>
      <p>Using a nested map function to render an object array.
      Here we do not need to specifically write the names of properties
      in order to render the values </p>
      {arrObjects.map((x, i) => (
        <p key={i}>
          {Object.getOwnPropertyNames(x).map((y, i) => (
            <li key={i}>
              <b>Property:</b> {y}&nbsp; <b>Value:</b> {x[y]}
            </li>
          ))}
        </p>
      ))}
    </>
  );
}
export default App;
