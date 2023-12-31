const { 
    apiGenres,  
    getAllGenres, 
    getGenreById, 
    getGenresByName, 
    updateGenre, 
    deleteGenre, 
} = require('../controllers/GenresControllers');

const { getGameBuUId } = require('../controllers/VideogamesController');
const { Genre } = require('../db');

// Post

const apiGenresHandler = async (req, res) => {
    try {
        const Genres = await apiGenres();
        // trae los géneros de la api
        res.status(201).json(Genres);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getGameByUIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const game = await getGameBuUId(id);

        // Obtener los nombres de los géneros para el juego y agregarlos a la respuesta
        const genreIds = await getGenresForGame(id);
        const gameGenres = await Genre.findAll({
            where: {
                id: genreIds
            },
        atributes: ['name'],
    });

    game.genres = gameGenres.map(genre => genre.name);

        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ error: `The id: ${uuid} does not exist` });
    }
};


const createGenreHandler = async (req, res) => {
    const { name } = req.body;
    try {
        const response = await createGenres({name});
        // recibe el nombre del nuevo género por body
        res.status(201).json(response);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get

const getGenresHandler = async (req, res) => {
    const { name } = req.query;
    try {
        let response;
        if (name) {
            response = await getGenresByName(name);
        } else {
            response = await getAllGenres();
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};


const getGenreHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await getGenreById(id);
        // busca por id, que recibe por params
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Put

const putGenreHandler = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const response = await updateGenre(id, name);
        // actualiza un género existente por id, que recibe por params, cambiando su nombre
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Delete

const deleteGenreHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await deleteGenre(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    apiGenresHandler,
    createGenreHandler,
    getGenresHandler,
    getGenreHandler,
    putGenreHandler,
    deleteGenreHandler,
    getGameByUIdHandler
};