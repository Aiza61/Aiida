import React from "react";
import ProductsList from "../components/products/ProductsList";
import "../styles/ProductsPage.css";

const ProductsPage = () => {
  return (
    <div>
      <h1 className="product-page__title">Products List</h1>
      <ProductsList />
    </div>
  );
};

export default ProductsPage;
