import React from "react";
import { companies } from "./companies";

// task 2 - part c
function companyName(searchStr) {
  return function (companyObject) {
    let n = searchStr.length;

    let searchStrLower = searchStr.toLowerCase();
    let targetName = companyObject.company.toLowerCase();

    if (n <= 0) return false;
    else return targetName.includes(searchStrLower);
  };
}
// task 2 - part b
function companyEmployees(emp) {
  return function (companyObject) {
    return companyObject.employees >= emp;
  };
}

function App() {
  return (
    <>
      <h1>CS385 Lab 1 Task 2</h1>
      {companies.filter(companyEmployees(500)).map((c, index) => (
        <p key={index}>
          <b>{c.company}</b>, Employees: {c.employees}, Materials: {c.material}
        </p>
      ))}
    </>
  );
}

export default App;

