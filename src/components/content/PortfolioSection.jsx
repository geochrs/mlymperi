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

  const getCustomOrder = (rowIndex) => {
    const patterns = [
      [0, 2, 1], // First pattern
      [2, 1, 0], // Second pattern
      [1, 0, 2], // Third pattern
    ];
    return patterns[rowIndex % patterns.length]; // Cycle through patterns
  };

  const getAOSDelay = (index) => {
    const rowIndex = Math.floor(index / 3); // Calculate the row number
    const customOrder = getCustomOrder(rowIndex); // Get the pattern for the current row
    const orderIndex = customOrder[index % 3]; // Map index to the custom order
    return orderIndex * 50; // Example: 0 -> 0ms, 2 -> 200ms, 1 -> 100ms
  };

  return (
    <section id="portfolio" className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.h2}>Portfolio</h2>
        {/* <p>A small sample of the logos I have designed.</p> */}
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
