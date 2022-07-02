import React, { useState } from "react";
import useLoader from "../../hooks/useLoader";
import useProducts from "../../hooks/useProducts";
import Loader from "../Loader/Loader";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useProducts();
  const [loading, setLoading] = useLoader();
  const [cart, setCart] = useState([]);

  const addToCart = (selectedProduct) => {
    const newProduct = [...cart, selectedProduct];
    setCart(newProduct);
  };
  /* 
  const removeFromCart = (selectedProduct) => {
    const rest = cart.filter((crossItem) => crossItem.id !== selectedProduct.id);
    setCart(rest);
  }; */
  return (
    <div className="mt-10 px-5">
      {loading ? (
        <Loader></Loader>
      ) : (
        <div>
          <div className="product-container grid grid-cols-4 gap-5">
            {products.map((product) => (
              <Product key={product.id} product={product} addToCart={addToCart}></Product>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
