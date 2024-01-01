import React, { Component } from "react";

class App extends Component {
  render() {
    const employees = [
      { id: 1, name: "Alice" },
      { id: 21, name: "Simon" },
      { id: 1, name: "Sarah" },
      { id: 21, name: "Simon" },
      { id: 2, name: "Anne" },
      { id: 1, name: "Sarah" },
      { id: 23, name: "Toby" },
    ];
    let uniqueIds = [];

    // element is the object in the employees array
    // it will be checked for unique-ness

    function checkObject(element) {
      let isDuplicate = uniqueIds.includes(element.id);

      if (!isDuplicate) {
        // place the id into the array uniqueIds
        uniqueIds.push(element.id);
        return true;
      } else return false;
    }

    let uniqueEmployees = employees.filter(checkObject);

    return (
      <>
        {uniqueEmployees.map((v, index) => (
          <p key={index}>
            {v.id} {v.name}
          </p>
        ))}
      </>
    ); // end of return statement
  } // end of render function
} // end of class

export default App;

