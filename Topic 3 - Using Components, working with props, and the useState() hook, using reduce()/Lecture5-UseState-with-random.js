import React, { useState } from "react";
// IMPORTANT - we need to import useState if we want
// to use it in our application.

function App() {
  // declare a variable myVar and a function name to
  // allow you to update or set state called setMyVar
  const [myVar, setMyVar] = useState(0);

  // this is a function handler to allow us to
  // change or set state
  function changeMyVar() {
    let x = Math.random() * 100;
    console.log(x);
    if (x >= 50) setMyVar(myVar + 1);
    // notice the connection with useState
    else setMyVar(myVar - 1);
  }
  return (
    <>
      <h1>Current value of myVar is {myVar}: </h1>
      <button onClick={() => changeMyVar()}>Update State</button>
    </>
  );
}

export default App;

