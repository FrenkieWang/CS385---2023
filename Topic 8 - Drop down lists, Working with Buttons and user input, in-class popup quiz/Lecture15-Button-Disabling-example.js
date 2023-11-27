import React, { useState } from "react";
function App() {
  const [clicks, setClicks] = useState(0);
  const [active, setActive] = useState(true);

  function handleButtonClick() {
    if (clicks < 10) setClicks(clicks + 1);
    else setActive(false);
  }
  function handleButtonReset() {
    setClicks(0);
    setActive(true);
  }

  return (
    <>
      <div class="container-fluid">
        <h1>Activating and Deactivating Buttons</h1>
        <button disabled={!active}
          type="button" class="btn btn-primary btn-lg"
          onClick={handleButtonClick}>Next+</button>

        <button
          type="button" class="btn btn-warning btn-lg"
          onClick={handleButtonReset}>Reset</button>
      </div>
      <h1>Current value of clicks is {clicks}</h1>
    </>
  );
}

export default App;

