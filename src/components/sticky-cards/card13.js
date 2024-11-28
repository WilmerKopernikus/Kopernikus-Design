'use client';
import React, { useState } from 'react';
import './card3-cases.css';
import './contact-form.css';

const Card13 = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form Data:', formData);
  };

  return (
    <div id="card13" className="card"> {/* Changed id to "contact" */}
      <div className="card-body" id="contact-proportion">
        <div className="left">
          <h2 className="services-title">Contact Us</h2>
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
              />
            </div>
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
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
              />
            </div>
            <button type="submit" className="send-button">Send</button>
          </form>
        </div>
        <div className="right" id="transparente">
          {/* Content for the right side */}
        </div>
      </div>
    </div>
  );
};

export default Card13;
