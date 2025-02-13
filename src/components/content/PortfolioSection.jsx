import classes from './PortfolioSection.module.css';
import site from '../../utils/portfolioImages';

const arrowSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="120"
    height="120"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 12h16m0 0-4-4m4 4-4 4"
    />
  </svg>
);

export default function PortfolioSection() {
  const cards = Array.from({ length: 17 }, (_, index) => {
    const id = String(index + 1).padStart(2, '0');
    return {
      id: index + 1,
      image: site[id] || 'https://via.placeholder.com/300',
      link: `/details/${index + 1}`,
    };
  });

  const getCustomOrder = (rowIndex) => {
    const patterns = [
      [0, 2, 1],
      [2, 1, 0],
      [1, 0, 2],
    ];
    return patterns[rowIndex % patterns.length];
  };

  const getAOSDelay = (index) => {
    const rowIndex = Math.floor(index / 3);
    const customOrder = getCustomOrder(rowIndex);
    const orderIndex = customOrder[index % 3];
    return orderIndex * 50;
  };

  return (
    <section id="portfolio" className={classes.section}>
      <div className={classes.movingH2}>
          <h2 className={classes.h2}>
            Portfolio <span className={classes.arrow}>{arrowSvg}</span>
          </h2>
          <h2 className={classes.h2}>
            Portfolio <span className={classes.arrow}>{arrowSvg}</span>
          </h2>
          <h2 className={classes.h2}>
            Portfolio <span className={classes.arrow}>{arrowSvg}</span>
          </h2>
          <h2 className={classes.h2}>
            Portfolio <span className={classes.arrow}>{arrowSvg}</span>
          </h2>
          <h2 className={classes.h2}>
            Portfolio <span className={classes.arrow}>{arrowSvg}</span>
          </h2>
        </div>
      <div className={classes.container}>
        
        <div className={classes.cardsContainer}>
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={classes.card}
              data-aos="zoom-in"
              data-aos-delay={getAOSDelay(index)}
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
