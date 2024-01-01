import React from "react";

function App() {
  const originalArray = [
    { id: 1, name: "Alice", module: "CS385" },
    { id: 21, name: "Simon", module: "CS440" },
    { id: 11, name: "Sarah", module: "CS285" },
    { id: 211, name: "Stephen", module: "CS210" },
    { id: 20, name: "Anne", module: "CS171" },
    { id: 12, name: "Sarah", module: "CS130" },
    { id: 23, name: "Toby", module: "CS385" },
  ];
  //use a map function  
  //specify the names of the properties you want to keep
  // don't specify the ones for removal.
  const newArray = originalArray.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });

  return (
    <>
      <h2>Original Array</h2>
      <ul>
        {originalArray.map((obj, index) => (
          <li key={index}>{JSON.stringify(obj)}</li>
        ))}
      </ul>

      <h2>New Array</h2>
      <ul>
        {newArray.map((obj, index) => (
          <li key={index}>{JSON.stringify(obj)}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

