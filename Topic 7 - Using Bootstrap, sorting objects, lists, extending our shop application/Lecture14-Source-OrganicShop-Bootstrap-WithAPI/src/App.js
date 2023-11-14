import React, { useState, useEffect } from "react";

// for simplicity we use a static array for our shop inventory
// The data for your inventory could be replaced by an API.

import logoBanner from "./images/banner2.png";

import Basket from "./components/basket/Basket";
import ShowProductsComponent from "./components/products/Products";

function App() {
  // productChoice is a state variable - initially null
  const [productChoice, setProductChoice] = useState(null);
  // This is our shopping basket array - initially an empty array.
  const [basket, setBasket] = useState([]);

  // the data response from the API - initially empty array
  const [inventory, setInventory] = useState([]);
  // a flag to indicate the data is loading - initially false
  const [loading, setLoading] = useState(false);
  // a flag to indicate an error, if any - initially null.
  const [error, setError] = useState(null);

  // compare product items based on their price.
  // we want ASCENDING ORDER
  function comparePriceAsc(objA, objB) {
    let comparison = 0;
    if (objA.plant.price > objB.plant.price) comparison = 1;
    else if (objA.plant.price < objB.plant.price) comparison = -1;
    else comparison = 0;

    return comparison;
  }

  // compare function for the NAMES of plants
  // ascending - alphabetical order.
  // Javascript will figure out the alphabetical ordering in the event
  // of a tie or equal letters.
  function compareName(objA, objB) {
    let comparison = 0;
    let objAStr = objA.plant.name.toLowerCase();
    let objBStr = objB.plant.name.toLowerCase();

    if (objAStr > objBStr) comparison = 1;
    else if (objAStr < objBStr) comparison = -1;
    else comparison = 0;

    return comparison;
  }

  // Allow for switching between different product categories
  function changeProductCategory(pc) {
    setProductChoice(pc);
  }

  // add an item (object) to the shopping basket array
  function addItemToBasket(item) {
    // we use the Javascript SPREAD operator
    setBasket([...basket, item]);
  }

  // remove all items from the current basket
  // This just requires resetting the basket to
  // an empty basket
  function emptyBasket() {
    setBasket([]);
  }

  // This is used by findIndex - it simply checks if the
  // current object in the array (haystack) has the same pid as the
  // object passed (needle)
  function findObjectIndex(needle) {
    return function (haystack) {
      return haystack.pid === needle.pid;
    };
  }
  // This is used by the filter approach to object removal
  // This tries to find objects in the array (haystack)
  // that DO NOT have the same pid as the object being searched (needle)
  function findObjectFilterRemove(needle) {
    return function (haystack) {
      return haystack.pid !== needle.pid;
    };
  }

  // This removes an item (object) from the basket in state
  // we take great care not to mutate state.
  function removeItemFromBasket(item) {
    let n = basket.findIndex(findObjectIndex(item));
    setBasket([...basket.slice(0, n), ...basket.slice(n + 1, basket.length)]);
    //setBasket(basket.filter(findObjectFilterRemove(item)));
  }

  // Here is useEffect for our Organic Shop Inventory
  useEffect(() => {
    const URL =
      "https://raw.githubusercontent.com/petermooney/cs385/main/organicshop/inventory.json";

    async function fetchInventoryData() {
      try {
        const response = await fetch(URL);
        const inventoryDataJson = await response.json(); // wait for the JSON response
        setLoading(true);
        // IMPORTANT - look at the JSON response - look at the structure
        // This is where many errors occur!
        // Check out the JSON in raw format - the array is called 'inventory'
        setInventory(inventoryDataJson.inventory);
      } catch (e) {
        setError(e); // take the error message from the system
        setLoading(false);
      } // end try-catch block
    } // end of fetchInventoryData

    fetchInventoryData(); // invoke fetchInventoryData in useEffect
  }, []); // end of useEffect

  if (error) {
    return <h1>Opps! An error has occurred: {error.toString()}</h1>;
  } else if (loading === false) {
    return <h1>Waiting for the organic shop inventory data ...... waiting....</h1>;
  } else {
    return (
      <>
        <div class="container-fluid">
          <img src={logoBanner} class="img-fluid" alt="CS385 branding" />
          <div class="alert alert-secondary" role="alert">
            <h2>We have {inventory.length} items for sale, right now!</h2>
            <p class="lead">
              Welcome to our own online shop at CS385. You can browse our
              products with the buttons below. Happy Shopping!{" "}
            </p>
            <button
              class="btn btn-primary"
              onClick={() => changeProductCategory("Vegetables")}
            >
              Vegetables
            </button>
            &nbsp;
            <button
              class="btn btn-primary"
              onClick={() => changeProductCategory("Flowers")}
            >
              Flowers
            </button>
            &nbsp;
            <button
              class="btn btn-primary"
              onClick={() => changeProductCategory("Fruits")}
            >
              Fruits
            </button>
            &nbsp;
            <button
              class="btn btn-primary"
              onClick={() => changeProductCategory(null)}
            >
              Reset Choice
            </button>
            &nbsp;
            {basket.length > 0 && (
              <>
                <button class="btn btn-primary" onClick={emptyBasket}>
                  Empty Basket
                </button>
              </>
            )}
          </div>
          {productChoice && (
            <ShowProductsComponent
              inventory={inventory}
              choice={productChoice}
              addItemToBasket={addItemToBasket}
              sorting={compareName}
            />
          )}
          {basket.length > 0 && (
            <>
              <Basket
                basket={basket}
                removeItemFromBasket={removeItemFromBasket}
                sorting={comparePriceAsc}
              />
            </>
          )}

          <img src={logoBanner} class="img-fluid" alt="CS385 branding" />
        </div>
      </>
    );
  } // end of return from useEffect
}

export default App;
