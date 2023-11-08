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

// Main Component
const App = () => {
  var importedArrays = companies;

  const companyNameRef = useRef(null);
  const employeesRef = useRef(null);
  const [companyValue, setCompanyValue] = useState("");
  const [employeeNumber, setEmployeeNumber] = useState(0);

  function SearchCompany() {
    console.log(companyNameRef.current.value);
    setCompanyValue(companyNameRef.current.value);
  }

  function SearchEmployees() {
    console.log(employeesRef.current.value);
    setEmployeeNumber(employeesRef.current.value);
  }

  function ReturnToDefault(){
    setCompanyValue("");
    setEmployeeNumber(0);
    document.getElementById("textBox").value = "" ;
    document.getElementById("scrollBar").value = 0;
  }


  return (
    <>
    <h3 style={{color: "red"}}>Filter by Company Name </h3>
    <input 
      id = "textBox"
      type="text"
      ref={companyNameRef}
      onChange = {SearchCompany} 
    /> 
    <br/>    
    <h5>Company Name: {companyValue}</h5>

    {/* Bigger Than: <input type="text" ref={employeesRef} />
    <button onClick={SearchEmployees}>Filter by Employees</button> */}
      {/* <select ref={employeesRef} onChange={SearchEmployees}>
        <option value="0">0</option>
        <option value="500">500</option>
        <option value="800">800</option>
        <option value="1100">1100</option>
      </select> */}

    <h3 style={{color: "purple"}}>Filter by Employee Number </h3>
      <input
        id = "scrollBar"
        type="range"
        ref = {employeesRef}
        min = "0"
        max = "1100"
        defaultValue = "0"
        onChange = {SearchEmployees}
        style={{width: "500px"}}
      />
      <h5>Employee Number: {employeeNumber}</h5>

    <button onClick={ReturnToDefault}>Return to Default</button>

    <hr/>    

    <h1>Company Information</h1>
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
        {importedArrays.filter(checkByCompany(companyValue)).filter(checkByEmployees(employeeNumber)).map((a,index) => (
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