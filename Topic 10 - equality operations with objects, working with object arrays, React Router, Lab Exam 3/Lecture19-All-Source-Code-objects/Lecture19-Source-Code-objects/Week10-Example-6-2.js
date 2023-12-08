import React from "react";

function App() {
  let xObject = { id: 54, price: 27.8, product: "Router" };
  let yObject = {
    fid: 4,
    fprice: 27.5,
    fproduct: "Keyboard",
    manufacturer: "Dell"
  };

const xObjectNames = xObject.map((x,i) => <li key={i}>{x}</li>);
  return (
    <div className="App">
      <h1>Example 6</h1>
      {xObjectNames}
    </div>
  );
}
export default App;
