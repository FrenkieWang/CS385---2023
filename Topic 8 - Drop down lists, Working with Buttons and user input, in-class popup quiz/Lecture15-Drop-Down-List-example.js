import React, { useState } from "react";
function App() {
  const [myChoice, setMyChoice] = useState(null);

  let desserts = [
    {dessert: "Tiramisu" },{dessert: "Mousse" },{dessert: "Macarons" },
    {dessert: "Ice-cream" },{dessert: "Cupcake" },{dessert: "Apple Pie" }];

    function sortDesserts(dx, dy) {
      let DX = dx.dessert.toUpperCase();
      let DY = dy.dessert.toUpperCase();
      if (DX > DY) return 1;
      // alphabetical order
      else if (DX < DY) return -1;
      else return 0;
    }
  function handleListChange(event) {
    setMyChoice(event.target.value);
  }
  return (
    <>
      <div class="container-fluid">
        <h1>CS385 Desserts</h1>
        <form>
          <label for="mydessertlist" class="form-label">Pick dessert</label>
          <select onChange={handleListChange}
            class="form-control" id="mydessertlist">
            {desserts.sort(sortDesserts).map((sweet, key) => (
              <option key={key} value={sweet.dessert}>
               <strong> {sweet.dessert}</strong>
              </option>
            ))}

          </select>
        </form>
        {myChoice && <p>Your choice: {myChoice}</p>}
      </div>
    </>
  );
}



export default App;

