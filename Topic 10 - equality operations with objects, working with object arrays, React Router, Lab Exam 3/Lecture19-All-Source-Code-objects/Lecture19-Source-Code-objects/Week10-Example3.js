import React from "react";

function App() {
  let xObject = { id: 4, name: "Peter" };
  let yObject = {};
  // assign the properties individually
  yObject.id = xObject.id;
  yObject.name = xObject.name;
  return (
    <>
      <h1>Example 3</h1>
      {xObject === yObject && <b>EQUAL</b>}
      {xObject !== yObject && <b>NOT EQUAL</b>}
    </>
  );
}
export default App;
