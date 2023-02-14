import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      {/* about section start */}
      <div className="about_section layout_padding">
        <div className="container">
          <div className="about_section_main">
            <div className="row">
              <div className="col-md-6">
                <div className="about_taital_main">
                  <h1 className="about_taital">Về Shoes Shop</h1>
                  <h6>Bước Chân Không Mỏi</h6>
                  <p className="about_text">
                    Với trọng tâm lấy khách hàng làm trung tâm SHOES SHOP luôn
                    cải tiến nhằm đưa ra những mẫu mã mới, phù hợp với xu thế.
                  </p>
                  <h6>Quy Mô Rộng Khắp</h6>
                  <p className="about_text">
                    Hệ thống phân phối sản phẩm của SHOES SHOP trải dài từ bắc
                    tới nam, chiếm lĩnh thị trường không chỉ trong nước mà còn
                    cả quốc tế.
                  </p>
                  <h6>BỨT PHÁ ĐỂ THÀNH CÔNG</h6>
                  <p className="about_text">
                    Luôn luôn đổi mới, luôn luôn phát triển là tôn chỉ hàng đầu
                    của SHOES SHOP.
                  </p>
                  <div className="readmore_bt">
                    <Link to="#">Đọc thêm</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <img
                    src="images/about-img.png"
                    className="image_3"
                    alt="About"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about section end */}
    </>
  );
}

export default About;
