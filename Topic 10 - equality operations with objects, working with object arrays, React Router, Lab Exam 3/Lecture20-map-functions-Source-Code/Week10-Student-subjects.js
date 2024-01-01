import React from "react";

function App() {

  let students = [
    {id: 54, year: "3", subjects: [{name: "cs385", credits: 5},{name: "mh123", credits: 7}] },
    {id: 123, year: "2", subjects: [{name: "cs385", credits: 5}]},
    {id: 223, year: "HDip", subjects: [{name: "cs385", credits: 5},{name: "cs130", credits: 5}] }
  ];
  return (
    <>
      <h1>Student Subjects</h1>
      <ul>
        {students.map((x, index) => (
          <li key={index}>
            id: {x.id}, Year: {x.year}, Subjects = 
            {JSON.stringify(x.subjects)}
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;

