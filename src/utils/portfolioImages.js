const images = import.meta.glob('../assets/logos/site-*.webp', {
    eager: true,
  });
  
  const site = Object.keys(images).reduce((acc, path) => {
    const id = path.match(/site-(\d+)\.webp$/)?.[1];
    if (id) acc[id] = images[path].default || images[path];
    return acc;
  }, {});
  
  
  export default site;