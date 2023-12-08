import React from "react";

function App() {
  let arrObjects = [
    { id: 54, price: 27.8, product: "Router" },
    { Fid: 123, Fprice: 89.99, Fproduct: "Monitor" },
    { product: "SSD Hard Drive", price: 189.99, id: 223 },
    { alpha: 20, beta: "Text", gamma: "More text" }
  ];

  return (
    <>
      <h1>Example 9a - Rendering Unseen Objects</h1>
      <p>
        We can actually render an array of objects where the objects have
        different properties. The ordering of properties in the object
        does not matter. 
      </p>
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
