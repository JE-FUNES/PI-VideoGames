const apiAllCleaner = (apiGames) => {
    return apiGames.results.map(game => {
        return {
            id: game.id,
            name: game.name,
            image: game.background_image,
            parent_platforms: game.parent_platforms.map(platforms => platforms.platform.name),
            releaseDate: game.released,
            rating: game.rating,
            genres: game.genres.map(genre => {
                return {
                    id: genre.id,
                    name: genre.name
                }}),
            created: false,
        }
    })
}

const apiIdCleaner = (apiGames) => {
    return {
        id: apiGames.id,
        name: apiGames.name,
        image: apiGames.background_image,
        description: apiGames.description,
        parent_platforms: apiGames.parent_platforms.map(platforms => platforms.platform.name),
        releaseDate: apiGames.released,
        rating: apiGames.rating,
        genres: apiGames.genres.map(genre => {
            return {
                id: genre.id,
                name: genre.name
            }}),
        created: false,
    }
    }

    const apiGenresCleaner = (apiGames) => {
        let games = apiGames.results;

        const genres = games.map(game => game.name);
        return genres;
    }

module.exports = {
    apiAllCleaner,
    apiIdCleaner,
    apiGenresCleaner
}