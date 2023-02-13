import React from "react";
import { Link } from "react-router-dom";
import * as routerLink from "../../config/routersConfig";
import * as Fa from "react-icons/fa";

function Footer() {
  return (
    <footer>
      {/* footer section start */}
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="footer_logo">
            <Link to={routerLink.index.path}>
              <img src="images/footer-logo.png" alt="Logo Icon" />
            </Link>
          </div>
          <div className="contact_section_2">
            <div className="row">
              <div className="col-sm-4">
                <h3 className="address_text">Liên hệ</h3>
                <div className="address_bt">
                  <ul>
                    <li>
                      <Link to="#">
                        <Fa.FaMapMarker />
                        <span className="padding_left10">
                          Địa chỉ : Song Da Tower
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <Fa.FaPhone />
                        <span className="padding_left10">
                          Mobile : +0393.xxx.xxx
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <Fa.FaEnvelope />
                        <span className="padding_left10">
                          Email : songdacity@gmail.com
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="footer_logo_1">
                  <Link to={routerLink.index.path}>
                    <img src="images/footer-logo.png" alt="Logo Icon" />
                  </Link>
                </div>
                <p className="dummy_text">
                  commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non
                </p>
              </div>
              <div className="col-sm-4">
                <div className="main">
                  <h3 className="address_text">Best Products</h3>
                  <p className="ipsum_text">
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="social_icon">
            <ul>
              <li>
                <Link to="#">
                  <Fa.FaFacebookF />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <Fa.FaTwitter />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <Fa.FaYoutube />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <Fa.FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <Fa.FaInstagram />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <Fa.FaGithub />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* footer section end */}
      {/* copyright section start */}
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">
            2023 All Rights Reserved. Design by Do Chuan
          </p>
        </div>
      </div>
      {/* copyright section end */}
    </footer>
  );
}

export default Footer;
