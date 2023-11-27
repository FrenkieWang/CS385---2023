import React, { useState } from "react";

import SignIn from "./SignIn";
import SignOut from "./SignOut";
import PalletDashboard from "./PalletDashboard";
import CreateConfimation from "./CreateConfirmation";

function App() {
  // create an authenticated user object
  // initially this is null (user not authenticated)
  const [theAuthUser, setTheAuthUser] = useState(null);
  const [created, setCreation] = useState(false);

  function toggleCreation(){
    setCreation(!created);
  }
  
  return (
    <div className="container">
      <h1>The CS385 Shipping Company</h1>
      <hr />
      <div className="App">
        {/* if theAuthUser object is not null */}
        {!created && theAuthUser && (
          <>
            <PalletDashboard currentUser={theAuthUser} />
            <SignOut setTheAuthUser={setTheAuthUser} />
          </>
        )}

        {/* if theAuthUser object is null */}
        {!created && !theAuthUser && 
        <SignIn setTheAuthUser={setTheAuthUser} toggleCreation={toggleCreation}/>}

        {created && <CreateConfimation toggleCreation={toggleCreation}/>
}
      </div>
    </div>
  );
}
export default App;
