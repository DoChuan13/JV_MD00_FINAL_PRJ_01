import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      {/* contact section start */}
      <div className="contact_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="contact_taital">Get In Touch</h1>
              <p className="contact_text">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation eu{" "}
              </p>
            </div>
            <div className="col-md-6">
              <div className="contact_main">
                <div className="contact_bt">
                  <Link to="#">Contact Form</Link>
                </div>
                <div className="newletter_bt">
                  <Link to="#">Newletter</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map_main">
          <div className="map-responsive">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14896.825722694739!2d105.79380725!3d21.02442465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1675905049773!5m2!1sen!2s"
              // src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
              width={600}
              height={400}
              frameBorder={0}
              style={{ border: 0, width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              title="Hanoi"
            />
          </div>
        </div>
      </div>
      {/* contact section end */}
    </>
  );
}

export default Contact;
