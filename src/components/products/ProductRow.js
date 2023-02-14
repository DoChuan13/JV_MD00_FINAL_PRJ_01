import React from "react";
import ProductItem from "./ProductItem";

function ProductRow() {
  return (
    <>
      <div className="row">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </>
  );
}

export default ProductRow;
