import SignIn from "./SignIn";
import SignOut from "./SignOut";
import PalletDashboard from "./PalletDashboard";

import React, { useState } from "react";

function App() {
  // create an authenticated user object
  // initially this is null (user not authenticated)
  const [theAuthUser, setTheAuthUser] = useState(null);
  const [registered, setRegistration] = useState(false);

  function toggleRegistration(){
    setRegistration(!registered);
  }
  
  return (
    <div className="container">
      <h1>The CS385 Shipping Company</h1>
      <hr />
      <div className="App">
        {/* if theAuthUser object is not null */}
        {!registered && theAuthUser && (
          <>
            <PalletDashboard currentUser={theAuthUser} />
            <SignOut setTheAuthUser={setTheAuthUser} />
          </>
        )}
        {/* if theAuthUser object is null */}
        {!registered && !theAuthUser && 
        <SignIn setTheAuthUser={setTheAuthUser} toggleRegistration={toggleRegistration}/>}
        {registered && 
        <div>
          <h3>Your account is registered successflly!</h3>
          <button onClick = {toggleRegistration}>Close the tab!</button>
        </div>
}
      </div>
    </div>
  );
}
export default App;
