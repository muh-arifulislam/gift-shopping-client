const addToDb = (id, value = 0) => {
  let shoppingCart;
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  } else {
    shoppingCart = {};
  }
  const quantity = shoppingCart[id];
  if (quantity) {
    let newQuantity;
    if (value) {
      newQuantity = value;
    } else {
      newQuantity = parseInt(quantity) + 1;
    }

    shoppingCart[id] = newQuantity;
  } else {
    if (value) {
      shoppingCart[id] = value;
    } else {
      shoppingCart[id] = 1;
    }
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};
const addToCart = (id, value) => {
  let shoppingCart;
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  } else {
    shoppingCart = {};
  }
  const quantity = shoppingCart[id];
  if (quantity) {
    let newQuantity;
    if (value) {
      newQuantity = value;
    }
    shoppingCart[id] = newQuantity;
  } else {
    if (value) {
      shoppingCart[id] = value;
    }
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};
const deleteFromDb = (id) => {
  let shoppingCart = {};
  const storedCart = JSON.parse(localStorage.getItem("shopping-cart"));
  for (let storedId in storedCart) {
    if (!(storedId === id)) {
      shoppingCart[storedId] = storedCart[storedId];
    }
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};
export { addToDb, addToCart, deleteFromDb };
