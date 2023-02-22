import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
import { productsState } from "../../services/redux/selectors/selectors";
import * as routerLink from "../../config/routersConfig";
import SideToastify from "../toast/SideToastify";

function Products() {
  // let location = useLocation();
  let navigate = useNavigate();
  const [productLoad, setProductLoad] = useState(12);
  let prState = useSelector(productsState);
  let productsElement = <></>;

  productsElement = prState.map((product, index) => {
    if (index < productLoad) {
      return <ProductItem key={product.id} product={product} />;
    } else return <Fragment key={product.id}></Fragment>;
  });

  const seeMoreProduct = () => {
    setProductLoad(productLoad + 8);
    navigate(routerLink.products.path);
  };

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
          <div className="product_section_2 layout_padding row">
            {productsElement}
            <div className="seemore_bt">
              <button
                onClick={() => {
                  seeMoreProduct();
                }}
              >
                Xem thêm
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* product section end */}
      <SideToastify />
    </>
  );
}

export default Products;
