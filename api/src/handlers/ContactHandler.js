const { createContact } = require("../controllers/ContactController");

const createContactHandler = async (req, res) => {
  try {
    await createContact(req, res);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createContactHandler,
};
