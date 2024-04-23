import React from "react";
import "./FindUs.css";

export default function FindUs() {
  return (
    <section className="find-us-section">
      <h2>Find Us</h2>
      <div className="map-container">
        {/* Map component or iframe embed code */}
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.639031525382!2d-6.836863823729027!3d34.02747541903669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b8bc880b4f9%3A0x5526badbe1b5be7b!2sRestaurant%20Ziryab%20-%20Rabat!5e0!3m2!1sen!2sma!4v1713909501986!5m2!1sen!2sma"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="address">
        <p>123 Main Street</p>
        <p>City, State, ZIP</p>
        <p>Country</p>
      </div>
    </section>
  );
}
