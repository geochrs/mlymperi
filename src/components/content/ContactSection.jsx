import { useState } from 'react';
import emailjs from 'emailjs-com';
import classes from './ContactSection.module.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const params = { ...formData };

    emailjs
      .send('service_9ecsisg', 'template_c4nafhh', params, 'HaJUWvxiA9x0CuOFf')
      .then(
        (result) => {
          console.log('Email sent:', result.text);
        },
        (error) => {
          console.log('Error sending email:', error.text);
        }
      );
  };

  return (
    <section id="contact" className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.h2}>Contact</h2>
        <p>Let's talk</p>
        <form className={classes.contactForm} onSubmit={handleSubmit}>
          <input
            className={classes.inputName}
            type="text"
            name="from_name"
            placeholder="Name"
            value={formData.from_name || ''}
            onChange={handleChange}
            required
          />
          <input
            className={classes.inputEmail}
            type="email"
            name="email_id"
            placeholder="Email"
            value={formData.email_id || ''}
            onChange={handleChange}
            required
          />
          <textarea
            className={classes.textarea}
            name="message"
            placeholder="Enter your message"
            value={formData.message || ''}
            onChange={handleChange}
            required
          ></textarea>
          <div className={classes.buttonWrapper}>
            <button type="submit" className={classes.formButton}>
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
