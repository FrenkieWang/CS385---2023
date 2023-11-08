import React, { useState } from "react";

/* This it the parent component */
function App() {
  const [secret, setSecret] = useState("cs385");

  // for the handling of events to change the
  // variable secret in state
  function changeSecret() {
    setSecret(secret + "-cs385");
  }

  return (
    <>
      <h1>I am the parent</h1>
      <hr />
      <Child secretFromParent={secret} changeSecretFromParent={changeSecret} />
    </>
  );
}
/* This is the child component - it has one child component 
called GrandChild - it can communicate via this component using props. 
It can also recieve values from its parent (App) using props */
function Child(props) {
  return (
    <>
      <h2>I am the child</h2>
      <h2>Secret from my parent = {props.secretFromParent}</h2>
      <hr />
      <GrandChild
        secretFromParent={props.secretFromParent}
        changeSecretFromParent={props.changeSecretFromParent}
      />
    </>
  );
}
/* This is the Grandchild - it will communicate, via props
with its parent called Child */
function GrandChild(props) {
  return (
    <>
      <h3>I am the grand child</h3>
      <h3>Secret from my parent = {props.secretFromParent}</h3>
      <button onClick={() => props.changeSecretFromParent()}>
        Change Secret
      </button>
    </>
  );
}
export default App;

