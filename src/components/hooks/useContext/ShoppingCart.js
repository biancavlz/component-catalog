import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart((prevCart) => [...prevCart, item]);
  }

  function removeItem(item) {
    setCart((prevCart) => prevCart.filter((i) => i !== item));
  }

  return (
    <CartContext value={{ cart, addToCart, removeItem }}>
      <ProductList />
      <Cart />
    </CartContext>
  );
}

function ProductList() {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>Product list</h2>

      <button onClick={() => addToCart("product 1")}>Add Item 1</button>
      <button onClick={() => addToCart("product 2")}>Add Item 2</button>
      <button onClick={() => addToCart("product 3")}>Add Item 3</button>
    </div>
  );
}

function Cart() {
  const { cart, removeItem } = useContext(CartContext);

  if (!cart) return null;

  return (
    <>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item}>
            {item} <button onClick={() => removeItem(item)}>remove item</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShoppingCart;
