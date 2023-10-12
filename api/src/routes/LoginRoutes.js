const { Router } = require("express");
const loginController = require("../controllers/loginController");
const postUserController = require("../controllers/postUserController");
const loginRouter = Router();

loginRouter.get("/login", loginController);
loginRouter.post("/login", postUserController);

module.exports = loginRouter;