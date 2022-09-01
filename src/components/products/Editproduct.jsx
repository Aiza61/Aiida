import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContextProvider";

const EditProduct = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const { getProductDetails, saveEditedProduct, productDetails } =
    useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const [product, setProduct] = useState(productDetails);

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <>
      {product ? (
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleInp}
            value={product.name}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={handleInp}
            value={product.description}
          />
          <input
            type="text"
            placeholder="Price"
            name="price"
            onChange={handleInp}
            value={product.price}
          />
          <input
            type="text"
            placeholder="Picture"
            name="picture"
            onChange={handleInp}
            value={product.picture}
          />
          <input
            type="text"
            placeholder="Type"
            name="type"
            onChange={handleInp}
            value={product.type}
          />
          <button
            onClick={() => {
              saveEditedProduct(product);
              navigate("/products");
            }}
          >
            Save Changes
          </button>
        </div>
      ) : (
        <h3>Loading</h3>
      )}
    </>
  );
};

export default EditProduct;
