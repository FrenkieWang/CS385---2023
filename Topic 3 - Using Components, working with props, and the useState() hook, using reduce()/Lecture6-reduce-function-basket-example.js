import React from "react";

// arr.reduce(callback( accumulator, currentValue[, index[, array]] )
function getBasketTotal(acc, obj) {
  return acc + obj.price;
}

function App() {
  let basket = [
    { item: "A4 Paper", price: 10.5 },
    { item: "Stapler", price: 10.0 },
    { item: "Folders", price: 20.5 },
    { item: "Calculator", price: 15.0 }
  ];
  return (
    <>
      Your Shopping Basket Total (€)
      {basket.reduce(getBasketTotal, 0.0)}
      <br />
      <br />
      Your Shopping Basket:
      {basket.map((b, ind) => (
        <p key={ind}>
          <b>{b.item}</b>, €{b.price}
          <br />
        </p>
      ))}
    </>
  ); // end of return statement
}
export default App;

