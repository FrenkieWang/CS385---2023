import React, { useState } from "react";

function App() {
  const [stars, setStars] = useState([
    { sname: "Polaris (North Star)", lyears: 4.3 },
    { sname: "Sirius", lyears: 6.8 },
    { sname: "Alpha Centauri System", lyears: 4.1 },
    { sname: "Betelgeuse", lyears: 65 },
    { sname: "Rigel (Orion)", lyears: 900 }
  ]);

  const [planets, setPlanets] = useState([
    { pname: "Venus", au: 0.28 },
    { pname: "Mars", au: 0.52 },
    { pname: "Saturn", au: 8.52 },
    { pname: "Jupiter", au: 4.2 },
    { pname: "Neptune", au: 29.37 }
  ]);

  let starsPlanets = [];

  for (let i = 0; i < planets.length; i++) {
    for (let j = 0; j < stars.length; j++) {
      // currentObject is now the union of obj1 and obj2.
      //Properties in obj2 will overwrite those in obj1.
      let currentObject = {
        ...planets[i],
        ...stars[j]
      };
      starsPlanets.push(currentObject);
    }
  }

  return (
    <div className="App">
      <h1>Example 13</h1>

      {starsPlanets.map((sP, i) => (
        <li key={i}>{JSON.stringify(sP)}</li>
      ))}
    </div>
  );
}
export default App;

/* 
  sP 是一个对象，而 JSX 不直接渲染对象。
  在 React 和 JSX 中，你只能直接渲染字符串、数字、和其他一些基础类型。
  如果尝试直接渲染一个对象，会得到错误"Objects are not valid as a React child"，
  因为 React 不知道如何将对象转化为要显示的内容。

  使用 JSON.stringify(sP) 将对象转换为 JSON 字符串，这样你就可以在页面上直观地查看该对象的内容。
  这通常用于调试目的，以便于开发者理解组件的当前状态或传递的属性。
 */
