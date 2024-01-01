import React from "react";

function App() {
  // Here one of the properties has the value of an array
  // The array contains strings
  // we use a nested map function to render the array from the times property
  let trains = [
    { id: 54, direction: "Arrival", times: ["07:40", "10:20", "13:50"] },
    {
      id: 123,
      direction: "Departure",
      times: ["11:20", "15:30", "18:40", "20:05"]
    },
    { id: 223, direction: "Departure", times: ["09:35", "21:35"] }
  ];
  return (
    <>
      <h1>Trains</h1>
      <ul>
        {trains.map((x, index) => (
          <li key={index}>
            {x.id}, Direction: {x.direction}, <br />
            Times:
            <ul>
              {x.times.map((t, tindex) => (
                <li key={tindex}>{t}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;

