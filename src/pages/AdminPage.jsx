import React from "react";
import AddProduct from "../components/products/AddProduct";

const AdminPage = () => {
  return (
    <div className="row align-items-center">
      <h2>AdminPage</h2>
      <h3>if you are not an admin, please leave!</h3>
      <AddProduct />
    </div>
  );
};

export default AdminPage;
