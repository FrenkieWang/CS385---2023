import React  from "react";

function App() {
    // let's declare an array of planet objects.
    let planets = [
      { id: 1, name: "Venus", gravity: 8.9, dayhrs: 2808},
      { id: 2, name: "Earth", gravity: 9.8, dayhrs: 24 },
      { id: 3, name: "Mars", gravity: 3.7, dayhrs: 24.7},
      { id: 4, name: "Jupiter", gravity: 23.1, dayhrs: 9.9},
      { id: 5, name: "Saturn", gravity: 9, dayhrs: 10.7},
      { id: 6, name: "Uranus", gravity: 8.7, dayhrs: 17.2},
      { id: 7, name: "Neptune", gravity: 11, dayhrs: 16.1 },
      { id: 8, name: "Pluto", gravity: 0.7, dayhrs: 153 },
      { id: 9, name: "Mercury", gravity: 3.7, dayhrs: 4222.6}
    ];
    return (
      <>
        <h1>CS385 Solar System</h1>
        {planets.map((p,index) => (
          <p key={index}>
            <b>{p.name}</b>, Gravity = {p.gravity}m/s<sup>2</sup>
            [Block Index = {index}]
          </p>
        ))}
      </>
    );
  }
export default App;
