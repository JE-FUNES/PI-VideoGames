const { Contact } = require("../db.js");

// formulario de contacto

const createContact = async (req, res) => {
  console.log("Entró al controlador createContact");
  const { name, email, likedPage, reason } = req.body;

  if (!name || !email || !likedPage || !reason) {
    console.log("Faltan datos en la solicitud");
    return res.status(400).json({ message: "Faltan datos" });
  }

  try {
    // Crea una nueva entrada en la tabla Contact con los datos del formulario
    console.log("Creando un nuevo contacto en la base de datos");
    await Contact.create({
      name,
      email,
      likedPage,
      reason,
    });
    console.log("Formulario enviado con éxito");
    return res.status(201).json({ message: "Formulario enviado con éxito" });
  } catch (error) {
    console.error("Error al enviar el formulario:", error);
    console.log("Error al procesar la solicitud");
    return res.status(500).json({ error: "Error al procesar la solicitud" });
  }
};

module.exports = {
  createContact,
};
