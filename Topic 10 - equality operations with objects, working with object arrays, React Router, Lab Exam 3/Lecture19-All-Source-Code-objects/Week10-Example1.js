import React from "react";

function App() {
  let xObject = { id: 4, name: "Peter" };
  let yObject = xObject;
  return (
    <div className="App">
      {xObject === yObject && <b>EQUAL</b>}
      {xObject !== yObject && <b>NOT EQUAL</b>}
    </div>
  );
}

export default App;

