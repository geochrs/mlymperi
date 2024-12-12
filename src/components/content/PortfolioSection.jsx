import classes from './PortfolioSection.module.css';

export default function PortfolioSection() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.h2}>Portfolio</h2>
        <div className={classes.cards}></div>
      </div>
    </section>
  );
}
