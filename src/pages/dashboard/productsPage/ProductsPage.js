import React from "react";
import { Outlet } from "react-router-dom";
import Products from "../../../components/products/Products";

function ProductsPage() {
  console.log("product");
  return (
    <>
      <Products />
      <Outlet />
    </>
  );
}

export default ProductsPage;
