import { useState } from "react";
import useProducts from "./useProducts";

const useCart = () => {
  const [products, setProducts] = useProducts();
  const [carts, setCarts] = useState([]);

  const addToCart = (selectedProduct) => {
    const newProduct = [...carts, selectedProduct];
    setCarts(newProduct);
  };

  const removeFromCart = (selectedProduct) => {
    const rest = carts.filter((crossItem) => crossItem.id !== selectedProduct.id);
    setCarts(rest);
  };

  return [carts, setCarts];
};

export default useCart;
