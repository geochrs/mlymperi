import classes from './HeroSection.module.css';
export default function HeroSection() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes['left-content']}>
          <h1 className={classes.h1}>hello!</h1>
          <div className={classes.content}>
            <p>
              My name is Maria and I am a graphic designer.<br></br>I specialize
              in logo design, corporate identity and branding, as well as
              packaging design. <br></br>
              Minimalism, functionality and aesthetics are the very foundations
              of my work.
              <br />
              <br />
              The goal through design is to make thought visible!
            </p>
          </div>
        </div>
        <div className={classes['img-container']}>
          {/* <img className={classes.img} src={imageSrc} alt={title} /> */}
        </div>
      </div>
    </section>
  );
}
