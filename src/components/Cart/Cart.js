import React, { Children } from "react";
import useCart from "../../hooks/useCart";

const Cart = ({ removeFromCart }) => {
  const [cart, setCart] = useCart();
  console.log(cart);
  return (
    <div className="">
      <h3>This is cart component</h3>
      <h2>Total products in cart: {cart.length}</h2>
    </div>
  );
};

export default Cart;
