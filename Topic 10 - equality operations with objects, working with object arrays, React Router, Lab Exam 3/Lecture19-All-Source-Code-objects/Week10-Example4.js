import React from "react";

function App() {
  let xObject = { id: 4, name: "Peter" };
  let yObject = {};
  // assign the properties individually
  yObject.id = xObject.id;
  yObject.name = xObject.name;
  return (
    <>
      <h1>Using Object.is()</h1>
      {Object.is(xObject, yObject) && <h1>equal</h1>}
      {!Object.is(xObject, yObject) && <h1>unequal</h1>}
    </>
  );
}
export default App;
// Object.is(a,b) 比较对象a和b，两个 值+内存 引用是否相同
