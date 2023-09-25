const axios = require('axios');
const { Genre} = require('../db');
const { Op } = require("sequelize");
const { apiGenresCleaner } = require('../controllers/utils/utilsApiGames.js');

// .env
require('dotenv').config();
const { YOUR_API_KEY } = process.env;

//Get desde la API y los guarda en la base de datos

const apiGenres = async () => {
    const url = `https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`;
    return await axios
        .get(url)
        .then( dataApi => apiGenresCleaner(dataApi.data))
        .then ( genres => {
            genres.forEach( genreName => {
                createGenres({name: genreName});
            });
            return "Temperaments of the API saved in the database";
        });
};

// Get desde la base de datos

const getAllGenres = async () => {
    const getGenres = await Genre.findAll();
    if ( !getGenres.length ) throw Error('Database is empty');
    return getGenres;
};

const getGenreById = async (id) => {
    const getGenres = await Genre.findByPk(id);
    if ( !getGenres ) throw Error(`The id: ${id} does not exist`);
    return getGenres;
}

const getGenresByName = async (name) => {
    const getGenres = await Genre.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        }
    });
    if ( !getGenres.length ) throw Error(`The name: ${name} does not exist`);
    return getGenres;
};


const createGenres = async (name) => {
    const createGenre = await Genre.create(name);
    // lo crea en la base de datos
    return createGenre;
};

// lo actualiza en la base de datos

const updateGenre = async (id, name) => {
    const genre = await Genre.findByPk(id);
    if ( !genre ) throw Error(`The id: ${id} does not exist`);
    if ( !name ) throw Error(`The name is required`);
    await Genre.update(
        {name}, 
        {where: {id}
    })
    return `The genre ${name} has been updated`;
};

// Delete de la base de datos

const deleteGenre = async (id) => {
    const genreToDelete = await Genre.findByPk(id);
    if ( !genreToDelete ) throw Error(`The id: ${id} does not exist`);
    await genreToDelete.destroy();
    return `${genreToDelete} has been deleted`;
};

module.exports = {
    apiGenres,
    createGenres,
    getAllGenres,
    getGenreById,
    getGenresByName,
    updateGenre,
    deleteGenre,
};
                