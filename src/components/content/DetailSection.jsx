import classes from './DetailSection.module.css';

export default function DetailSection({ id }) {
  const imageModules1 = import.meta.glob('/src/assets/details/1/*.webp', {
    eager: true,
  });
  const imageModules2 = import.meta.glob('/src/assets/details/2/*.webp', {
    eager: true,
  });
  const imageModules3 = import.meta.glob('/src/assets/details/3/*.webp', {
    eager: true,
  });
  const imageModules4 = import.meta.glob('/src/assets/details/4/*.webp', {
    eager: true,
  });
  const imageModules8 = import.meta.glob('/src/assets/details/8/*.webp', {
    eager: true,
  });

  let imageModules = {};

  switch (Number(id)) {
    case 1:
      imageModules = imageModules1;
      break;
    case 2:
      imageModules = imageModules2;
      break;
    case 3:
      imageModules = imageModules3;
      break;
    case 4:
      imageModules = imageModules4;
      break;
    case 8:
      imageModules = imageModules8;
    default:
      break;
  }

  const images = Object.values(imageModules).map((module) => module.default);

  const detailsData = {
    1: {
      title: 'Pelasgia Olives / Andritsos Family',
      description: [
        'The "Andritsos" family has been involved in olive oil production in Greece for many years.',
        'The old man"s depiction in the logo, Mr. Andritsos himself, is the company trademark.',
      ],
      description2: [
        'The importance of this is grave and unique for the Andritsos Family, as Mr. Andritsos was the first',
        'who started the olive oil production many years ago, utilizing his own olive trees.',
      ],
      description3: '//',
      description4:
        'This olive tree branch is a minimal depiction of the olive itself.',
    },
    2: {
      title: 'Amaryllis Suites | Santorini',
      description: [
        'Amaryllis Suites is a complex of three suites located in Thira, Santorini.',
      ],
      description2: [
        'The suites have been designed with a minimalist aesthetic and Greek elements.',
        'The owner, whose name is also "Amaryllis", wanted to redesign the logo with a clear, minimalist, and "serene" style.',
      ],
      description3: '//',
      description4: 'And this is the result...',
    },
    3: {
      title: 'Project Lamia Youth / Youth Council',
      description: [
        'The Youth Council of the Municipality of Lamia aims to carry out meaningful actions',
        'and shape practical daily proposals through the exchange of views and ideas for the city.',
      ],
      description3: '//',
      description4:
        'We designed a logo depicting the historic castle of Lamia and the Greek letter "Λ" (from the word "Lamia").',
    },
    4: {
      title: 'Christodoulou Artifacts',
      description: [
        'The family business "Christodoulou Artifacts" has specialized in metal and stainless steel constructions for years.',
      ],
      description3: '//',
      description4:
        'We wanted to create a logo that emphasizes the name, making it memorable.',
    },
    8: {
      title: 'GN Prime Constructions Limited',
      description:
        'GN Prime Constructions has been transforming homes in London with unrivaled skill and precision.',
      description2:
        "Our goal was to design a minimalist logo, based on the initials of the two owners' names and the construction details of a building.",
    },
  };

  const details = detailsData[id] || {
    title: 'Project Not Found',
    description: 'No details available for this project.',
  };

  const description3WithColor = (description) => {
    const colors = {
      1: '#979e67', // 1 Logo
      2: '#e0c7b3', // 2 Logo
      3: '#e5a596', // 3 Logo
      4: '#fee67e', // 4 Logo
    };

    const color = colors[id];

    return <span style={{ color }}>{description}</span>;
  };

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h1 className={classes.h1}>{details.title}</h1>
        <div className={classes.content}>
          {[
            details.description,
            details.description2,
            details.description3,
            details.description4,
          ]
            .filter(Boolean)
            .map((desc) => (
              <p key={desc}>
                {Array.isArray(desc)
                  ? desc.map((line, lineIdx) => (
                      <span key={lineIdx}>
                        {line}
                        <br />
                      </span>
                    ))
                  : desc === details.description3
                  ? description3WithColor(desc)
                  : desc}
              </p>
            ))}
        </div>
        {images.length > 0 && (
          <div className={classes.imageContainer}>
            {images.map((src) => (
              <img
                key={src}
                src={src}
                alt="Gallery Image"
                className={classes.image}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
