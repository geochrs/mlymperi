import classes from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section id="contact" className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.h2}>Contact</h2>
        <p>Let's talk</p>
        <form className={classes.contactForm}>
          <input
            className={classes.inputName}
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className={classes.inputEmail}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            className={classes.textarea}
            name="message"
            placeholder="Enter your message"
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
