import React from "react";

function App() {
  let aplha = 20, beta = 100, gamma = 1000;
  let x = "CS385", y = "App Development";
  return (
    <>
      <h1>CS385 Lab 1 Template</h1>
      <h3>sum: {aplha + beta + gamma}</h3>
      <h3>product: {aplha * beta * gamma}</h3>
      <h3>sum multiplied by 10: {10 * (aplha + beta + gamma)}</h3>
      <h3>String x : {x} </h3>
      <h3>String y : {y} </h3>
      <h3>String x in upper case : {x.toUpperCase()} </h3>
      <h3>String y in upper case : {y.toLowerCase()} </h3>

    </>
  );
}

export default App;

