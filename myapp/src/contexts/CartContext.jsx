import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider(props) {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    let remainingItems = cart.filter(
      (i) => i.id.toString() !== productId.toString(),
    );
    setCart(remainingItems);
  };

  const isInCart = (producId) => {
    return cart.find((i) => i.id.toString() === producId.toString());
  };

  const cartSize = cart.length;

  return (
    <CartContext
      value={{ cart, addToCart, removeFromCart, cartSize, isInCart }}
    >
      {props.children}
    </CartContext>
  );
}

export default CartProvider;
