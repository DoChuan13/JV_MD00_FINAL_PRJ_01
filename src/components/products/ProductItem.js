import React from "react";
import Link from "antd/es/typography/Link";

function ProductItem() {
  return (
    <>
      <div className="col-lg-3 col-sm-6">
        <div className="product_box">
          <h4 className="bursh_text">Beauty Bursh</h4>
          <p className="lorem_text">Nâng cao giá trị cuộc sống</p>
          <img src="images/img-1.png" className="image_1" alt="Shoes" />
          <div className="btn_main">
            <div className="buy_bt">
              <ul>
                <li className="active">
                  <Link to="#">Yêu thích</Link>
                </li>
                <li>
                  <Link to="#">Mua ngay</Link>
                </li>
              </ul>
            </div>
            <h3 className="price_text">Giá: $30</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
