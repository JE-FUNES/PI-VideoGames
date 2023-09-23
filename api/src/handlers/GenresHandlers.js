const { 
    apiGenres, 
    createGenres, 
    getAllGenres, 
    getGenresById, 
    getGenresByName, 
    updateGenre, 
    deleteGenre 
} = require('../controllers/GenresControllers');

// Post

const apiGenresHandler = async (req, res) => {
    try {
        const Genres = await apiGenres();
        res.status(201).json(Genres);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createGenreHandler = async (req, res) => {
    const { name } = req.body;
    try {
        const Genre = await createGenres({name});
        res.status(201).json(Genre);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get

const getGenresHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const Genres = name ? await getGenresByName(name) : await getAllGenres();
        res.status(200).json(Genres);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getGenreHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const Genre = await getGenresById(id);
        res.status(200).json(Genre);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Put

const putGenreHandler = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const Genre = await updateGenre(id, name);
        res.status(200).json(Genre);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Delete

const deleteGenreHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const Genre = await deleteGenre(id);
        res.status(200).json(Genre);
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
};