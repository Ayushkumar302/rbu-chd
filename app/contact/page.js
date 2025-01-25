"use client";

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap globally
import "/public/styles/contact.css";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      {/* Start banner */}
      <div className="about-bnr contact-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>
      </div>
      {/* End banner */}

      {/* Start contact */}
      <section className="con-details padding_80">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              {/* Contact Details */}
              <div className="row">
                <div className="col-md-6">
                  <div className="inr-dtl">
                    <i className="fa-solid fa-phone" aria-hidden="true"></i>
                    <h4>Phone Number</h4>
                    <p>+91 1882-275500 +91 1882-275501</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="inr-dtl">
                    <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                    <h4>Email</h4>
                    <p>info@rayatbahra.com</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="inr-dtl">
                    <i
                      className="fa-solid fa-location-dot"
                      aria-hidden="true"
                    ></i>
                    <h4>Address</h4>
                    <p>
                      RAYAT BAHRA GROUP OF INSTITUTES V.P.O Bohan, Tehil &amp;
                      Distt Hoshiarpur Punjab-146101
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-2 mb-md-0">
              {/* Contact Form */}
              <div className="contact-form">
                <h4>Send us a message.</h4>
                <p>We are prepared and committed to assisting you.</p>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-12">
                      <p>
                        <input
                          size="40"
                          maxLength="400"
                          className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                          aria-required="true"
                          placeholder="Full Name*"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        <input
                          size="40"
                          maxLength="400"
                          className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                          aria-required="true"
                          placeholder="Email*"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        <input
                          size="40"
                          maxLength="400"
                          className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel"
                          aria-required="true"
                          placeholder="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </p>
                    </div>
                    <div className="col-md-12">
                      <p>
                        <textarea
                          cols="40"
                          rows="10"
                          maxLength="2000"
                          className="wpcf7-form-control wpcf7-textarea"
                          placeholder="Messages"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </p>
                    </div>
                    <div className="col-md-12">
                      <p>
                        <input
                          className="wpcf7-form-control wpcf7-submit has-spinner"
                          type="submit"
                          value="SUBMIT"
                        />
                        <span className="wpcf7-spinner"></span>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="map-sec">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d255.8069309817257!2d77.2882747!3d30.1386855!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDA4JzE5LjQiTiA3N8KwMTcnMTguMCJF!5e1!3m2!1sen!2sin!4v1733207584480!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
