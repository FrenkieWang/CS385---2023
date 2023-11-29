import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <h1>Welcome to CS385 React Router!</h1>
      <b>Route Layer 1 - Home/A/B/C</b>
      <br/><Link to="/a">Page A</Link>
      <br/><Link to="/b">Page B</Link>
      <br/><Link to="/c">Page C</Link>
      <br/><Link to="/">Home Page</Link>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/a/*" element={<PageA />} />
        <Route path="/b" element={<PageB />} />
        <Route path="/c" element={<PageC />} />
      </Routes>
    </div>
  </Router>
);

const PageA = () => (
  <div>
    <h2>This is Page A</h2>
    <b>This is Route Layer 2 - A1/A2</b>

    <br/><Link to="/a/a1">Page A1</Link>
    <br/><Link to="/a/a2">Page A2</Link>

    <Routes>
      <Route path="a1" element={<PageA1 />} />
      <Route path="a2" element={<PageA2 />} />
    </Routes>
  </div>
);

const HomePage = () => <h2>This is Home Page</h2>;
const PageA1 = () => <h3>This is Page A1 from Page A</h3>;
const PageA2 = () => <h3>This is Page A2 from Page A</h3>;
const PageB = () => <h2>This is Page B</h2>;
const PageC = () => <h2>This is Page C</h2>;

export default App;