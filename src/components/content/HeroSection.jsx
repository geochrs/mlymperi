import classes from './HeroSection.module.css';
import video from '../../assets/background.mp4';

export default function HeroSection() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes['left-content']}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={classes.backgroundVideo}
          >
            <source src={video} type="video/mp4" />
          </video>
          <h1 className={classes.h1}>
            <span className={`${classes.color} ${classes.quotes}`}>&ldquo;</span>M<span className={classes.differentFont}>a</span>ke it simple,
            <br />But unique<span className={classes.color}>.</span>
          </h1>
          <div className={classes.content}>
            <p>WELCOME</p>
          </div>
        </div>
      </div>
    </section>
  );
}
