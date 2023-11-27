import React from "react";

const CreateConfimation = (props) => {

  return (
    <div>
        <h3>Your account is created successflly!</h3>
        <button onClick = {props.toggleCreation}>Close the tab!</button>
    </div>
  );
};

export default CreateConfimation;
