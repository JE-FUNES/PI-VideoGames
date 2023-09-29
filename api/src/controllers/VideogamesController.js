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

const createGame = async ( name, description, image, released, rating, platforms, genres ) => {
    // create a new game en la base de datos
    const newGame = await Videogame.create({
        name,
        description,
        image,
        released,
        rating,
        platforms
    });
    // relaciona el nuevo juego con los generos especificados
    await newGame.addGenre(genres);
    return newGame;
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

    // Get by name
const getGamesByName = async (name) => {
    if (!name) {
        throw Error("Name is required");
    }
    // url para buscar por nombre
    const url = `https://api.rawg.io/api/games?key=${YOUR_API_KEY}&search=${name}&limit=15`;
   
    // busca en la base de datos
    const bdGame = await Videogame.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%` // no importa si es mayuscula o minuscula
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

    // obtiene los juegos de la api solo si se proporciona un name
    let apiGames = [];
    if (name) {
        const dataApi = (await axios.get(url)).data;
        apiGames = apiAllCleaner(dataApi);

        // limita la respuesta a 15 juegos
        apiGames = apiGames.slice(0, 15);
    }


    // combina los juegos de la api y los de la base de datos
   const response = [...bdGame, ...apiGames];

   if (!response.length) {
       throw Error(`The name: ${name} does not exist`);
   }
    return response;
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
    deleteGame
};