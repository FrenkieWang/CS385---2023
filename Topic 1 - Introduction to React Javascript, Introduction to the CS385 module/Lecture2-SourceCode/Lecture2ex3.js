import React from "react";

function App() {
  // Here we have an array called companies with 5 JSON objects
  // representing companies. Each object has four properties.
  const companies = [
    { cid: 1, company: "Cassin Inc", employees: 105, material: "Wood" },
    { cid: 2, company: "Koch Inc", employees: 62, material: "Wood" },
    { cid: 3, company: "Legros-Haley", employees: 18, material: "Tile" },
    { cid: 4, company: "Grant Wisoky",employees: 61,material: "Steel"},
    { cid: 5, company: "Hills LLC", employees: 89, material: "Glass" }
  ];
  // Here we use a map function (applied to the companies array)
  // we use an index to create a UNIQUE KEY or value for each <p>
  const companiesJSX = companies.map((c, index) => (
    <p key={index}>
      <b>{c.company}</b>,Emp: {c.employees}, {c.material}
    </p>
  ));
  // Finally, the return statement - the JSX generated is then returned
  // and RENDERED as your 'app'.

  return <>{companiesJSX}</>;
}
export default App; // notice how this matches the function App()

