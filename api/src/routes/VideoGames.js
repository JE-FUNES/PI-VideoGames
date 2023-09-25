const { Router } = require('express');

const {
    createGameHandler,
    getGameHandler,
    getGamesHandler,
    putGameHandler,
    deleteGameHandler,
} = require ("../handlers/VideogamesHandlers");

const videogamesRouter = Router();

// Post
videogamesRouter.post('/', createGameHandler);

// Gets
videogamesRouter.get('/', getGamesHandler);
videogamesRouter.get('/:id', getGameHandler);

// Put
videogamesRouter.put('/:id', putGameHandler);

// Delete
videogamesRouter.delete('/delete/:id', deleteGameHandler);

module.exports = videogamesRouter;