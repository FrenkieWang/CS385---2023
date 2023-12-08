import React from "react";
import { BrowserRouter as
   Router, Routes, Route, Link } from "react-router-dom";

import PageA from "./routes/PageA";
import PageB from "./routes/PageB";
import PageC from "./routes/PageC";

function App(){
  return(
    <Router>
      <div>
        <h1>Welcome to CS385 React Router!</h1>
        <b>Route Layer 1 - Home/A/B/C</b>

        <br/><Link to="/">Home Page</Link>
        <br/><Link to="/a">Page A</Link>
        <br/><Link to="/b">Page B</Link>
        <br/><Link to="/c">Page C</Link>

        <Routes>
          <Route path="/" element={<h2>This is Home Page</h2>} />
          {/* Catch all route that begin with '/a' */}
          <Route path="/a/*" element={<PageA />} />
          <Route path="/b" element={<PageB />} />
          <Route path="/c" element={<PageC />} />
        </Routes>
      </div>
    </Router>
  ); 
} 

export default App;

// Before you run the project, remember to install Router
// [npm install react-router-dom]