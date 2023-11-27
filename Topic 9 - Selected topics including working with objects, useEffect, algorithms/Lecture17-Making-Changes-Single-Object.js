import React from "react";
 

function App() {
  let myObject = { name: "Peter", course: "CS385" };
  // change an existing property
  myObject.name = "Peter Mooney";
  // add a new property to the object
  myObject.semester = "1";
  // delete a property from an object
  delete myObject.course;
  // create an new object property
  myObject.module = "CS385";

  return (
    <>
      <h1>
        {myObject.name},{myObject.module}
      </h1>
      <h1>{JSON.stringify(myObject)}</h1>
    </>
  );
}

export default App;

