import React from "react";


function App() {
  
let xArray = [{a:4,b:5},{a:8,b:7}];
// spread operator used. 
let yArray = [...xArray,...xArray];

  return (
    <>
      {yArray.map((p, index) => (
        <p key={index}>
          <h1>{p.a},{p.b}</h1>
        </p>
      ))}
    </>
  );
}



export default App;
