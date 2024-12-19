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
              in <span>logo</span> design, <span>corporate identity</span> and{' '}
              <span>branding</span>, as well as {''}
              <span> packaging</span> design. <br></br>
              Minimalism, functionality and aesthetics are the very foundations
              of my work.
              <br />
              <br />
              The goal through design is to make thought <span>visible!</span>
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
