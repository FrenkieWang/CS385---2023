import React, { useState } from "react";
function App() {
  const [sortChoice, setSortChoice] = useState(null);
  const animals = [
    { name: "Indian Rhino", mass: 3000, rank: 3 },
    { name: "Asian Elephant", mass: 2400, rank: 2 },
    { name: "Giraffe", mass: 1000, rank: 4 },
    { name: "African Bush Elephant", mass: 5200, rank: 1 },
    { name: "Hippopotamus", mass: 1210, rank: 6 },
    { name: "Water Buffalo", mass: 1200, rank: 5 },
  ];
  // Event handler for the drop-down-list
  function handleListChange(e) {
    // We assign the value of the event
    // The event is what is 'selected' from the list. This action
    // is an event.
    setSortChoice(e.target.value);
  }

  function sortAnimalsName(dx, dy) {
    let DX = dx.name.toUpperCase();
    let DY = dy.name.toUpperCase();
    if (DX > DY) return 1;
    else if (DX < DY) return -1;
    else return 0;
  }
  // for rank - we want smallest to largest values.
  function sortAnimalsRank(dx, dy) {
    if (dx.rank > dy.rank) return 1;
    else if (dx.rank < dy.rank) return -1;
    else return 0;
  }

  // for mass we want largest to smallest values
  function sortAnimalsMass(dx, dy) {
    if (dx.mass < dy.mass) return 1;
    else if (dx.mass > dy.mass) return -1;
    else return 0;
  }

  return (
    <>
      <h1>CS385 Animal Sorting Display</h1>
      <form>
        How to sort?:
        <br />
        <select onChange={handleListChange}>
          <option>Choose....</option>
          <option value="a">By Name (Asc)</option>
          <option value="b">By Rank (Desc)</option>
          <option value="c">By Mass (Desc)</option>
        </select>
      </form>
      {sortChoice === null &&
        animals.map((a, key) => (
          <p key={key}>
            {a.name}, Rank: {a.rank}, Mass: {a.mass}
          </p>
        ))}
      {sortChoice === "a" &&
        animals.sort(sortAnimalsName).map((a, key) => (
          <p key={key}>
            {a.name}, Rank: {a.rank}, Mass: {a.mass}
          </p>
        ))}
      {sortChoice === "b" &&
        animals.sort(sortAnimalsRank).map((a, key) => (
          <p key={key}>
            {a.name}, Rank: {a.rank}, Mass: {a.mass}
          </p>
        ))}

      {sortChoice === "c" &&
        animals.sort(sortAnimalsMass).map((a, key) => (
          <p key={key}>
            {a.name}, Rank: {a.rank}, Mass: {a.mass}
          </p>
        ))}
    </>
  );
}

export default App;

