import React from "react";
import { Outlet } from "react-router-dom";
import Products from "../../../components/products/Products";

function ProductsPage() {
  return (
    <>
      <Products />
      <Outlet />
    </>
  );
}

export default ProductsPage;
