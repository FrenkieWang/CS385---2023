import React, { useEffect, useState } from "react";

function App() {
  // the data response from the API - initially empty array
  const [data, setData] = useState([]);
  // a flag to indicate the data is loading - initially false
  const [loading, setLoading] = useState(false);
  // a flag to indicate an error, if any - initially null.
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  function onSearchFormChange(event) {
    setSearchTerm(event.target.value);
  }

  //useEffect is a React Hook
  // lets you synchronize a component with an external system.
  useEffect(() => {
    // This is just a static JSON file - so not a 'real' API
    const URL =
      "https://github.com/petermooney/cs385/blob/main/trains/trainData1000.json";

    async function fetchData() {
      try {
        const response = await fetch(URL);
        const json = await response.json(); // wait for the JSON response
        setLoading(true);
        // IMPORTANT - look at the JSON response - look at the structure
        setData(json.flightTimes); // IMPORTANT - the JSON response is
        // assigned to 'data' as an array of JSON objects
      } catch (error) {
        setError(error); // take the error message from the system
        setLoading(false);
      } // end try-catch block
    } // end of fetchData

    fetchData(); // invoke fetchData in useEffect
  }, []); // end of useEffect
  // notice the empty square brackets here?
  // This means that the useEffect hook does not depend
  // on any other variable. Therefore, here it will only
  // happen once.

  if (error) {
    return <h1>Opps! An error has occurred here: {error.toString()}</h1>;
  } else if (loading === false) {
    return <h1>Loading Data..... ... please wait!</h1>;
  } else {
    return (
      // send the data to the ResultsComponent for render
      <>
        <ResultsComponent APIData={data} searchTermFromParent={searchTerm} onSearchFormChangeFromParent={onSearchFormChange} />
      </>
    );
  } // end else
} // end App() function or component

// This is our Results Component
// This component will display the contents
// the response of the API call from above.

function ResultsComponent(props) {
  // Creating a basic filter for times
  // for our purposes we can use very simple time comparison.
  // We assume all flights are TODAY

  function flightTimeFilter() {
    return function (flightObject) {
      // The arrival property of the data is HH:MM
      const timeParts = flightObject.arrival.split(":");
      let h = timeParts[0]; // extract the hour
      let m = timeParts[1]; // extract the minute
      // create a Javascript Date Object
      let flightDate = new Date();
      flightDate.setHours(h);
      flightDate.setMinutes(m);

      return flightDate >= new Date();
    };
  }

  // A standard search for a string within the
  // departure or destination property values
  function flightDeptDestFilter(searchTerm) {
    return function (flightObject) {
      let dept = flightObject.dept.toLowerCase();
      let dest = flightObject.dest.toLowerCase();

      return (
        searchTerm != "" &&
        (dept.includes(searchTerm.toLowerCase()) ||
          dest.includes(searchTerm.toLowerCase()))
      );
    };
  }

  // here we apply the filter(s) directly to the API response
  let localAPIData = 
  props.APIData.filter(flightDeptDestFilter(props.searchTermFromParent)).filter(flightTimeFilter());
  return (
    <>
      <h1>Number of flights returned: {localAPIData.length}</h1>
      <input type="text" value = {props.searchTermFromParent} onChange={props.onSearchFormChangeFromParent}></input>
      <table border="1">
        <thead>
          <tr>
            <th>Pilot</th>
            <th>Flight No.</th>
            <th>Dept.</th>
            <th>Dest</th>
            <th>Arrival</th>
          </tr>
        </thead>
        <tbody>
          {localAPIData.map((p, index) => (
            <tr key={index}>
              <td>
                <i>{p.aircraft.captain}</i>
              </td>
              <td>
                <b>{p.id}</b>
              </td>
              <td>
                <b>{p.dept}</b>
              </td>
              <td>
                <b>{p.dest}</b>
              </td>
              <td>{p.arrival}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default App;
