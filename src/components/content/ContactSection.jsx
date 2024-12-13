import classes from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section id='contact' className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.h2}>Contact</h2>
        <p>Let's talk</p>
      </div>
    </section>
  );
}
