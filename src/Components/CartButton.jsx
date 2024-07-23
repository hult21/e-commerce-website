import React from "react";
import { useShoppingCart } from "../Context/ShoppingCartContext";

const CartButton = ({ id, name, price, photo }) => {
  const { openCart, increaseCartQuantity } = useShoppingCart();

  const addToCart = () => {
    openCart();
    increaseCartQuantity(id, name, price, photo);
  };

  return (
    <div className="cart-btn-lg" onClick={addToCart}>
      <button className="add-tocart">Add To Cart</button>
    </div>
  );
};

export default CartButton;
