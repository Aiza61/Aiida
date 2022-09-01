import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/ProductContextProvider";

const AddProduct = () => {
  const { addProduct } = useProducts();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
    type: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <div>
      <input type="text" name="name" placeholder="Name" onChange={handleInp} />
      <input
        type="text"
        name="description"
        placeholder="Description"
        onChange={handleInp}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        onChange={handleInp}
      />
      <input
        type="text"
        name="picture"
        placeholder="Picture"
        onChange={handleInp}
      />
      <input type="text" name="type" placeholder="Type" onChange={handleInp} />
      <button
        onClick={() => {
          addProduct(product);
          navigate("/products");
        }}
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
