import React, { useState } from 'react';
import img from '../Sources/contactt.jpg';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert('Thank you for contacting us!');
  };
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
   
    <div className="container-fluid pb-5 bg-primary-subtle">
      <div className="container ">
        <div className="text-center about fs-1 fw-bold py-5">
          <i className="fa-solid fa-envelope"></i> Contact Me
        </div>
        <div data-aos="fade-down" className="row contact-page">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
            <img className="my img-fluid" src={img} alt="Contact Visual" />
          </div>
          <div className="col-12 col-md-6">
            <div className="container ">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="number">Contact Number</label>
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    required
                    placeholder="Your Contact Number"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your Message"
                    className="form-control"
                    rows="5"
                  />
                </div>

                <button type="button" className="btn btn-primary butan btn-lg fw-semibold">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
  
}

export default Contact;
