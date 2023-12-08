import React from "react";

function App() {

  // our reduce function callback 
  function calculateTotalCA(acc, x) {
    return acc + x;
  }
  // an array where the caMarks property is a primitive array
  let students = [
    {id: 54, module: "CS123", caMarks: [10, 8, 20, 30] },
    {id: 123, module: "MH765", caMarks: [12, 10, 16]},
    {id: 223, module: "PH165", caMarks: [5, 5, 10, 8, 5, 7] }
  ];
  return (
    <>
      <h1>Student CA Report</h1>
      <ul>
        {students.map((x, index) => (
          <li key={index}>
            id: {x.id}, Module: {x.module}, Total CA Marks = 
            {x.caMarks.reduce(calculateTotalCA, 0)}
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;

