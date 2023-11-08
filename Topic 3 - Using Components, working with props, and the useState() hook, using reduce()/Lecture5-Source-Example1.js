import React from "react";

//import PropTypes from "prop-types";
/* eslint react/prop-types: 0 */

// App is the parent component
function App() {
  let parentX = 100;
  let parentY = 88;
  return (
    <>
      <p>Parent says Hello</p>
      <hr />
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
      <p>Parent x = {props.xFromParent}</p>
      <hr />
    </>
  );
}
// props is now defined for the child B
function ChildB(props) {
  // Childb is a child component
  return (
    <>
      <p>Child B says Hello</p>
      <p>Parent Y = {props.yFromParent}</p>
      <hr />
    </>
  );
}

export default App;

