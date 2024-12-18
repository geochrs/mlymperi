import classes from './PortfolioSection.module.css';
import site from '../../utils/portfolioImages';

export default function PortfolioSection() {
  const cards = Array.from({ length: 17 }, (_, index) => {
    const id = String(index + 1).padStart(2, '0');
    return {
      id: index + 1,
      image: site[id] || 'https://via.placeholder.com/300',
      link: `/details/${index + 1}`,
    };
  });
  
  return (
    <section id="portfolio" className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.h2}>Portfolio</h2>
        <p>A small sample of the logos I have designed.</p>
        <div className={classes.cardsContainer}>
          {cards.map((card) => (
            <div
              key={card.id}
              className={classes.card}
              data-aos="zoom-in"
              data-aos-delay={`${card.id * 50}`}
            >
              <img
                src={card.image}
                alt={`Card ${card.id}`}
                className={classes.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
