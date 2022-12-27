import { useEffect, useState } from "react";
const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("shopping-cart"));
    const storedProducts = [];
    if (products) {
      for (const id in storedCart) {
        const addedProduct = products.find(
          (product) => product.productId === id
        );
        if (addedProduct) {
          const quantity = storedCart[id];
          addedProduct.quantity = quantity;
          storedProducts.push(addedProduct);
        }
      }
    }
    setCart(storedProducts);
  }, [products]);
  return [cart, setCart];
};
export default useCart;
