import { BrowserRouter as
    Router, Routes, Route, Link } from "react-router-dom";

import PageA1 from "./subRoutes/PageA1";
import PageA2 from "./subRoutes/PageA2";

function PageA () {
    return(
        <div>
            <h2>This is Page A</h2>
            <b>This is Route Layer 2 - A1/A2</b>
        
            {/* The current route of Page A is '/a'
            The route of Page A1 would be '/a/a1'
            The route of Page A2 would be '/a/a2' */}
            <br/><Link to="/a/a1">Page A1</Link>
            <br/><Link to="/a/a2">Page A2</Link>

            <Routes>
                <Route path="a1" element={<PageA1 />} />
                <Route path="a2" element={<PageA2 />} />
            </Routes>
        </div>
    );
} 

export default PageA;