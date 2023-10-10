const { Router } = require("express");

const videogamesRouter = require("./VideoGames.js");
const genresRouter = require("./Genres.js");
const contactRouter = require("./ContactRoutes.js");

const router = Router();

router.use("/games", videogamesRouter);
router.use("/genres", genresRouter);
router.use("/submit", contactRouter);

module.exports = router;
