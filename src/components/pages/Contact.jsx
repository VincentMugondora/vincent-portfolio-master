import React, { useState } from "react";
import { Heading } from "../common/Heading";
import { contact } from "../data/dummydata";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:vinmugondor@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <div className="contact">
        <div className="container">
          <Heading title="Keep In Touch" />
          <div className="content flexsb">
            <div className="right">
              <form onSubmit={handleSubmit}>
                <div className="flex">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    data-aos="flip-left"
                    required
                    style={{ color: "black" }} // Set input text color to black
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    data-aos="flip-right"
                    required
                    style={{ color: "black" }} // Set input text color to black
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  data-aos="flip-up"
                  required
                  style={{ color: "black" }} // Set input text color to black
                />
                <textarea
                  name="message"
                  placeholder="Your message"
                  cols="30"
                  rows="10"
                  value={formData.message}
                  onChange={handleChange}
                  data-aos="flip-down"
                  required
                  style={{ color: "black" }} // Set input text color to black
                ></textarea>
                <button type="submit" data-aos="zoom-in-up">
                  Submit
                </button>
              </form>
            </div>
            <div className="left">
              {contact.map((item) => (
                <div className="box" data-aos="zoom-in" key={item.text1}>
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Google Map */}
          <div className="map">
            <h2>Our Location</h2>
            <iframe
              title="Google Map showing our location" // Added title attribute
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.5641988386875!2d31.06305251462238!3d-17.81682968815245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x193084d7f2c2d3f3%3A0xc773c5dc6f688e9f!2s22%20Muriranyenze%20Street%2C%20Mufakose%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1634007165863!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
