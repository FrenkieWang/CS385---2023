import React, { useState } from "react";
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
function App() {
  const [basket, setBasket] = useState([
    { pid: 10, name: 14 },
    { pid: 12, name: 17 },
    { pid: 10, name: 14 },
    { pid: 10, name: 14 },
  ]);

  function changeBasket() {
    setBasket([...basket, { pid: 12, name: 17 }, { pid: 32, name: 87 }]);
  }

  return (
    <>
      <button onClick={changeBasket}>Add an item</button>
      <h1>Your basket (all items)</h1>
      {basket.map((v, index) => (
        <p key={index}>
          Item: {index + 1}: {v.pid} {v.name}
        </p>
      ))}
      <hr />
      <SummariseBasket stateBasket={basket} />
    </>
  );
}

function SummariseBasket(props) {
  function searchBasket(needle) {
    return function (haystack) {
      return haystack.pid === needle.pid && haystack.name === needle.name;
    };
  }

  let summary = []; // empty summary basket.

  if (props.stateBasket.length <= 0) {
    summary = [];
  } else if (props.stateBasket.length === 1) {
    // only one product in here.
    // no need to summarise except create a new property called qty
    // we don't use spread as we don't want the price property.
    summary[0] = {
      qty: 1,
      pid: props.stateBasket[0].pid,
      name: props.stateBasket[0].name,
    };
  } else {
    // there are at least two objects in this.state.basket.
    // they might be duplicates.
    // First element in the summary basket is the first element in
    // this.state.basket
    summary[0] = {
      qty: 1,
      pid: props.stateBasket[0].pid,
      name: props.stateBasket[0].name,
    };
    // iterate through the rest of this.state.basket.
    // we have to check if the current object/product is already
    // in the summary basket. If it is - we need to find the "index"
    // where it is in the summary basket. Then to add 1 to the qty
    for (let i = 1; i < props.stateBasket.length; i++) {
      let indexPos = summary.findIndex(searchBasket(props.stateBasket[i]));

      if (indexPos >= 0) {
        // this object/property is in the summary array.
        // it's at position indexPos
        // advance the qty by 1. Then copy the other properties
        let tempQty = summary[indexPos].qty;
        tempQty = tempQty + 1;
        summary[indexPos] = {
          qty: tempQty,
          pid: summary[indexPos].pid,
          name: summary[indexPos].name,
        };
      } else {
        // this object IS NOT in the summary basket.
        // so let's put it into the summary basket - at the end of the
        // array
        summary[summary.length] = {
          qty: 1,
          pid: props.stateBasket[i].pid,
          name: props.stateBasket[i].name,
        };
      } // end if
    } // end for
  } // end else

  return (
    <>
      {summary.length > 0 && (
        <>
          <h1>Your summarised basket (all items)</h1>
          {summary.map((v, index) => (
            <p key={index}>
              Item {index + 1}: {v.pid} {v.name}, Quantity: {v.qty}
            </p>
          ))}
        </>
      )}
    </>
  );
}

export default App;

