import classes from './PortfolioSection.module.css';
import site from '../../utils/portfolioImages';
import { Link } from 'react-router-dom';

export default function PortfolioSection() {
  const cards = Array.from({ length: 14 }, (_, index) => {
    const id = String(index + 1).padStart(2, '0');
    return {
      id: index + 1,
      image: site[id] || 'https://via.placeholder.com/300',
      link: `/details/${index + 1}`,
    };
  });

  const getCustomOrder = (rowIndex) => {
    const patterns = [
      [0, 3, 1, 2],
      [3, 2, 0, 1],
      [2, 0, 3, 1],
      [1, 2, 0, 3],
    ];
    return patterns[rowIndex % patterns.length];
  };

  const getAOSDelay = (index) => {
    const rowIndex = Math.floor(index / 4);
    const customOrder = getCustomOrder(rowIndex);
    const orderIndex = customOrder[index % 4];
    return orderIndex * 50;
  };

  return (
    <section id="portfolio" className={classes.section}>
      <div className={classes.movingH2}>
        <h2 className={classes.h2}>
          "<span className={classes.font}>Thoughts</span>" that became visible -
        </h2>
        <h2 className={classes.h2}>
          "<span className={classes.font}>Thoughts</span>" that became visible -
        </h2>
        <h2 className={classes.h2}>
          "<span className={classes.font}>Thoughts</span>" that became visible -
        </h2>
      </div>
      <div className={classes.container}>
        <div className={classes.cardsContainer}>
          {cards.map((card, index) => (
            <Link key={card.id} to={`/details/${card.id}`} className={classes.card}>
              <div
                data-aos="zoom-in"
                data-aos-delay={getAOSDelay(index)}
              >
                <img
                  src={card.image}
                  alt={`Card ${card.id}`}
                  className={classes.image}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
