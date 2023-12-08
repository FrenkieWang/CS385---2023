import React from "react";
// write our own function to perform shallow comparison of two objects
// a and b are unknown objects.
function isEquivalent(a, b) {
  let aPropNames = Object.getOwnPropertyNames(a);
  let bPropNames = Object.getOwnPropertyNames(b);

  // if the two objects do not have the same number of properties
  if (aPropNames.length !== bPropNames.length) {
    return false;
  }
  // Now check each property in Object A. Check if this
  // property exists in Object B.
  for (let i = 0; i < aPropNames.length; i++) {
    let propName = aPropNames[i];
    if (a[propName] !== b[propName]) {
      return false;
    }
  } // end for
  // if we get out of the for loop then our objects are the same
  return true;
}

function App() {
  let xObject1 = { id: 54, price: 27.8, product: "Router" };
  let xObject2 = { id: 54, price: 27.800001, product: "Router" };

  let xObject3 = { id: 54, price: 27.8, product: "Router" };
  let xObject4 = { id: 54, price: 27.8, product: "Router" };
  let xObject5 = { id: 54, price: 27.8, product: "Router",name:"Electron" };

  return (
    <>
      <h1>Example 7</h1>
{isEquivalent(xObject1, xObject2) && <b>xObject1,xObject2 EQUAL</b>}
{!isEquivalent(xObject1,xObject2) && <b>xObject1,xObject2 NOT EQUAL</b>}
<br />
{isEquivalent(xObject3, xObject4) && <b>xObject3,xObject4 EQUAL</b>}
{!isEquivalent(xObject3,xObject4) && <b>xObject3,xObject4 NOT EQUAL</b>}
<br />
{isEquivalent(xObject4,xObject5) && <b>xObject4,xObject5 EQUAL</b>}
{!isEquivalent(xObject4,xObject5) && <b>xObject4,xObject5 NOT EQUAL</b>}

    </>
  );
}
export default App;
