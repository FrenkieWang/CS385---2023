import React from "react";
function App() {
  let original = [
    { x: 4, y: 5 },
    { x: -99, y: 125 },
    { x: 99, b: 125 },
    { x: 99, y: 125 },
    { x: 28, y: 1000 },
  ];

  let peter = { x: 99, y: 125 };
  let mary = { x: 100, y: 126 };
  // allow for some 'difference' between the x and y values
  function fuzzyFindObject(needle) {
    return function (haystack) {
      return (
        Math.abs(haystack.x - needle.x) < 5 &&
        Math.abs(haystack.y - needle.y) < 5
      );
    };
  }

  let n = original.findIndex(fuzzyFindObject(peter));
  let n1 = original.findIndex(fuzzyFindObject(mary));

  return (
    <>
      {n >= 0 && <h1>Yes, the object is in the array</h1>}
      {n < 0 && <h1>No, the object is not in the array</h1>}
      {n1 >= 0 && <h1>Yes, the object is in the array</h1>}
      {n1 < 0 && <h1>No, the object is not in the array</h1>}
    </>
  );
}

export default App;

