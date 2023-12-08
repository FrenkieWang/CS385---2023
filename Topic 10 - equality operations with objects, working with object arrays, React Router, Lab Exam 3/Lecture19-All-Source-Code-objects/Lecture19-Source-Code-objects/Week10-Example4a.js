import React from "react";
function App() {
  let xObject = { id: 4, name: "Peter" };
  let yObject = {};
  // assign the properties individually
  yObject.id = xObject.id;
  yObject.name = xObject.name;
  // Make two conditions for checking the
  // equality of the properties.
  let cond1 = (xObject.name === yObject.name);
  let cond2 = (xObject.id === yObject.id);

  return (
    <>
      <h1>Example 4a</h1>
      {(cond1 && cond2) && (<b>EQUAL</b>)}
      {!(cond1 && cond2) && (<b>NOT EQUAL</b>)}
      </>
  );
}
export default App;
