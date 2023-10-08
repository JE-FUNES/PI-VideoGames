const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRouter = require('./VideoGames.js');
const genresRouter = require('./Genres.js');
const contactRouter = require('./ContactRoutes.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/games', videogamesRouter);
router.use('/genres', genresRouter);
router.use('/submitContactForm', contactRouter);


module.exports = router;
