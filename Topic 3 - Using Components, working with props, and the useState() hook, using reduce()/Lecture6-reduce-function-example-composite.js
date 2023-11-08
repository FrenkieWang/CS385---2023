import React from "react";

function getTotal(acc, obj) {
  return acc + obj.goals;
}

function myFilter(goalsNumber) {
  return function (obj) {
    return obj.goals >= goalsNumber;
  };
}

function App() {
  let scores = [
    { team: "Tottenham", goals: 10 },
    { team: "Chelsea", goals: 12 },
    { team: "Newcastle", goals: 11 },
    { team: "Wolves", goals: 14 }
  ];
  return (
    <>
      Total goals is (with filter with reduce)
      {scores.filter(myFilter(12)).reduce(getTotal, 0)}
      <br />
      Map Function (with filter)
      {scores.filter(myFilter(12)).map((s, ind) => (
        <p key={ind}>
          {s.team},{s.goals}
        </p>
      ))}
    </>
  );
}
export default App;

