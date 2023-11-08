import React, { useState } from "react";
// IMPORTANT - we need to import useState if we want
// to use it in our application.

function App() {
  return (
    <>
      <h1>Hi, this is the parent component</h1>

      <hr />
      <Robert />
      <hr />
      <Jennifer />
    </>
  );
}

// This is the Child component called Robert
function Robert() {
  return (
    <>
      <h1>Hi, this is Robert (a child component)</h1>
    </>
  );
}

// This is the Child component called Jennifer
function Jennifer() {
  return (
    <>
      <h1>Hi, this is Jennifer (a child component)</h1>
    </>
  );
}

export default App;

