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
                  <h1 className="about_taital">About Our beauty sotore</h1>
                  <p className="about_text">
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequatlabore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequatlabore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </p>
                  <div className="readmore_bt">
                    <Link to="#">Read More</Link>
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
