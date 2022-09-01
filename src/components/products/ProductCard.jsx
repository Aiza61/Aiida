import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/ProductContextProvider";
import "../../styles/ProductCard.css";

//FOR CART
import { useCart } from "../../context/CartContextProvider";

const ProductCard = ({ item }) => {
  const { deleteProduct } = useProducts();
  const navigate = useNavigate();

  const { addProductToCart } = useCart();
  return (
    <div>
      {item.name} {item.price}
      <button onClick={() => navigate(`/details/${item.id}`)}>Details</button>
      <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
      <button onClick={() => addProductToCart(item)}>Cart</button>
      <button onClick={() => deleteProduct(item.id)}>Delete</button>
    </div>
  );
};

export default ProductCard;
