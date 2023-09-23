const { Router } = require('express');

const {
    createVideogameHandler,
    getVideogameHandler,
    getVideogamesHandler,
    putVideogameHandler,
    deleteVideogameHandler,
} = require ("../handlers/VideogamesHandlers");

const VGrouter = Router();

// Post
VGrouter.post('/', createVideogameHandler);

// Gets
VGrouter.get('/', getVideogamesHandler);
VGrouter.get('/:id', getVideogameHandler);

// Put
VGrouter.put('/:id', putVideogameHandler);

// Delete
VGrouter.delete('/:id', deleteVideogameHandler);

module.exports = VGrouter;