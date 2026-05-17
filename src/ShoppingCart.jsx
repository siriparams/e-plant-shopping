import CartItem from "./CartItem";

const ShoppingCart = ({ cartItems, onContinueShopping, onRemoveItem }) => {
  return (
    <div className="shopping-cart">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - Quantity: {item.quantity} - Cost: ${item.cost}
              <button onClick={() => onRemoveItem(item.name)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={onContinueShopping}>Continue Shopping</button>
    </div>
  );
};

export default ShoppingCart;
