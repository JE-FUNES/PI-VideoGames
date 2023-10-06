const { Router } = require('express');
const { handleFormSubmit } = require('../controllers/EmailController');

const emailRouter = Router();

// Post
emailRouter.post('/', async (req, res) => {
  const formData = req.body;

  try {
    const result = await handleFormSubmit(formData);
    res.status(200).send(result);
  } catch (error) {
    console.error('Error al enviar el correo electrónico: ', error);
    res.status(500).send('Error al enviar el correo electrónico');
  }
});

module.exports = emailRouter;
