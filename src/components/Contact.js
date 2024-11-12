import React, { useState } from 'react';
import './Contact.css';
import { FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    const data = new FormData(event.target);
    fetch('https://formspree.io/f/xkndyndb', {
      method: 'POST',
      mode: 'no-cors',
      body: data,
    })
      .then(() => {
        setSuccessMessage('Your message was submitted. Thank you!');
        event.target.reset();
      })
      .catch(() => {
        setErrorMessage('Error. Message not submitted.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="Contact" id="contact">
      <h1>Let's Connect!</h1>
      <p className="Contact-subtext">Feel free to reach out via phone, LinkedIn, GitHub, or the form below!</p>
      <div className="Contact-content">
        <div className="Contact-info">
          <div className="info-box">
            <FaPhone />
            <p>+40726.609.452</p>
          </div>
          <div className="info-box">
            <FaGithub />
            <a href="https://github.com/Darius939" target="_blank" rel="noreferrer">
              <p>Github</p>
            </a>
          </div>
          <div className="info-box">
            <FaLinkedin />
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <p>LinkedIn</p>
            </a>
          </div>
        </div>

        <form className="Contact-form" onSubmit={handleSubmit} noValidate>
          <div className="Contact-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required onChange={handleInputChange} value={formData.name} />
          </div>
          <div className="Contact-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required onChange={handleInputChange} value={formData.email} />
          </div>
          <div className="Contact-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required onChange={handleInputChange} value={formData.message} />
          </div>
          <div className="Contact-field">
            <button type="submit" className="Contact-submit" disabled={loading}>
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </div>
          {successMessage && <p className="Contact-success">{successMessage}</p>}
          {errorMessage && <p className="Contact-error">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
