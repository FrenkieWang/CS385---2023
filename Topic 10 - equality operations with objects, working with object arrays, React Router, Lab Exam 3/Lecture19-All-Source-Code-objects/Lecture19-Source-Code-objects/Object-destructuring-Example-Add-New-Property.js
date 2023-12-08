import React from "react";
/* eslint-disable  no-unused-vars */

function App() {
  const originalArray = [
    { id: 1, name: "John", exam1: 25, exam2: 30 },
    { id: 2, name: "Jane", exam1: 30, exam2: 10 },
    { id: 3, name: "Colm", exam1: 28, exam2: 15 },
  ];
  // deconstruct the array objects - remember, map iterates
  // over all of the objects in the array
  // each time ...element is all of the properties.
  // Create a new property total score

  const newArray = originalArray.map((element) => ({
    ...element,
    totalScore: element.exam1 + element.exam2,
  }));

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
        {newArray.map((obj, index) => (
          <li key={index}>{JSON.stringify(obj)}</li>
        ))}
      </ul>
    </div>
  );
}
/* eslint-enable no-unused-vars */
export default App;

