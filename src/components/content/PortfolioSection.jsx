import classes from './PortfolioSection.module.css';

export default function PortfolioSection() {
  const cards = [
    { id: 1, image: 'https://via.placeholder.com/300', link: '/details/1' },
    { id: 2, image: 'https://via.placeholder.com/300', link: '/details/2' },
    { id: 3, image: 'https://via.placeholder.com/300', link: '/details/3' },
    { id: 4, image: 'https://via.placeholder.com/300', link: '/details/4' },
    { id: 5, image: 'https://via.placeholder.com/300', link: '/details/5' },
    { id: 6, image: 'https://via.placeholder.com/300', link: '/details/6' },
    { id: 7, image: 'https://via.placeholder.com/300', link: '/details/7' },
    { id: 8, image: 'https://via.placeholder.com/300', link: '/details/8' },
    { id: 9, image: 'https://via.placeholder.com/300', link: '/details/9' },
    { id: 10, image: 'https://via.placeholder.com/300', link: '/details/10' },
    { id: 11, image: 'https://via.placeholder.com/300', link: '/details/11' },
    { id: 12, image: 'https://via.placeholder.com/300', link: '/details/12' },
  ];

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
