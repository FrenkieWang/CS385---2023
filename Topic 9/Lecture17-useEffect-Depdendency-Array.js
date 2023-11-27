import React, { useEffect, useState } from "react";
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
function App() {
  // the data response from the API - initially empty array
  const [data, setData] = useState([]);
  // a flag to indicate the data is loading - initially false
  const [loading, setLoading] = useState(false);
  // a flag to indicate an error, if any - initially null.
  const [error, setError] = useState(null);
  // allow user to specify gender of random users 
  const [gender, setGender] = useState("female");
  // allow user specify the number of results. 
  const [choice, setChoice] = useState(7);
  // number of user options for drop down list 
  const options = [5, 10, 15, 20, 25, 30];

  function handleListChange(e) {
    setChoice(e.target.value);
  }
  function handleGenderListChange(e) {
    setGender(e.target.value);
  }

  useEffect(() => {
    // create the URL for specific gender and number of results.
    const URL =
      "https://randomuser.me/api/?gender=" + gender + "&results=" + choice;

    async function fetchStrData() {
      try {
        const response = await fetch(URL);
        const strDataJson = await response.json(); // wait for the JSON response
        setLoading(true);
        setData(strDataJson.results);
      } catch (e) {
        setError(e); // take the error message from the system
        setLoading(false);
      } // end try-catch block
    } // end of fetchData

    fetchStrData(); // invoke fetchStrData in useEffect
  }, [choice, gender]); // end of useEffect with two state variables

  if (error) {
    return <h1>Opps! An error has occurred: {error.toString()}</h1>;
  } else if (loading === false) {
    return <h1>Waiting for the String data ...... waiting....</h1>;
  } else {
    return (
      // send the data to the StrDisplayComponent for render
      <>
        <form>
          Pick number of users
          <select onChange={handleListChange}>
            {options.map((s, key) => (
              <option key={key} value={s}>
                <strong> {s}</strong>
              </option>
            ))}
          </select>
        </form>

        <form>
          Pick gender
          <select onChange={handleGenderListChange}>
            <option key="1" value="female">Female</option>
            <option key="2" value="male">Male</option>
          </select>
        </form>

        <StrDisplayComponent APIData={data} />
      </>
    );
  } // end else
} // end App() function or component

// This is our StrDisplayComponent
// This component will display the contents
// the response of the API call from above.

function StrDisplayComponent(props) {
  return (
    <>
      <h1>Random User Display: {props.APIData.length} Users</h1>

      {props.APIData.map((t, index) => (
        <p key={index}>
          <i>
            User ({index + 1}): {t.name.title} {t.name.first} {t.name.last}
          </i>
          <br />
          <b>
            {t.location.street.number},{t.location.street.name}
          </b>
          <br />
          <b>
            {t.location.city},{t.location.state},{t.location.country}
          </b>
        </p>
      ))}
    </>
  );
}

export default App;

