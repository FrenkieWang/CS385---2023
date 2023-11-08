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
    setMyVar(myVar + 5); // notice the connection with useState
  }
  return (
    <>
      <h1>Current value of myVar is {myVar}: </h1>
      <button onClick={() => changeMyVar()}>Update State</button>
    </>
  );
}

export default App;
