/* This is the ShowProductsComponent 
It is primarily used to allow us to display products
and encapsulate this code away from the parent App component */
function ShowProductsComponent(props) {
  // a filter function for productCategory
  function productFilter(prod) {
    return function (productsObject) {
      return productsObject.productCategory === prod;
    };
  }
  // use filter to find the number of items for this product
  let n = props.inventory.filter(productFilter(props.choice));

  return (
    <>
      <hr />
      <h3>
        Our {props.choice} products ({n.length} items)
      </h3>

      {props.inventory.filter(productFilter(props.choice)).map((p, index) => (
        <p key={index}>
          {p.plant.name},€{p.plant.price.toFixed(2)}{" "}
          <button onClick={() => props.addItemToBasket(p)}>
            Add to basket
          </button>
        </p>
      ))}
    </>
  );
} // end of ShowProductsComponent

export default ShowProductsComponent;
