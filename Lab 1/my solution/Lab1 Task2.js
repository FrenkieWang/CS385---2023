import React, {useRef, useState} from "react";
import {companies} from "./companies.js";

function checkByEmployees(input){
  return function (objectArray){
    return objectArray.employees >= Number(input);
  }
}

function checkByCompany(input){
  return function (objectArray){
    let n = input.length;

    let companyLower = objectArray.company.toLowerCase();
    let inputLower = input.toLowerCase();

    // if (n <= 0) return false
    // else 
    return companyLower.includes(inputLower);
  }

}

const App = () => {
  var importedArrays = companies;

  const companyNameRef = useRef(null);
  const employeesRef = useRef(null);
  const [companyValue, setCompanyValue] = useState("");
  const [numberValue, setNumberValue] = useState(0);

  function SearchCompany() {
    console.log(companyNameRef.current.value);
    setCompanyValue(companyNameRef.current.value);
  }

  function SearchEmployees() {
    console.log(employeesRef.current.value);
    setNumberValue(employeesRef.current.value);
  }


  return (
    <>
    <input type="text" ref={companyNameRef} onChange = {SearchCompany} />Filter by Company Name    <br></br>

    {/* Bigger Than: <input type="text" ref={employeesRef} />
    <button onClick={SearchEmployees}>Filter by Employees</button> */}
      <select ref={employeesRef} onChange={SearchEmployees}>
        <option value="300">300</option>
        <option value="500">500</option>
        <option value="800">800</option>
        <option value="1100">1100</option>
      </select>

    <table border = "1">
      <thead>
        <tr>
          <th>CID</th>
          <th>Company</th>
          <th>Employees</th>
          <th>Material</th>
        </tr>
      </thead>
      <tbody>
        {importedArrays.filter(checkByCompany(companyValue)).filter(checkByEmployees(numberValue)).map((a,index) => (
          <tr key = {index}>
            <td>{a.cid}</td>
            <td>{a.company}</td>
            <td>{a.employees}</td>
            <td>{a.material}</td>
          </tr>
        ))}
      </tbody>
    </table>


    </>
  );
}

export default App;

