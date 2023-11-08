import React, { useState } from "react";
// IMPORTANT - we need to import useState if we want
// to use it in our application.

function App() {
  const [myVar, setMyVar] = useState(0);

// Change my var has a parameter variable i 
  function changeMyVar(i) {
    setMyVar(myVar + i);
  }
  return (
    <>
      <h1>This is the Parent</h1>
      <h2>Current value of myVar is {myVar}: </h2>
      <button onClick={() => changeMyVar(1)}>Parent+</button>
      <hr />
      <Child myVarFromParent={myVar} changeMyVarFromParent={changeMyVar} />
    </>
  );
}
// This is the Child component - using props 
function Child(props) {
  return (
    <>
      <h1>This is the Child</h1>
      <h3>Value of myVar in Parent is currently {props.myVarFromParent}</h3>
      <button onClick={() => props.changeMyVarFromParent(-1)}>Child-</button>
    </>
  );
}

export default App;

