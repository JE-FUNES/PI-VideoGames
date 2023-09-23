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

const createVideogame = async ( name, description, image, releaseDate, rating, parent_platforms, genres ) => {
    // create a new game
    const newGame = await Videogame.create({
        name,
        description,
        image,
        releaseDate,
        rating,
        parent_platforms
    });
    // relate the game with the genres
    await newGame.addGenres(genres);
    return newGame;
};

// Get

const getAllVideogames = async () => {
    // vars
    let apiGames = [];
    let api = `https://api.rawg.io/api/games?key=${YOUR_API_KEY}`;

    // db
    const dbGames = await Videogame.findAll({
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

    // api
    for (let i = 1; i <= 5; i++) {
        let apiData = await axios.get(api).data;

        // filter the data

        const apiG = apiAllCleaner(apiData);

        // concat the data
        apiGames = apiGames.concat(apiG);

        // change url for the next page
        api = apiData.next;
    }

    // concat the data api with the data db
    return [...apiGames, ...dbGames];
}

const getVideogameById = async (id, isNum) => {
    // url
    const url = `https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`;

    if (isNum === "api") {
        // api
        const apiData = await axios.get(url).data;
        const apiG = apiIdCleaner(apiData);
        return apiG;
    } else {
        // db
        const dbGames = await Videogame.findByPk(id, {
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
        if (!dbGames) { 
            throw new Error(`The id: ${id} does not exist`);
        }
        return dbGames;
    };
    };

const getVideogameByName = async (name) => {
    // url
    const url = `https://api.rawg.io/api/games?search=${name}&key=${YOUR_API_KEY}`;
    // db
    const dbGames = await Videogame.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
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

    // api
    const apiData = await axios.get(url).data;
    const apiG = apiAllCleaner(apiData);

   const games = [...apiG, ...dbGames];

   if (!games.length) {
       throw new Error(`The name: ${name} does not exist`);
   }
    return games;
};

// Put

const updateVideogame = async (id, name, description, image, releaseDate, rating, parent_platforms, genres ) => {
    // check if the game exist
    const game = await Videogame.findByPk(id);
    if (!game) {
        throw new Error(`The id: ${id} does not exist`);
    }
        // check if there are missing data
        if (!name || !description || !image || !releaseDate || !rating || !parent_platforms || !genres) {
            throw new Error(`Missing data`);
        }
        // update relation with genres
        await game.setGenres(genres);

        // update the game
        await game.update({
            name,
            description,
            image,
            releaseDate,
            rating,
            parent_platforms
        },
        {
            where: {id}
        }
        );
        return `${name} has been updated`;

    };

// Delete

const deleteVideogame = async (id) => {
    // check if the game exist
    const gameDelete = await Videogame.findByPk(id);
    await gameDelete.destroy();
    
    return `${gameDelete.name} has been successfully deleted`;

};

module.exports = {
    createVideogame,
    getAllVideogames,
    getVideogameById,
    getVideogameByName,
    updateVideogame,
    deleteVideogame
};