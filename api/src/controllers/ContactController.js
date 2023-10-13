const { Contact } = require("../db.js");

// formulario de contacto

const createContact = async (req, res) => {
  const { name, email, likedPage, reason } = req.body;

  if (!name || !email || !likedPage || !reason) {
    return res.status(400).json({ message: "Faltan datos" });
  }

  try {
    // Crea una nueva entrada en la tabla Contact con los datos del formulario

    await Contact.create({
      name,
      email,
      likedPage,
      reason,
    });

    return res.status(201).json({ message: "Form sent successfully" });
  } catch (error) {
    console.error("Error sending the form", error);

    return res.status(500).json({ error: "Error processing request" });
  }
};


const getContactController = async (req, res) => {
  try {
    const contacts = await Contact.findAll();

    return res.status(200).json(contacts);
  } catch (error) {
    console.error("Error getting contacts", error);

    return res.status(500).json({ error: "Error processing request" });
  }
}

const deleteContactController = async (req, res) => {
  const { id } = req.params;

  try {
    const contact = await Contact.findByPk(id);

    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    await contact.destroy();

    return res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.error("Error deleting contact:", error);

    return res.status(500).json({ error: "Error processing request" });
  }
}

module.exports = {
  createContact,
  getContactController,
  deleteContactController,
};
