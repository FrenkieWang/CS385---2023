import React from "react";

function App() {
  let xObject = [
    { id: 4, price: 17.8, product: "Cable" },
    { id: 54, price: 27.8, product: "Router" }
  ];
  let yObject = [
    { fid: 4, fprice: 27.5, fproduct: "Keyboard" },
    { fid: 14, fprice: 37.5, fproduct: "Webcam" }
  ];

  const xObjectNames = xObject.map((x) => <li key={x.id}>{x.product}</li>);
  const yObjectNames = yObject.map((y) => <li key={y.fid}>{y.fproduct}</li>);

  return (
    <div className="App">
      <h1>pre Example 6</h1>
      <h3>Map Function in Functional Component</h3>
      {xObjectNames}
      <br />
      {yObjectNames}
    </div>
  );
}
export default App;
