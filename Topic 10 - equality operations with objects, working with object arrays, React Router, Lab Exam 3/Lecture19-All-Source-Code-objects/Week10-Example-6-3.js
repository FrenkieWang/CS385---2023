import React from "react";

function App() {
  let xObject = { id: 54, price: 27.8, product: "Router" };
  let yObject = {
    fid: 4,
    fprice: 27.5,
    fproduct: "Keyboard",
    manufacturer: "Dell"
  };
  // create an array of the property names of xObject
  const xObjectNames = Object.getOwnPropertyNames(xObject);
  // create a map function rendering of the xObjectNames array
  const xMap = xObjectNames.map((x, i) => <li key={i}>{x}</li>);

  const yObjectNames = Object.getOwnPropertyNames(yObject);
  const yMap = yObjectNames.map((y, i) => <li key={i}>{y}</li>);

  return (
    <>
      <h1>Example 6</h1>
      <b>xObject getOwnPropertyNames</b>
      {xMap}
      <b>yObject getOwnPropertyNames</b>
      {yMap}
    </>
  );
}
export default App;
