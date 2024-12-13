import classes from './PortfolioSection.module.css';

export default function PortfolioSection() {
  return (
    <section id='portfolio' className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.h2}>Portfolio</h2>
        <p>A small sample of the logos I have designed.</p>
        <div className={classes.cardsContainer}>
          <div className={classes.card}>
            <img
              src="https://via.placeholder.com/300"
              alt="Card 1"
              className={classes.image}
            />
          </div>
          <div className={classes.card}>
            <img
              src="https://via.placeholder.com/300"
              alt="Card 2"
              className={classes.image}
            />
          </div>
          <div className={classes.card}>
            <img
              src="https://via.placeholder.com/300"
              alt="Card 3"
              className={classes.image}
            />
          </div>
          <div className={classes.card}>
            <img
              src="https://via.placeholder.com/300"
              alt="Card 3"
              className={classes.image}
            />
          </div>
          <div className={classes.card}>
            <img
              src="https://via.placeholder.com/300"
              alt="Card 3"
              className={classes.image}
            />
          </div>
          <div className={classes.card}>
            <img
              src="https://via.placeholder.com/300"
              alt="Card 3"
              className={classes.image}
            />
          </div>
          <div className={classes.card}>
            <img
              src="https://via.placeholder.com/300"
              alt="Card 3"
              className={classes.image}
            />
          </div>
          <div className={classes.card}>
            <img
              src="https://via.placeholder.com/300"
              alt="Card 3"
              className={classes.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
