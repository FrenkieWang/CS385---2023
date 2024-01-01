import React from "react";

function App() {
  let xObject = { id: 54, price: 27.8, product: "Router" };
  let yObject = {
    fid: 4,
    fprice: 27.5,
    fproduct: "Keyboard",
    manufacturer: "Dell"
  };

  const xNames = Object.getOwnPropertyNames(xObject);
  const yNames = Object.getOwnPropertyNames(yObject);

  return (
    <>
      <h1>Example 6</h1>
      x={xNames.length},y={yNames.length}
    </>
  );
}
export default App;
