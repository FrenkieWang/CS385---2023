import React, { useState } from "react";

function App() {
  const [credit, setCredit] = useState("");
  const [error, setError] = useState(null);
  // when the user presses the submit button. 
  function handleSubmit(e) {
    //used to stop the default behavior of an HTML form from taking place
    e.preventDefault();
    // Regular expression to check for credit card numbers (simplified)
    const cardPattern = /^[0-9]{10,12}$/;
    // test the regular expression 
    if (cardPattern.test(credit) === false) {
      setError(true);
    } else {
      setError(false);
    }
  }
  // when the user is typing in their credit card number 
  function handleCreditCardInput(e) {
    setCredit(e.target.value);
  }

  return (
    <div class="container-fluid">
      <form onSubmit={handleSubmit} autocomplete="off">
        <h1>Supply Credit Card details</h1>
        <div className="formInput">
          <label for="ccard" class="form-label">Credit Card</label>
          <input id="ccard" type="text" name="credit" value={credit}
            placeholder="Type your credit card number"
            onChange={handleCreditCardInput}/>
        </div>
        <button>Pay Now</button>

        {error === true && <h1>Error: Credit card numbers must be 10 -12 digits</h1>}
        {error === false && (
          <>
            <h1>Your credit card number is valid</h1>{" "}
            <h2>Your card is <mark>{credit}</mark></h2>
          </>
        )}
      </form>
    </div>
  );
}

export default App;

