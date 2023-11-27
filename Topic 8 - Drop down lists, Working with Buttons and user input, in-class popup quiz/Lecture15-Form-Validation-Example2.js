import React, { useState } from "react";

function App() {
  const [account, setAccount] = useState("");
  const [sortCode, setSortCode] = useState("");
  const [errorAcc, setErrorAcc] = useState(true);
  const [errorSort, setErrorSort] = useState(true);

  //account numbers must have capital letter than 5 digits
  function handleAccountInput(e) {
    setAccount(e.target.value); // update the account number variable
    // check the pattern 
    const accPattern = /^[A-Z]{1}\d{5}$/;
    if (accPattern.test(e.target.value)) {
      setErrorAcc(false);
    } else {
      setErrorAcc(true);
    }
  }

  // sort code must be digits only - in pairs
  // separated by hyphens. For example, 14-56-17
  function handleSortCodeInput(e) {
    setSortCode(e.target.value); // update the sort code variable
    // check the pattern
    const sortPattern = /^\d{2}-\d{2}-\d{2}$/;
    if (sortPattern.test(e.target.value)) {
      setErrorSort(false);
    } else {
      setErrorSort(true);
    }
  }

  return (
    <div class="container-fluid">
      <form>
        <h1>Supply account details</h1>
        <div class="formInput">
          <label for="account" class="form-label">Account Number</label>
          <input id="account" type="text" name="account" value={account}
            placeholder="Type your account number here"
            onChange={handleAccountInput}/>
          <br/>
          <label for="sortCode" class="form-label">Sort Code</label>
          <input id="sortCode" type="text" name="sortCode" value={sortCode}
            placeholder="Type your sort code here" onChange={handleSortCodeInput}/>
        </div>

        <button disabled={errorAcc || errorSort}>Check</button>
      </form>

      {errorAcc && (
        <><div class="alert alert-warning" role="alert">
            Please type a valid account number
          </div></>)}

      {errorSort && (
        <><div class="alert alert-warning" role="alert">
            Please type a valid sort code number
          </div></>)}
    </div>
  );
}

export default App;

