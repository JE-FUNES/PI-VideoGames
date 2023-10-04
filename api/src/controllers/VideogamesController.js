const {Videogame, Genre} = require('../db.js');
const {Op} = require('sequelize');
const axios = require('axios');
const { apiAllCleaner,
        apiIdCleaner,
        } 
        = require('./utils/utilsApiGames.js');

// .env
require('dotenv').config();
const {YOUR_API_KEY} = process.env;

// Post


const createGame = async (name, description, image, released, rating, platformNames, genreNames) => {
    try {
        // Buscar los géneros correspondientes en la base de datos
        const genres = await Genre.findAll({
            where: {
                name: genreNames
            }
        });
            

        // Crear un nuevo juego en la base de datos
        const newGame = await Videogame.create({
            name,
            description,
            image,
            released,
            rating,
            platforms: platformNames,
            genres,
        });

        // Relacionar el nuevo juego con los géneros encontrados
        await newGame.setGenres(genres);

        return newGame;
    } catch (error) {
        throw new Error(error.message);
    }
};





const getAllGames = async () => {
    // vars
    let api = `https://api.rawg.io/api/games?key=${YOUR_API_KEY}`;
    let apiGames = []; // almacenará los juegos de la API

    // obtiene los juegos de la base de datos
    const bdGames = await Videogame.findAll({
        include: {
            model: Genre,
            as: 'genres',
            attributes: ['id', 'name'],
            through: {
                attributes: [],
            },
            order: [
                ['ASC']
            ],
        },
    });

    // obtiene los juegos de la API páginas 1 a 5
    let nextPage = api; // Inicializa nextPage con la URL de la primera página
    for (let i = 1; i <= 5; i++) {
        let response = await axios.get(nextPage);
        let dataApi = response.data;
        if (dataApi.results && dataApi.results.length > 0) {
            const apiG = apiAllCleaner(dataApi);
            // concatena los juegos de la API
            apiGames = apiGames.concat(apiG);
            // actualiza nextPage con la URL de la siguiente página
            nextPage = dataApi.next;
        } else {
            // Si no hay resultados en esta página, termina el bucle
            break;
        }
    }

    // combina los juegos de la API y los de la base de datos
    return [...bdGames, ...apiGames];
}






// Get by id
const getGameById = async (id, source) => {

    const url = `https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`;

    if (source === "api") {
        // otiene el game de la api
        const dataApi = (await axios.get(url)).data;
        const filteredData = {
            id: dataApi.id,
            name: dataApi.name,
            original_name: dataApi.name_original,
            description: dataApi.description_raw,
            released: dataApi.released,
            updated: dataApi.updated,
            rating: dataApi.rating,
            image: dataApi.background_image,
            platforms: dataApi.platforms.map((p) => p.platform.name),
            genres: dataApi.genres.map((g) => g.name),
            stores: dataApi.stores.map((s) => s.store.name),
        };
        return filteredData;
    } else {
        // lo obtiene de la base de datos
        const response = await Videogame.findByPk(id, {
            include: {
                model: Genre,
                as: 'genres',
                attributes: ['id', 'name'],
                through: { // atravez de la tabla intermedia
                    attributes: []
                },
                order: [
                    ['ASC']
                ],
            },
        });
        if (!response)  
            throw Error(`The id: ${id} does not exist`);
            const filteredData = {
                id: response.id,
                name: response.name,
                // Agrega aquí las propiedades adicionales que deseas obtener de la base de datos
            };
    
            return filteredData;
        }
    };

    // GET VIDEO GAME POR ID ( UUID) SOLO EN LA BASE DE DATOS, en el modelo VideoGame

        const getGameBuUId = async (id) => {
            try {
                const response = await Videogame.findByPk(id, {
                    include: {
                        model: Genre,
                        as: 'genres',
                        attributes: ['id', 'name'],
                        through: { // atravez de la tabla intermedia
                            attributes: []
                        },
                        order: [
                            ['ASC']
                        ],
                    },
                });
                if (!response)  
                    throw Error(`The id: ${id} does not exist`);
                    
                    const filteredData = {
                        id: response.id,
                        name: response.name,
                        description: response.description,
                        platforms: response.platforms,
                        released: response.released,
                        rating: response.rating,
                        image: response.image,
                    };
            
                    return filteredData;
                } catch (error) {
                    throw error;
                }
            }






    // Get by name
    const getGamesByName = async (name) => {

        try {
            // busca en la base de datos
            const bdGame = await Videogame.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`, // no importa si es mayuscula o minuscula
                    }
                },
                include: {
                    model: Genre,
                    as: 'genres',
                    attributes: ['id', 'name'],
                    through: { // atravez de la tabla intermedia
                        attributes: [],
                    },
                    order: [
                        ['ASC']
                    ],
                },
            });
    
    // calcula, segun los juegos de la BD, cuantos puede traer de la api (max 15 total)
    
        const apiLimit = 15 - bdGame.length;
        let apiGames = []; // almacenará los juegos de la API
    
        // ahora va a la api
    
        if (name && apiLimit > 0) {
            const url = `https://api.rawg.io/api/games?key=${YOUR_API_KEY}&search=${name}`;
            const dataApi = (await axios.get(url)).data;
            apiGames = apiAllCleaner(dataApi);
           
    
            // limita la respuesta de la api segun el espacio disponible
            apiGames = apiGames.slice(0, apiLimit);
    
        }
        // combina los juegos de la api y los de la base de datos
       const response = [...bdGame, ...apiGames];
    
       if (!response.length) {
           throw Error(`The name: ${name} does not exist`);
       }
        return response;
        
    } catch (error) {
        throw error;
    }
    };

// actualiza un juego por id

const updateGame = async (id, name, description, image, released, rating, platforms, genres ) => {
    // check if the game exist
    const game = await Videogame.findByPk(id);
    if (!game) throw Error(`The id: ${id} does not exist`);
    
        // check if there are missing data
        if (!name || !description || !image || !released || !rating || !platforms || !genres) 
            throw Error(`Missing data`);
        
        // update relation with genres
        await game.setGenres(genres);

        // update the game
        await Videogame.update({
            name,
            description,
            image,
            released,
            rating,
            platforms
        },
        {
            where: {id}
        }
        );
        return `${name} has been updated`;

    };

// Delete

const deleteGame = async (id) => {
    // check if the game exist
    const gameToDelete = await Videogame.findByPk(id);
    await gameToDelete.destroy();
    
    return `${gameToDelete.name} has been successfully deleted`;

};

module.exports = {
    createGame,
    getAllGames,
    getGameById,
    getGamesByName,
    updateGame,
    deleteGame,
    getGameBuUId
};