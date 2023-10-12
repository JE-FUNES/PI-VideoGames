const { Router } = require("express");

const videogamesRouter = require("./VideoGames.js");
const genresRouter = require("./Genres.js");
const contactRouter = require("./ContactRoutes.js");
const loginRouter = require("./LoginRoutes.js");

const router = Router();

router.use("/games", videogamesRouter);
router.use("/genres", genresRouter);
router.use("/submit", contactRouter);
router.use("/private", loginRouter);

module.exports = router;
