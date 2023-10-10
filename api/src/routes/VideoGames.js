const { Router } = require("express");

const {
  createGameHandler,
  getGameHandler,
  getGamesHandler,
  getAllGamesHandler,
  getGameByUIdHandler,
} = require("../handlers/VideogamesHandlers");

const videogamesRouter = Router();

videogamesRouter.post("/", createGameHandler);

videogamesRouter.get("/uuid/:id", getGameByUIdHandler);
videogamesRouter.get("/:id", getGameHandler);
videogamesRouter.get("/", getGamesHandler);
videogamesRouter.get("/all", getAllGamesHandler);

// Delete
//videogamesRouter.delete('/delete/:id', deleteGameHandler);

module.exports = videogamesRouter;
