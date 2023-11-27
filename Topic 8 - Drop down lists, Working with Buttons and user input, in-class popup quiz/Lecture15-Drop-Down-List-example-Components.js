import React, { useState } from "react";
function App() {
  const [myChoice, setMyChoice] = useState(null);

  function handleListChange(event) {
    setMyChoice(event.target.value);
  }
  return (
    <>
      <div class="container-fluid">
        <form>
          <label for="mycomplist" class="form-label">Pick Component</label>
          
          <select onChange={handleListChange} class="form-control"  id="mycomplist" >
            <option key="0" selected>Choose a component</option>
            <option key="A" value="ComponentA">Component A</option>
            <option key="B" value="ComponentB">Component B</option>
            <option key="C" value="ComponentC">Component C</option>
          </select>
        </form>
        {!myChoice && <h1>Choose a component please</h1>}
        {myChoice === "ComponentA" && <ComponentA />}
        {myChoice === "ComponentB" && <ComponentB />}
        {myChoice === "ComponentC" && <ComponentC />}
      </div>
    </>
  );
}

function ComponentA() {
  return (
    <>
      <h1>Hi, I'm Component A</h1>
    </>
  );
}
function ComponentB() {
  return (
    <>
      <h1>Hi, I'm Component B</h1>
    </>
  );
}
function ComponentC() {
  return (
    <>
      <h1>Hi, I'm Component C</h1>
    </>
  );
}

export default App;

