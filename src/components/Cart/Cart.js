import React from "react";

const Cart = (props) => {
  console.log(props);
  return (
    <div>
      <h3>Order Summary:</h3>
      <p>Selected Items: {props.cart.length}</p>
    </div>
  );
};

export default Cart;
