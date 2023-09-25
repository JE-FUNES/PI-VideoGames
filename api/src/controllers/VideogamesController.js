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

// Get

const getAllGames = async () => {
    // vars
    let api = `https://api.rawg.io/api/games?key=${YOUR_API_KEY}`;
    let apiGames = []; // almacenara los juegos de la api

    // obtiene los juegos de la base de datos
    const bdGames = await Videogame.findAll({
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

    // obtiene los juegos de la api paginas 1 a 5
    for (let i = 1; i <= 5; i++) {
        let dataApi = await axios.get(api).data;

        // filtra y limpia los datos de la api

        const apiG = apiAllCleaner(dataApi);

        // concatena los juegos de la api
        apiGames = apiGames.concat(apiG);

        // ccambia la url para la siguiente pagina
        api = dataApi.next;
    }

    // combinamos los juegos de la api y los de la base de datos
    return [...bdGames, ...apiGames];
}


// Get by id
const getGameById = async (id, source) => {
    // url
    const url = `https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`;

    if (source === "api") {
        // otiene el game de la api
        const dataApi = (await axios.get(url)).data;
        const apiGames = apiIdCleaner(dataApi);
        return apiGames;
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
            throw Error(`not exist`);
            return response;
    };
};

    // Get by name
const getGamesByName = async (name) => {
    // url para buscar por nombre
    const url = `https://api.rawg.io/api/games?key=${YOUR_API_KEY}&search=${name}`;
   
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
        limnit: 15, // limita a 15 juegos que coincidan con el nombre
    });

    // obtiene los juegos de la api
    const dataApi = (await axios.get(url)).data;
    const apiGames = apiAllCleaner(dataApi);

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