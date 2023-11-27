import React from "react";
/* eslint-disable react/prop-types */

function App() {
  let myObjects = [
    { name: "Peter", course: "CS385" },
    { name: "Jessica", course: "CS478" },
  ];
  // make changes to the individual objects
  myObjects[0].name = "Peter Mooney";
  myObjects[1].name = "Jessica Smith";

  delete myObjects[0].course;
  myObjects[0].module = "CS385";

  myObjects[1].credits = "15";

  return (
    <>
      <h1>{JSON.stringify(myObjects)}</h1>
    </>
  );
}

export default App;

