import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <section className="contact-form">
      <h2>Contact Me</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default ContactForm;
