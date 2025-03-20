import classes from './DetailSection.module.css';

const imageModules = import.meta.glob('/src/assets/details/1logo/*.webp', {
  eager: true,
});
const images = Object.values(imageModules).map((module) => module.default);

export default function DetailSection({ id }) {
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
      images: images,
    },
    2: { title: 'Project Two', description: 'Description for project two.' },
    3: {
      title: 'Project Three',
      description: 'Description for project three.',
    },
  };

  const details = detailsData[id] || {
    title: 'Project Not Found',
    description: 'No details available for this project.',
  };

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h1 className={classes.h1}>{details.title}</h1>
        <div className={classes.content}>
          {details.description && (
            <p>
              {details.description.map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          )}
          {details.description2 && (
            <p>
              {details.description2.map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          )}
          {details.images.length > 0 && (
            <div className={classes.imageContainer}>
              {details.images.map((src) => (
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
      </div>
    </section>
  );
}
