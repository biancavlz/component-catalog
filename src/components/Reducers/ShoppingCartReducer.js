import { useReducer } from "react";

function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      const existingItem = state.find((item) => item.id === action.item.id);

      if (existingItem) {
        return state.map((item) =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + action.item.quantity }
            : item,
        );
      } else {
        return [...state, action.item];
      }
    case "remove":
      return state.filter((item) => item.id !== action.item.id);
    case "update":
      return state.map((item) =>
        item.id === action.item.id
          ? { ...item, quantity: action.item.quantity }
          : item,
      );
    case "clear":
      return [];
    default:
      throw new Error("Unknown action");
  }
}

const initialState = [];

function ShippingCart() {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const items = [
    { id: 1, name: "apple", price: 1.5 },
    { id: 2, name: "banana", price: 3 },
    { id: 3, name: "Cherries", price: 5 },
  ];
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - {item.price.toFixed(2)}
          </p>
          <button
            onClick={() =>
              dispatch({ type: "add", item: { ...item, quantity: 1 } })
            }
          >
            Add to cart
          </button>
          <button
            onClick={() =>
              dispatch({ type: "add", item: { ...item, quantity: -1 } })
            }
          >
            Remove to cart
          </button>
        </div>
      ))}

      <h2>Cart</h2>
      {cart.length > 0 ? (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)} x {item.quantity}
                <button
                  onClick={() =>
                    dispatch({ type: "remove", item: { id: item.id } })
                  }
                >
                  Remove
                </button>
                <button
                  onClick={() =>
                    dispatch({
                      type: "update",
                      item: { id: item.id, quantity: item.quantity + 1 },
                    })
                  }
                >
                  +
                </button>
                <button
                  onClick={() =>
                    dispatch({
                      type: "update",
                      item: {
                        id: item.id,
                        quantity: Math.max(1, item.quantity - 1),
                      },
                    })
                  }
                >
                  -
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Nothig in your cart yet</p>
      )}
    </div>
  );
}

export default ShippingCart;
