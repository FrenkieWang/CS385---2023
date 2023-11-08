import React from "react";
/**
 * The App component in React. Here we have a very simple application.
 * Notice the return statement:
 * Each piece of Javascript is enclosed in curly brackets.
 * Try refreshing the browser page and see how the time changes.
 * The app gives a different message depending on the value of y
 */

function App() {
  // This is the App function or "component"
  let x = 10;
  let y = Math.random() * 10; // Javascript generates a random number
  // we get the current date and time from Javascript
  let currentTime = new Date().toLocaleString();
  let message = "Blank"; // message is a string
  if (y >= 5) {
    message = "Goodbye, CS385";
    x = y;
  } else {
    message = "Hello, CS385";
    x = y;
  }
  // return - this is where the JSX or your Javascript and HTML
  // is returned to the calling environment and rendered as your 'app'
  return (
    <>
      <p>
        <h1>{message}</h1> Rendered at {currentTime}
      </p>
      <p>To render or print the value of x we write {x}</p>
      <p>
        To render or print the value of an expression such as 10 times x we
        write {10 * x}
      </p>
      <p>Value of 4 times x plus 100 is {4 * x + 100}</p>
      <p>
        We can use Javascript functions inside curly backets such as rounding
        {Math.round(4 * x + 100)}
      </p>
      <p>
        We can use String functions inside curly backets such as
        <b>{message.toUpperCase()}</b> or <b>{message.toLowerCase()}</b>
      </p>
    </>
  );
}
export default App; // notice how this matches the function App()
