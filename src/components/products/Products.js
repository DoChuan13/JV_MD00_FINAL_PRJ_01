import React from "react";
import { Link } from "react-router-dom";
import ProductRow from "./ProductRow";

function Products() {
  return (
    <>
      {/* product section start */}
      <div className="product_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="product_taital">Sản phẩm</h1>
              <p className="product_text">
                Khách hàng là trọng tâm. Giày dép thể thao sinh ra trên sân cỏ,
                được cải biên cho mỗi ngày.
              </p>
            </div>
          </div>
          <div className="product_section_2 layout_padding">
            <ProductRow />
            <ProductRow />
            <ProductRow />
            <div className="seemore_bt">
              <Link to="#">Xem thêm</Link>
            </div>
          </div>
        </div>
      </div>
      {/* product section end */}
    </>
  );
}

export default Products;
