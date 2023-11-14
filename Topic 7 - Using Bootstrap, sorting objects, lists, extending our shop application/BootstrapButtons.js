import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  function increaseNumber() {
    setNumber(number + 1);
  }
  return (
    <>
      <div class="container-fluid">
        <h1>Using buttons in bootstrap</h1>
        <button type="button" onClick={increaseNumber}
          class="btn btn-primary btn-lg">Large button</button>
        <br />
        <button type="button" onClick={increaseNumber} class="btn btn-warning">
          Normal Button
        </button>
        <br />
        <button type="button" class="btn btn-info btn-sm">
          Small button
        </button>
        <p class="lead">Value of <mark>number</mark> is {number}</p>
      </div>
    </>
  );
}
export default App;

