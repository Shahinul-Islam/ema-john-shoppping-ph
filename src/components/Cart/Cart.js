import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  //   console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of props.cart) {
    quantity = quantity + product.quantity;
    // console.log(product.quantity);
    console.log(quantity);
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping * product.quantity;
  }
  const tax = Math.round(total * 0.1);
  let grandTotal = tax + total + shipping;
  return (
    <div className="cart">
      <h3>Order Summary:</h3>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <p>Grand Total: ${grandTotal}</p>
    </div>
  );
};

export default Cart;
