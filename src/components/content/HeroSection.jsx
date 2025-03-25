import classes from './HeroSection.module.css';
import video from '../../assets/background.mp4';
import quotation from '../../assets/images/quotation.png';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = 300;
      let newOpacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
      newOpacity = Math.max(newOpacity, 0);
      setOpacity(newOpacity);
      document.documentElement.style.setProperty('--opacity-value', newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <div className={classes.contentWrapper}>
            <h1 className={classes.h1}>
              <span className={classes.quotes}>
                <img className={classes.quotation} src={quotation} />
              </span>
              M<span className={classes.differentFont}>a</span>ke it simple,
              <br />
              But unique<span className={classes.color}>.</span>
            </h1>
            {/* <div className={classes.content}>
              <p>WELCOME</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
