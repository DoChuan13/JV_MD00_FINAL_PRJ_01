import React from "react";
import * as picture from "../../assets/images/images";
import { formatCurrency } from "../../utils/valueUtils/formatValue";
import { languageCode } from "../../config/valueConfig";
import { currencyCode } from "../../config/valueConfig";
import {
  FaHeart,
  // FaRegHeart
} from "react-icons/fa";

function ProductItem(props) {
  let { product } = props;
  let currency = formatCurrency(
    product["productPrice"],
    languageCode,
    currencyCode
  );

  const addToCart = (product) => {
    console.log("Them vao gio", product);
  };

  const buyProduct = () => {
    console.log("Mua", product);
  };

  return (
    <>
      <div className="col-lg-3 col-sm-6">
        <div className="product_box">
          <h4 className="bursh_text">{product["productName"]}</h4>
          <p className="lorem_text">{product["productTitle"]}g</p>
          <div style={{ position: "relative" }}>
            <FaHeart
              className="product_heart"
              // size={100}
            />
            <img
              className="image_1"
              src={picture[product.productImage]}
              alt={product.productImage}
            />
          </div>
          <div className="btn_main">
            <div className="buy_bt">
              <ul>
                <li className="active">
                  <button
                    onClick={() => {
                      addToCart(product);
                    }}
                  >
                    Thêm vào giỏ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      buyProduct(product);
                    }}
                  >
                    Mua ngay
                  </button>
                </li>
              </ul>
            </div>
            <h3 className="price_text">Giá: {currency}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
