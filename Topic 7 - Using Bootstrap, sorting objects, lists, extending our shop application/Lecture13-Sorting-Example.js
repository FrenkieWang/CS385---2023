import React, { Component } from "react";
import { medicalData } from "./medical_data";

const localMedicalData = medicalData;

function App() {
  // This is our compartorMethod for comparing costs
  // This will sort using the cost_cents property in the JSON file
  function compareCost(medA, medB) {
    let comparison = 0;

    if (medA.cost_cents > medB.cost_cents) comparison = 1;
    else if (medA.cost_cents < medB.cost_cents) comparison = -1;
    else comparison = 0;

    return comparison;
  }

  // This is our compartor Method for comparing weights
  // This will sort using the weight_grams property in the JSON file
  // this is ascending order.
  function compareWeightAsc(medA, medB) {
    let comparison = 0;

    if (medA.weight_grams > medB.weight_grams) comparison = 1;
    else if (medA.weight_grams < medB.weight_grams) comparison = -1;
    else comparison = 0;

    return comparison;
  }

  // This is our compartor Method for comparing weights
  // This will sort using the weight_grams property in the JSON file
  // this is decending order.
  function compareWeightDesc(medA, medB) {
    let comparison = 0;

    if (medA.weight_grams > medB.weight_grams) comparison = -1;
    else if (medA.weight_grams < medB.weight_grams) comparison = 1;
    else comparison = 0;

    return comparison;
  }

  // This is our compartor Method for comparing names
  // This will sort using the medicine_name property in the JSON file
  // this is ascending order.
  // case-insensitive because of the use of toLowerCase()

  function compareName(medA, medB) {
    let comparison = 0;
    let medAStr = medA.medicine_name.toLowerCase();
    let medBStr = medB.medicine_name.toLowerCase();

    if (medAStr > medBStr) comparison = 1;
    else if (medAStr < medBStr) comparison = -1;
    else comparison = 0;

    return comparison;
  }
  // let's use a simple filter function on the weight_grams property
  function filterWeight(w) {
    return function (medObj) {
      return medObj.weight_grams < w;
    };
  }

  return (
    <>
      <h1>CS385 Medicines App</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Weight (g)</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {localMedicalData
            .filter(filterWeight(3))
            .sort(compareWeightDesc)
            .map((a) => (
              <tr key={a.med_id}>
                <td>
                  <b>{a.medicine_name}</b>
                </td>
                <td>
                  <i>{a.weight_grams}</i>
                </td>
                <td> {a.cost_cents}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  ); // end of return statement
}

export default App;

