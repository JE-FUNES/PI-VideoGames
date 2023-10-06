const axios = require('axios');
const { GMAIL_USER } = process.env; // Asegúrate de que GMAIL_USER esté definido en tu archivo .env

const handleFormSubmit = async (formData) => {
  try {
    // Realiza una solicitud POST al servidor
    await axios.post('/sendEmail', formData);
    // Muestra un mensaje de éxito o redirige al usuario a una página de agradecimiento
    console.log('Formulario enviado con éxito');
    // Puedes devolver una respuesta al controlador si lo deseas
    return 'Correo electrónico enviado con éxito';
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    throw error;
  }
};

module.exports = {
  handleFormSubmit,
};
