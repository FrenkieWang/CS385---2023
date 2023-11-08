import React from "react";

//import PropTypes from "prop-types";
/* eslint react/prop-types: 0 */

// App is the parent component
function App() {
  let parentX = [
    { name: "Peter", course: "cs385" },
    { name: "Siobhan", course: "cs621" }
  ];
  return (
    <>
      <p>Parent says Hello</p><hr />
      <ChildA xFromParent={parentX} />
    </>
  );
}
// props is now defined for the child A
// we use a map function as the props is an array
function ChildA(props) {
  // ChildA is a child component
  return (
    <>
      <p>Child A says Hello</p>
      {props.xFromParent.map((i, index) => (
        <p key={index}>
          Name: {i.name}, Course: {i.course}
        </p>
      ))}
    </>
  );
}

export default App;

