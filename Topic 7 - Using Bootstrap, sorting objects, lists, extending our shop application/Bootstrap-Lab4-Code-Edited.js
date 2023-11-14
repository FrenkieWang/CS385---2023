import React, { useEffect, useState } from "react";

function App() {
  // the data response from the API - initially empty array
  const [data, setData] = useState([]);
  // a flag to indicate the data is loading - initially false
  const [loading, setLoading] = useState(false);
  // a flag to indicate an error, if any - initially null.
  const [error, setError] = useState(null);

  useEffect(() => {
    // Change the URL to your chosen JSON file as per Lab 4
    // we can choose ANY of the JSON files in the trains folder.
    const URL =
      "https://raw.githubusercontent.com/petermooney/cs385/main/trains/trainData25.json";

    async function fetchTrainData() {
      try {
        const response = await fetch(URL);
        const trainDataJson = await response.json(); // wait for the JSON response
        setLoading(true);
        // IMPORTANT - look at the JSON response - look at the structure
        // This is where many errors occur!
        // Check out the JSON in raw format - the array is called 'trainService'
        setData(trainDataJson.trainService);
      } catch (e) {
        setError(e); // take the error message from the system
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
        <TrainDisplayComponent APIData={data} />
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
      <div class="container-fluid">
        <div class="table-responsive">
          <table  class="table table-hover table-bordered border-primary table-sm">
            <thead>
              <tr class="table-success">
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
                  <td class="table-info">
                    <i>{t.details.operator}</i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default App;

