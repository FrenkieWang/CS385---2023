import React, { useState } from "react";

function App() {
  // Sample state with an array of objects
  const [data, setData] = useState([
    { id: 1, name: "Peter", value: 10 },
    { id: 2, name: "Alison", value: 20 },
    { id: 3, name: "Mary", value: 30 },
  ]);

  function updateSpecificObjectProperty(id, newValue) {
    // Use map to create a new array with the updated object
    const updatedData = data.map((item) => {
      if (item.id === id) {
        // If it's the object we want to update, create a new object with the updated value
        // The spread operator also works for individual object properties.
        // 返回这个对象，在此基础上修改这个对象的value值
        return { ...item, value: item.value + newValue };
      }
      // If it's not the object we want to update, keep it as it is
      return item;
    });

    // Update the state with the new array
    setData(updatedData);
  }

  return (
    <>
      <h1>Array of Objects</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.name}: {item.value}
            <button onClick={() => updateSpecificObjectProperty(item.id, 5)}>
              Update {item.name} by 5
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

