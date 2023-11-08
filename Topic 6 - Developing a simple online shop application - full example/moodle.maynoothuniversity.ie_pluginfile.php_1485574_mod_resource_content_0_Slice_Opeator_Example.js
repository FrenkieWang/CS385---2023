import React from "react";

function App() {
  let original = [
    { a: 4, b: 5 },{ a: 8, b: 7 },{ a: 19, b: 25 },
    { a: 99, b: 125 }, { a: 28, b: 1000 }];

  let objectToDelete = { a: 99, b: 125 };
  // we specify a function to allow us to identify the object
  // within the array
  function findObjectIndex(needle) {
    return function (haystack) {
      return haystack.a === needle.a && haystack.b === needle.b;
    };
  }
  // n will be the index of the FIRST occurence of our object
  let n = original.findIndex(findObjectIndex(objectToDelete));

  // use slice to 'cut' out the object at position n
  // cut from 0 to the element before the candidate for deletion at n
  // then cut from the element AFTER the candidate for deletion at n
  // finally - use the spread operator to create a new array 
  // this array does not contain the delete candidate element 
  original = [...original.slice(0, n),
    ...original.slice(n + 1, original.length)];

  return (
    <>
      {n >= 0 && <h1>Object at position {n}</h1>}
      {original.map((p, index) => (
        <p key={index}>
          <h1>
            original {index}: {p.a},{p.b}
          </h1>
        </p>
      ))}
    </>
  );
}

export default App;
