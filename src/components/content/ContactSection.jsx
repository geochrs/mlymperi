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
        <div>
          <h2 className={classes.h2}>Ready to collaborate?</h2>
          <p>Let's Talk</p>
          <div className={classes.emailInfo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="#001219"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m3 8 5.45 3.633c1.283.856 1.925 1.283 2.618 1.45a4.001 4.001 0 0 0 1.864 0c.694-.167 1.335-.594 2.618-1.45L21 8M6.2 19h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 17.48 21 16.92 21 15.8V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 5 18.92 5 17.8 5H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 6.52 3 7.08 3 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 19 5.08 19 6.2 19Z"
              />
            </svg>
            <span>something@gmail.com</span>
          </div>
          <div className={classes.svgContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="-5 0 20 20"
            >
              <path
                fill="#001219"
                // fill-rule="evenodd"
                d="M6.821 20v-9h2.733L10 7H6.821V5.052C6.821 4.022 6.848 3 8.287 3h1.458V.14c0-.043-1.253-.14-2.52-.14C4.58 0 2.924 1.657 2.924 4.7V7H0v4h2.923v9h3.898Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 20 20"
            >
              <path
                fill="#001219"
                // fill-rule="evenodd"
                d="M5.87.123C4.242.196 2.83.594 1.69 1.729.548 2.869.155 4.286.081 5.897.037 6.902-.231 14.498.545 16.49a5.04 5.04 0 0 0 2.91 2.903c.634.246 1.356.412 2.416.461 8.86.401 12.145.183 13.53-3.364.246-.631.415-1.353.462-2.41.405-8.883-.066-10.809-1.61-12.351C17.027.507 15.586-.325 5.87.123m.081 17.944c-.97-.043-1.496-.205-1.848-.341a3.255 3.255 0 0 1-1.888-1.883c-.591-1.514-.395-8.703-.342-9.866.051-1.14.282-2.18 1.086-2.985C3.954 2 5.24 1.513 13.993 1.908c1.142.052 2.186.282 2.992 1.084.995.993 1.489 2.288 1.087 11.008-.044.968-.206 1.493-.342 1.843-.901 2.308-2.973 2.628-11.779 2.224M14.09 4.69c0 .657.534 1.19 1.194 1.19.66 0 1.195-.533 1.195-1.19a1.194 1.194 0 0 0-2.39 0M4.864 9.988a5.103 5.103 0 0 0 5.11 5.097 5.103 5.103 0 0 0 5.109-5.097 5.102 5.102 0 0 0-5.11-5.096 5.102 5.102 0 0 0-5.11 5.096m1.794 0A3.313 3.313 0 0 1 9.972 6.68a3.313 3.313 0 0 1 3.317 3.308 3.313 3.313 0 0 1-3.317 3.31 3.313 3.313 0 0 1-3.316-3.31"
              />
            </svg>
          </div>
        </div>
        <div>
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
      </div>
    </section>
  );
}
