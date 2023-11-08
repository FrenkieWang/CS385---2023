import React from "react";

//import PropTypes from "prop-types";
/* eslint react/prop-types: 0 */

// App is the parent component
function App() {
let parentX = {name: "Peter", course: "cs385"};
let parentY = {name: "Siobhan", course: "cs621"};
  return (
    <>
      <p>Parent says Hello</p><hr />
      <ChildA xFromParent={parentX} />
      <ChildB yFromParent={parentY} />
    </>
  );
}
// props is now defined for the child A
function ChildA(props) {
  // ChildA is a child component
  return (
    <>
      <p>Child A says Hello</p>
      <p>Parent X Name = {props.xFromParent.name}</p><hr />
    </>
  );
}
// props is now defined for the child B
function ChildB(props) {
  // Childb is a child component
  return (
    <>
      <p>Child B says Hello</p>
      <p>Parent Y Course = {props.yFromParent.course}</p><hr />
    </>
  );
}

export default App;

