import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import PageA from "./routes/PageA";
import PageB from "./routes/PageB";
import PageC from "./routes/PageC";

function App() {
  const [variable, setVariable] = useState(0);

  function changeVar() {
    setVariable(variable + 1);
  }
  return (
    <Router>
      <div>
        <h1>Welcome to CS385 React Router!</h1>
        <h2>Variable has the value {variable}</h2>
        <button onClick={changeVar}>Increment Variable</button>

        <p>Route Layer 1 - Home/A/B/C</p>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/a">Page A</Link>
          </li>
          <li>
            <Link to="/b">Page B</Link>
          </li>
          <li>
            <Link to="/c">Page C</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<h2>This is Home Page</h2>} />
          {/* Catch all route that begin with '/a' */}
          <Route path="/a/*" element={<PageA theVar={variable} />} />
          <Route path="/b" element={<PageB theVar={variable} />} />
          <Route path="/c" element={<PageC theVar={variable} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// Before you run the project, remember to install Router
// [npm install react-router-dom]
