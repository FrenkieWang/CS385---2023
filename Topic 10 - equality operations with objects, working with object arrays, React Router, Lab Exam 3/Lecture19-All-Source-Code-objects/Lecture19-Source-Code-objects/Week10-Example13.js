import React, { useState } from "react";

function App() {
  const [stars, setStars] = useState([
    { sname: "Polaris (North Star)", lyears: 4.3 },
    { sname: "Sirius", lyears: 6.8 },
    { sname: "Alpha Centauri System", lyears: 4.1 },
    { sname: "Betelgeuse", lyears: 65 },
    { sname: "Rigel (Orion)", lyears: 900 }
  ]);

  const [planets, setPlanets] = useState([
    { pname: "Venus", au: 0.28 },
    { pname: "Mars", au: 0.52 },
    { pname: "Saturn", au: 8.52 },
    { pname: "Jupiter", au: 4.2 },
    { pname: "Neptune", au: 29.37 }
  ]);

  let starsPlanets = [];

  for (let i = 0; i < planets.length; i++) {
    for (let j = 0; j < stars.length; j++) {
      // currentObject is now the union of obj1 and obj2.
      //Properties in obj2 will overwrite those in obj1.
      let currentObject = {
        ...planets[i],
        ...stars[j]
      };
      starsPlanets.push(currentObject);
    }
  }

  return (
    <div className="App">
      <h1>Example 13</h1>

      {starsPlanets.map((sP, i) => (
        <li key={i}>{JSON.stringify(sP)}</li>
      ))}
    </div>
  );
}
export default App;

