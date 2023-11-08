import React, { useState } from "react";
// IMPORTANT - we need to import useState if we want
// to use it in our application.

function App() {
  const [alpha, setAlpha] = useState(0);
  const [gamma, setGamma] = useState(0);

  function changeAlpha(i) {
    setAlpha(alpha + i);
  }

  function changeGamma(i) {
    setGamma(gamma + i);
  }

  return (
    <>
      <h1>Hi, this is the parent component</h1>
      <h3>Aplha: {alpha}</h3>
      <h3>gamma: {gamma}</h3>

      <hr />
      <Robert
        alphaFromParent={alpha}
        changeAlphaFromParent={changeAlpha}
        changeGammaFromParent={changeGamma}
      />
      <hr />
      <Jennifer
        gammaFromParent={gamma}
        changeGammaFromParent={changeGamma}
        changeAlphaFromParent={changeAlpha}
      />
    </>
  );
}

// This is the Child component called Robert
function Robert(props) {
  return (
    <>
      <h1>Hi, this is Robert (a child component)</h1>
      <h2>From the parent - aplha has value = {props.alphaFromParent}</h2>
      <button onClick = {() => props.changeAlphaFromParent(5)}>Aplha+</button>
      <button onClick = {() => props.changeGammaFromParent(-5)}>Gamma-</button>
    </>
  );
}

// This is the Child component called Jennifer
function Jennifer(props) {
  return (
    <>
      <h1>Hi, this is Jennifer (a child component)</h1>
      <h2>From the parent - gamma has value = {props.gammaFromParent}</h2>
      <button onClick = {() => props.changeGammaFromParent(10)}>Gamma+</button>
      <button onClick = {() => props.changeAlphaFromParent(-10)}>Aplha-</button>
    </>
  );
}

export default App;