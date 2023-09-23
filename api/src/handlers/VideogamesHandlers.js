const {
    getAllVideogames,
    getVideogameById,
    getVideogameByName,
    createVideogame,
    updateVideogame,
    deleteVideogame
} = require('../controllers/VideogamesController');

// Post

const createVideogameHandler = async (req, res) => {
    const { name, description, releaseDate, rating, parent_platforms, genres } = req.body;
    try {
        const newGame = await createVideogame({ name, description, releaseDate, rating, parent_platforms, genres });
        res.status(201).json(newGame);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get

const getVideogamesHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const videogames = name ? await getVideogameByName(name) : await getAllVideogames();
        res.status(200).json(videogames);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getVideogameHandler = async (req, res) => {
    const { id } = req.params;
    const isNum = isNaN(id) ? "db" : "api";
    try {
        const videogame = await getVideogameById(id, isNum);
        res.status(200).json(videogame);
    } catch (error) {
        res.status(404).json({ error: `The id: ${id} does not exist` });
    }
};

// Put

const putVideogameHandler = async (req, res) => {
    const { id } = req.params;
    const { name, description, image, releaseDate, rating, parent_platforms, genres } = req.body;
    try {
        const videogame = await updateVideogame(id, name, description, image, releaseDate, rating, parent_platforms, genres );
        res.status(200).json(videogame);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete

const deleteVideogameHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const videogame = await deleteVideogame(id);
        res.status(200).json(videogame);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createVideogameHandler,
    getVideogamesHandler,
    getVideogameHandler,
    putVideogameHandler,
    deleteVideogameHandler,
};