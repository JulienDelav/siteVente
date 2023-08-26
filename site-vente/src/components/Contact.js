import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <div className="contact-content">
        <h2 className="contact-title">Contact Us</h2>
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4"></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
