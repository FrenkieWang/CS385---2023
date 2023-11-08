import React, { useEffect, useState } from "react";

// This is template code - IT WILL GENERATE ERRORS when loaded 
// You will need to make two changes to the code (as outlined in the Lab Instructions)

function App() {
  // the data response from the API - initially empty array
  const [data, setData] = useState([]);
  // a flag to indicate the data is loading - initially false
  const [loading, setLoading] = useState(false);
  // a flag to indicate an error, if any - initially null.
  const [error, setError] = useState(null);

  useEffect(() => {
    // Change the URL to your chosen JSON file as per Lab 4
    // You will need to copy the URL of one of the 'raw' JSON files 
    // on GitHub. Please read the lab instructions. 
    const URL =
      "https://raw.githubusercontent.com/petermooney/cs385/main/trains/trainData500.json";

    async function fetchTrainData() {
      try {
        const response = await fetch(URL);
        const trainDataJson = await response.json(); // wait for the JSON response
        setLoading(true);
        // IMPORTANT - look at the JSON response - look at the structure
        // This is where many errors occur!
        setData(trainDataJson.trainService);
      } catch (error) {
        setError(error); // take the error message from the system
        setLoading(false);
      } // end try-catch block
    } // end of fetchData

    fetchTrainData(); // invoke fetchTrainData in useEffect
  }, []); // end of useEffect

  if (error) {
    return <h1>Opps! An error has occurred: {error.toString()}</h1>;
  } else if (loading === false) {
    return <h1>Waiting for the train data ...... waiting....</h1>;
  } else {
    return (
      // send the data to the TrainDisplayComponent for render
      <>
        {/* <TrainDisplayComponent APIData={data} /> */}
        <DeutscheBahnComponent APIData={data} />
      </>
    );
  } // end else
} // end App() function or component

// This is our TrainDisplayComponent
// This component will display the contents
// the response of the API call from above.

function TrainDisplayComponent(props) {
  return (
    <>
      <h1>The CS385 Train Tracker App</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Dept.</th>
            <th>Dest</th>
            <th>Operator</th>
          </tr>
        </thead>
        <tbody>
          {props.APIData.map((t, index) => (
            <tr key={index}>
              <td>
                <b>{t.departure}</b>
              </td>
              <td>
                <b>{t.destination}</b>
              </td>
              <td>
                <b>{t.details.operator}</b>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
function DeutscheBahnComponent(props) {

  function operatorFilterFunction(searchTerm) {
    return function (trainObject) {
      let operator = trainObject.details.operator.toLowerCase();
      return (
        searchTerm !== "" &&
        (operator.includes(searchTerm.toLowerCase()))
      );
    };
  }


  return (
    <>
      <h1>The CS385 Train Tracker App</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Service No.</th>
            <th>Dept.</th>
            <th>Dest</th>
            <th>Operator</th>
          </tr>
        </thead>
        <tbody>
          {props.APIData.filter(operatorFilterFunction("Deutsche Bahn")).map((t, index) => (
            <tr key={index}>
              <td>
                <b>{t.serviceNumber}</b>
              </td>
              <td>
                <b>{t.departure}</b>
              </td>
              <td>
                <b>{t.destination}</b>
              </td>
              <td>
                <b>{t.details.operator}</b>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );

}
export default App;