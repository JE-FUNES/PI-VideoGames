// info de todos los games

const apiAllCleaner = (dataApi) => {
  return dataApi.results.map((game) => {
    return {
      id: game.id,
      name: game.name,
      image: game.background_image,
      platforms: game.parent_platforms.map(
        (platforms) => platforms.platform.name
      ),
      released: game.released,
      rating: game.rating,
      genres: game.genres.map((genre) => {
        return {
          id: genre.id,
          name: genre.name,
        };
      }),
      created: false,
    };
  });
};

// info de los genres

const apiGenresCleaner = (dataApi) => {
  let games = dataApi.results;

  const genres = games.map((game) => game.name);
  return genres;
};

// info de un game en particular

const apiIdCleaner = (dataApi) => {
  return {
    id: dataApi.id,
    name: dataApi.name,
    image: dataApi.background_image,
    description: dataApi.description,
    platforms: dataApi.parent_platforms.map(
      (platforms) => platforms.platform.name
    ),
    released: dataApi.released,
    rating: dataApi.rating,
    genres: dataApi.genres.map((genre) => {
      return {
        id: genre.id,
        name: genre.name,
      };
    }),
    created: false,
  };
};



module.exports = {
  apiAllCleaner,
  apiIdCleaner,
  apiGenresCleaner,
};
