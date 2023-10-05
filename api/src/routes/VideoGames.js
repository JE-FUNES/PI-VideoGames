const { Router } = require('express');

const {
    createGameHandler,
    getGameHandler,
    getGamesHandler,
    getAllGamesHandler,
    getGameByUIdHandler
} = require ("../handlers/VideogamesHandlers");

const videogamesRouter = Router();

// Post
videogamesRouter.post('/', createGameHandler);

// Gets
videogamesRouter.get('/uuid/:id', getGameByUIdHandler);
videogamesRouter.get('/:id', getGameHandler);
videogamesRouter.get('/', getGamesHandler);
videogamesRouter.get('/all', getAllGamesHandler);


// Delete
//videogamesRouter.delete('/delete/:id', deleteGameHandler);

module.exports = videogamesRouter;