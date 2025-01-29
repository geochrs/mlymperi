import classes from './HeroSection.module.css';
import video from '../../assets/3.mp4';

export default function HeroSection() {
  const underlineSVG = (
    <svg
      viewBox="0 0 1213 73"
      aria-hidden="true"
      preserveAspectRatio="none"
      className={classes.underline}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="underline-gradient" gradientTransform="rotate(110)">
          <stop offset="5%" stopColor="#A896D3" />
          <stop offset="95%" stopColor="#9B87C4" />
        </linearGradient>
      </defs>
      <g>
        <path
          fill="url(#underline-gradient)"
          d="M1213.19 35.377c2.37-13.011-22.95-10.753-31.04-14.087C1086.89 5.705 911.742 2.887 815.218 2.809c-78.003.231-155.966-1.833-233.961.481-57.545.429-114.885 6.164-172.419 7.383-121.164 5.39-242.94 10.751-362.507 32.199-12.356 3.286-25.614 4.255-37.332 9.401-29.507 22.983 27.103 20.15 39.468 17.234 357.956-47.703 362.767-46.261 636.452-50.97 121.033-2.508 241.892 6.658 428.341 19.243 4.74.404 8.98-4.032 8-8.788a942.105 942.105 0 0154.69 6.378c9.44 1.843 18.92 3.583 28.29 5.729 4.01.839 8.02-1.718 8.95-5.712v-.01z"
        />
      </g>
    </svg>
  );
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
          <h1 className={classes.h1}>hello!</h1>
          <div className={classes.content}>
            <p>
              My name is Maria and I am a graphic designer.<br></br>I specialize
              in <span className={classes.underlineText}>logo</span> design,{' '}
              <span className={classes.underlineText}>corporate identity</span>{' '}
              and <span className={classes.underlineText}>branding</span>, as
              well as {''}
              <span className={classes.underlineText}>
                {' '}
                packaging
              </span> design. <br></br>
              Minimalism, functionality and aesthetics are the very foundations
              of my work.
              <br />
              <br />
              The goal through design is to make thought{' '}
              <span className={classes.underlineText}>
                visible! {underlineSVG}
              </span>
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
