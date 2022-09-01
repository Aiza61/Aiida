import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductContextProvider";
import ProductCard from "../products/ProductCard";
import { useSearchParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import FilterProduct from "./FilterProduct";

const ProductsList = () => {
  const { products, getProducts } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, []);

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  // console.log(window.location.search);

  //PAGINATION START
  const [page, setPage] = useState(1);
  const itemsOnPage = 6;
  const count = Math.ceil(products.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return products.slice(begin, end);
  }

  return (
    <>
      <div className="product-list">
        <FilterProduct />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
        {products ? (
          currentData().map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <h3>Loading</h3>
        )}
      </div>
      <div>
        {/*PAGINATION HERE*/}
        <Pagination count={count} page={page} onChange={handlePage} />
      </div>
    </>
  );
};

export default ProductsList;
