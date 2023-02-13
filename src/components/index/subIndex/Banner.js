import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  let slideIndex = 0;
  sliderImage();
  function sliderImage() {
    let carousel = document.querySelectorAll(".banner_section .carousel-item");
    if (carousel.length === 0) {
      setTimeout(sliderImage, 3000);
      return;
    }
    slideIndex++;
    if (slideIndex > carousel.length) {
      slideIndex = 1;
    }
    for (let i = 0; i < carousel.length; i++) {
      carousel[i].className = carousel[i].className.replace(" active", "");
    }
    carousel[slideIndex - 1].className += " active";
    setTimeout(sliderImage, 3000);
  }

  return (
    <>
      {/* banner section start */}
      <div className="banner_section layout_padding">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <h1 className="banner_taital">
                      Beauty <br />
                      Kit 1
                    </h1>
                    <p className="banner_text">
                      Ncididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo
                    </p>
                    <div className="read_bt">
                      <Link to="#">Buy Now</Link>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="banner_img">
                      <img src="images/banner-img.png" alt="Banner" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <h1 className="banner_taital">
                      Beauty <br />
                      Kit 2
                    </h1>
                    <p className="banner_text">
                      Ncididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo
                    </p>
                    <div className="read_bt">
                      <Link to="#">Buy Now</Link>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="banner_img">
                      <img src="images/banner-img.png" alt="Banner" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <h1 className="banner_taital">
                      Beauty <br />
                      Kit 3
                    </h1>
                    <p className="banner_text">
                      Ncididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo
                    </p>
                    <div className="read_bt">
                      <Link to="#">Buy Now</Link>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="banner_img">
                      <img src="images/banner-img.png" alt="Banner" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <h1 className="banner_taital">
                      Beauty <br />
                      Kit 4
                    </h1>
                    <p className="banner_text">
                      Ncididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo
                    </p>
                    <div className="read_bt">
                      <Link to="#">Buy Now</Link>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="banner_img">
                      <img src="images/banner-img.png" alt="Banner" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner section end */}
    </>
  );
}

export default Banner;
