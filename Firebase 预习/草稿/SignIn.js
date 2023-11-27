import React, { useState } from "react";
import {firebaseApp} from "./fbconfig";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const SignIn = (props) => {
  // we access authentication object from our
  // firebase database configuration.
  const auth = getAuth(firebaseApp);
  // our state variables for SignIn.
  // e for email, p for password
  const [inputFielde, setInputFielde] = useState("");
  const [inputFieldp, setInputFieldp] = useState("");
  // we'll need an error message state variable.
  const [error, setError] = useState("");

  // handler function when password textbox changes.
  const onChangePassword = (e) => {
    e.preventDefault();
    setInputFieldp(e.target.value);
  };

  // handler function when email textbox changes.
  const onChangeEmail = (e) => {
    e.preventDefault();
    setInputFielde(e.target.value);
  };

  // When the submit button is pressed we pass the values of the
  // state variables inputFielde, inputFieldp to our
  // firebase function signInWithEmailAndPassword
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, inputFielde, inputFieldp)
      .then((userCredentials) => {
        // Obtain the authenticated user object
        // from firebase.
        const user = userCredentials.user;
        console.log(user);
        // setTheAuthUser from the Parent App.
        // now the parent will know the user is authenticated
        props.setTheAuthUser(user);       
      })
      .catch((error) => {
        setError("Unable to logon");
      });
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, inputFielde, inputFieldp)
      .then((userCredentials) => {
        // Obtain the authenticated user object
        // from firebase.
        const user = userCredentials.user;
        console.log(user);
        // setTheAuthUser from the Parent App.
        // now the parent will know the user is authenticated
        props.setTheAuthUser(user);
        props.toggleRegistration();
      })
      .catch((error) => {
        setError("Unable to logon");
      });
  };

  return (
    <div>
      <h3>Customer Sign In</h3>
      <label htmlFor="email">Email</label>
      <br />
      <input
        onChange={onChangeEmail}
        value={inputFielde}
        type="email"
        id="email"
        name="email"
      />
      <br />
      <label htmlFor="password">password</label>
      <br />
      <input
        onChange={onChangePassword}
        value={inputFieldp}
        type="password"
        id="password"
        name="password"
      />
      <br />
      <br />
      <button onClick={handleSignIn}>Log In</button>
      <h6>New User? Create your account here!</h6>
      <button onClick={handleSignUp}>Create a User</button>
      <hr />
      <p>{error}</p>
    </div>
  );
};

export default SignIn;
