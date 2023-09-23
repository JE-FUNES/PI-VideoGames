const axios = require('axios');
const { Genre} = require('../db');
const { Op } = require("sequelize");
const { apiGenresCleaner } = require('../controllers/utils/utilsApiGames');

// .env
require('dotenv').config();
const { YOUR_API_KEY } = process.env;

// Get

const getAllGenres = async () => {
    const getGenres = await Genre.findAll();
    if ( !getGenres.length ) throw new Error('Database is empty');
    return getGenres;
};

const getGenresById = async (id) => {
    const getGenres = await Genre.findByPk(id);
    if ( !getGenres ) throw new Error(`The id: ${id} does not exist`);
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
    if ( !getGenres.length ) throw new Error(`The name: ${name} does not exist`);
    return getGenres;
};

// Post

const apiGenres = async () => {
    const url = `https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`;
    return await axios
        .get(url)
        .then( apiData => apiGenresCleaner(apiData.data))
        .then ( genres => {
            genres.forEach( genreName => {
                createGenres({name: genreName});
            });
            return "Temperaments of the API saved in the database";
        });
};

const createGenres = async (name) => {
    const createGenre = await Genre.create(name);
    return createGenre;
};

// Put

const updateGenre = async (id, name) => {
    const updateG = await Genre.findByPk(id);
    if ( !updateG ) throw new Error(`The id: ${id} does not exist`);
    if ( !name ) throw new Error(`The name is required`);
    await Genre.update(
        {name}, 
        {where: {id}
    })
    return `The genre ${name} has been updated`;
};

// Delete

const deleteGenre = async (id) => {
    const deleteG = await Genre.findByPk(id);
    if ( !deleteG ) throw new Error(`The id: ${id} does not exist`);
    await deleteG.destroy();
    return `The genre with id: ${id} has been deleted`;
};

module.exports = {
    apiGenres,
    createGenres,
    getAllGenres,
    getGenresById,
    getGenresByName,
    updateGenre,
    deleteGenre,
};
                