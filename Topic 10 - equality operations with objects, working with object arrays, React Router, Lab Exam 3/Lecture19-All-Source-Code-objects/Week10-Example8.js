import React from "react";

function App() {
  // classical standard map function code
  // to render an array of objects.
  // We know the properties of all objects in advance.
  let arrObjects = [
    { id: 54, price: 27.8, product: "Router" },
    { id: 123, price: 89.99, product: "Monitor" },
    { id: 223, price: 189.99, product: "SSD Hard Drive" }
  ];
  return (
    <>
      <h1>Example 8</h1>
      {arrObjects.map((x) => (
        <li key={x.id}>
          {x.product},€{x.price}
        </li>
      ))}
    </>
  );
}
export default App;
