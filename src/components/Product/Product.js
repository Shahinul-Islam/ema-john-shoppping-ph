import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { handleAddToCart, product } = props;
  const { img, name, price, seller, ratings } = product;
  // console.log(props);
  // const { handleAddToCart } = props.handleAddToCart;
  return (
    <div className="single-product">
      <div>
        <img src={img} alt="" />
        <h5>{name}</h5>
        <p className="product-price">Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p className="ratings">Rating: {ratings}</p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p>Add to Cart</p>
        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
