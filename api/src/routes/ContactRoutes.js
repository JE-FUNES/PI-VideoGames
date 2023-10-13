const { Router } = require("express");
const { createContactHandler } = require("../handlers/ContactHandler");
const { getContactController, deleteContactController } = require("../controllers/ContactController");
const contactRouter = Router();

contactRouter.post("/contact", createContactHandler);
contactRouter.get("/contact", getContactController );
contactRouter.delete("/contact/:id", deleteContactController);

module.exports = contactRouter;
