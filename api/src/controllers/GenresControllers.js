const axios = require("axios");
const { Genre } = require("../db");
const { Op } = require("sequelize");
const { apiGenresCleaner } = require("../controllers/utils/utilsApiGames.js");

require("dotenv").config();
const { YOUR_API_KEY } = process.env;

//Get desde la API y los guarda en la base de datos
//Se ejecuta en appServer.js

const apiGenres = async () => {
  const url = `https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`;
  return await axios
    .get(url)
    .then((dataApi) => apiGenresCleaner(dataApi.data))
    .then(async (genres) => {
      for (const genreName of genres) {
        await createGenre(genreName);
      }
      return "Temperaments of the API saved in the database";
    });
};


const getAllGenres = async (name = null) => {
  let whereCondition = {}; 

  if (name) {
    whereCondition = {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    };
  }

  const getGenres = await Genre.findAll({
    where: whereCondition, // Aplica la condición solo si se proporciona un nombre
  });

  if (!getGenres.length) {
    if (name) {
      throw Error(`The name: ${name} does not exist`);
    } else {
      throw Error("Database is empty");
    }
  }

  return getGenres;
};

const getGenreById = async (id) => {
  const getGenres = await Genre.findByPk(id);
  if (!getGenres) throw Error(`The id: ${id} does not exist`);
  return getGenres;
};

// modificado para utilizarlo en el filtrado
const getGenresByName = async (name) => {
  let whereCondition = {}; // Condición para la consulta, inicialmente vacía

  if (name) {
    whereCondition = {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    };
  }

  const getGenres = await Genre.findAll({
    where: whereCondition, // Aplica la condición solo si se proporciona un nombre
  });

  if (!getGenres.length) {
    if (name) {
      throw Error(`The name: ${name} does not exist`);
    } else {
      throw Error("Database is empty");
    }
  }

  return getGenres;
};

const createGenre = async (name) => {
  try {
    // Buscar un género existente con el mismo nombre o crearlo si no existe
    const [genre, created] = await Genre.findOrCreate({
      where: { name },
    });

    if (created) {
      // El género fue creado porque no existía previamente
    } else {
      // El género ya existía en la base de datos
    }

    return genre;
  } catch (error) {
    throw error;
  }
};

// lo actualiza en la base de datos

const updateGenre = async (id, name) => {
  const genre = await Genre.findByPk(id);
  if (!genre) throw Error(`The id: ${id} does not exist`);
  if (!name) throw Error(`The name is required`);
  await Genre.update({ name }, { where: { id } });
  return `The genre ${name} has been updated`;
};

// Delete de la base de datos

const deleteGenre = async (id) => {
  const genreToDelete = await Genre.findByPk(id);
  if (!genreToDelete) throw Error(`The id: ${id} does not exist`);
  await genreToDelete.destroy();
  return `${genreToDelete} has been deleted`;
};

module.exports = {
  apiGenres,
  createGenre,
  getAllGenres,
  getGenreById,
  getGenresByName,
  updateGenre,
  deleteGenre,
};
