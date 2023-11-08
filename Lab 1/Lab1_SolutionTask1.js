import React from "react";

function App() {
  let alpha = 20;
  let beta = 100;
  let gamma = 1000;
  let x = "CS385";
  let y = "App Development";
  return (
    <>
      <h1>CS385 Lab 1 Template</h1>
      <p>{alpha + beta + gamma}</p>
      <p>{alpha * beta * gamma}</p>
      <p>{(alpha + beta + gamma) * 10}</p>
      <p>{x.toUpperCase()}</p>
      <p>{y.toLowerCase()}</p>
    </>
  );
}

export default App;

