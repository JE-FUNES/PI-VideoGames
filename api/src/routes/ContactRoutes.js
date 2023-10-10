const { Router } = require("express");
const { createContactHandler } = require("../handlers/ContactHandler");
const contactRouter = Router();

contactRouter.post("/contact", createContactHandler);

module.exports = contactRouter;
