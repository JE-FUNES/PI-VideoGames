const {
    createGame,
    getAllGames,
    getGameById,
    getGamesByName,
    updateGame,
    deleteGame,
    getGameBuUId
} = require('../controllers/VideogamesController');




// manejador de ruta Post para crear un nuevo videojuego

const createGameHandler = async (req, res) => {
    const { name, description, image, released, rating, platforms, genres } = req.body;
    try {
        console.log(name, description, image, released, rating, platforms, genres);

        const newGame = await createGame(name, description, image, released, rating, platforms, genres );
        res.status(201).json(newGame);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// manejador de ruta Get para traer todos los videojuegos o filtrar por nombre

const getGamesHandler = async (req, res) => {
    const { name } = req.query;
    console.log(name);
    try {
        const response = name ? await getGamesByName(name) : await getAllGames();
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// manejador de ruta Get para traer un videojuego por id tando de la api como de la base de datos
const getGameHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "db" : "api";
    try {
        const response = await getGameById(id, source);
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ error: `The id: ${id} does not exist` });
    }
};


// manejador de ruta Get para traer un videojuego por id solo de la base de datos

const getGameByUIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await getGameBuUId(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ error: `The id: ${id} does not exist` });
    }
};

// manejador de ruta Put para actualizar un videojuego por id

const putGameHandler = async (req, res) => {
    const { id } = req.params;
    const { name, description, image, released, rating, platforms } = req.body;
    try {
        const response = await updateGame(id, name, description, image, released, rating, platforms, genres );
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// maneja la ruta Delete para eliminar un videojuego por id

const deleteGameHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await deleteGame(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// maneja la ruta para trer todos los videojuegos
// getAllGames
// `https://api.rawg.io/api/games?key=${YOUR_API_KEY}`

const getAllGamesHandler = async (req, res) => {
    try {
        const response = await getAllGames();
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};


module.exports = {
    createGameHandler,
    getGamesHandler,
    getGameHandler,
    putGameHandler,
    deleteGameHandler,
    getAllGamesHandler,
    getGameByUIdHandler
};