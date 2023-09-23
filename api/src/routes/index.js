const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const VGrouter = require('./VideoGames.js');
const genresRouter = require('./Genres.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', VGrouter);
router.use('/genres', genresRouter);


module.exports = router;
