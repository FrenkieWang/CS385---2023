import React from "react";
/* eslint-disable  no-unused-vars */

function App() {
  const originalArray = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Colm", age: 28 },
  ];
  // deconstruct the array objects - remember, map iterates
  // over all of the objects in the array
  // each time ...rest is the other properties. 
  // Remove the "age" property from each object in the array
  const newArrayWithoutAge = originalArray.map(({ age, ...rest }) => {
    return rest;
  });

  return (
    <div>
      <h2>Original Array</h2>
      <ul>
        {originalArray.map((obj, index) => (
          <li key={index}>{JSON.stringify(obj)}</li>
        ))}
      </ul>

      <h2>New Array </h2>
      <ul>
        {newArrayWithoutAge.map((obj, index) => (
          <li key={index}>{JSON.stringify(obj)}</li>
        ))}
      </ul>
    </div>
  );
}
/* eslint-enable no-unused-vars */
export default App;

