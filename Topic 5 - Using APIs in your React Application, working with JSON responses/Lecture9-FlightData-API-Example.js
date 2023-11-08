import React, { useEffect, useState } from "react";

function App() {
  // the data response from the API - initially empty array
  const [data, setData] = useState([]);
  // a flag to indicate the data is loading - initially false
  const [loading, setLoading] = useState(false);
  // a flag to indicate an error, if any - initially null.
  const [error, setError] = useState(null);

  //useEffect is a React Hook
  // lets you synchronize a component with an external system.
  useEffect(() => {
    // This is just a static JSON file - so not a 'real' API
    const URL =
      "https://raw.githubusercontent.com/petermooney/cs385/main/flights/today.json";

    async function fetchData() {
      try {
        const response = await fetch(URL);
        const json = await response.json(); // wait for the JSON response
        setLoading(true);
        // IMPORTANT - look at the JSON response - look at the structure
        setData(json); // IMPORTANT - the JSON response is
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
    return <h1>Opps! An error has occurred: {error.toString()}</h1>;
  } else if (loading === false) {
    return <h1>Loading Data...... please wait!</h1>;
  } else {
    return (
      // send the data to the ResultsComponent for render
      <>
        <ResultsComponent APIData={data} />
      </>
    );
  } // end else
} // end App() function or component

// This is our Results Component
// This component will display the contents
// the response of the API call from above.

function ResultsComponent(props) {
  // To reduce the array size - let's just take
  // a smaller number of elements.
  let dataLength = props.APIData.length;
  let n = Math.floor(Math.random() * dataLength);
  // now use slice() to take the first n objects in the array
  let localAPIData = props.APIData.slice(0, n);
  return (
    <>
      <h1>Number of flights returned: {localAPIData.length}</h1>
      <table border="1">
        <thead>
          <tr>
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
