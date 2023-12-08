import React from "react";

function App() {
  let xObject = { id: 4, name: "Peter" };
  let yObject = { id: 4, name: "Peter" };
  return (
    <>
      {xObject === yObject && <b>EQUAL</b>}
      {xObject !== yObject && <b>NOT EQUAL</b>}
    </>
  );
}

export default App;
