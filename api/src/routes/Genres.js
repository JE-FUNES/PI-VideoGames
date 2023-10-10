const { Router } = require("express");

const {
  apiGenresHandler,
  createGenreHandler,
  getGenreHandler,
  getGenresHandler,
  putGenreHandler,
  deleteGenreHandler,
} = require("../handlers/GenresHandlers");

const genresRouter = Router();

genresRouter.post("/api", apiGenresHandler);
genresRouter.post("/", createGenreHandler);

genresRouter.get("/", getGenresHandler);
genresRouter.get("/:id", getGenreHandler);

genresRouter.put("/:id", putGenreHandler);

genresRouter.delete("/delete/:id", deleteGenreHandler);

module.exports = genresRouter;
