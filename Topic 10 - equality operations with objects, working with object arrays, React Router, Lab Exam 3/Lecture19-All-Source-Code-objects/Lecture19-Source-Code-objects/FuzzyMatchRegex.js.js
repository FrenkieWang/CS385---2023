import React from "react";
function App() {
  let original = [
    { x: 4, y: "rHj78h" },
    { x: 99, y: "CS385" },
    { x: 99, y: "Mobile385" },
    { x: 99, y: "App385" },
    { x: 28, y: "Peter356" },
  ];
  const strPattern = /^.*\d{3,5}$/;
  let search1 = { x: 99, y: "CS9999" };
  let search2 = { x: 28, y: "ANDROID1234" };
  // fuzzy comparision of x and y
  // x is numerical (+/- 0 .. 9)
  // y is a regex
  function fuzzyFindObject(needle) {
    return function (haystack) {
      return haystack.x === needle.x && strPattern.test(needle.y);
    };
  }

  let n = original.findIndex(fuzzyFindObject(search1)); // n = 1
  let n1 = original.findIndex(fuzzyFindObject(search2)); // n = 4

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

