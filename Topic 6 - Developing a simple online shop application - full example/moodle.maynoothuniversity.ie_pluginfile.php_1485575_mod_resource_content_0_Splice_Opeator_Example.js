import React from "react";

function App() {
  let original = [
    { a: 4, b: 5 },
    { a: 8, b: 7 },
    { a: 19, b: 25 },
    { a: 99, b: 125 }
  ];
  // remove 2 elements start at index 2
  let splicedResult = original.splice(2, 2);

  return (
    <>
      {original.map((p, index) => (
        <p key={index}>
          <h1>original (edited) {index}: {p.a},{p.b}</h1>
        </p>
      ))}

      {splicedResult.map((p, index) => (
        <p key={index}>
          <h1>spliced result {index}: {p.a},{p.b}</h1>
        </p>
      ))}
    </>
  );
}

export default App;
