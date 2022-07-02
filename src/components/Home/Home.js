// import React, { useEffect, useState } from "react";
import useProducts from "../../hooks/useProducts";
import Loader from "../Loader/Loader";
import Product from "../Product/Product";
import "./Home.css";
import useLoader from "../../hooks/useLoader";
import { useState } from "react";

const Home = () => {
  const [products, setProducts] = useProducts();
  const [loading, setLoading] = useLoader();
  const [cart, setCart] = useState([]);

  const addToCart = (selectedProduct) => {
    const newProduct = [...cart, selectedProduct];
    setCart(newProduct);
  };

  const removeFromCart = (selectedProduct) => {
    const rest = cart.filter((crossItem) => crossItem.id !== selectedProduct.id);
    setCart(rest);
  };

  return (
    <div className="content-center">
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="home-container">
          <div className="product-container grid grid-cols-2 gap-5">
            {products.map((product) => (
              <Product key={product.id} product={product} addToCart={addToCart}></Product>
            ))}
          </div>
          <div className="cart-container ml-4">
            <h2>This is for cart</h2>
            <h2>Total products selected: {cart.length}</h2>
            <div>
              {cart.length === 0
                ? "Please Buy Some Products"
                : cart.map((item) => (
                    <div>
                      <h2>{item.title}</h2>
                      <button onClick={() => removeFromCart(item)}>X</button>
                    </div>
                  ))}
            </div>
            {cart.length > 0 && <button className="border mx-auto bg-orange-700 text-zinc-100 p-1 mt-2 ml-auto">Proceed To Checkout</button>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
