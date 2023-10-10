/*
ESTO AL FINAL NO SE USO POR PROBLEMAS CON LA CONNFIGURACION DE GMAIL.
LA IDEA INICIAL ERA QUE EL FORMULARIO DE CONTACTO ME LLEGARA POR EMAIL CON LA INFO, Y QUE AL USUARIO LE LLEGARA TAMBIEN UNA CONFIRMACION POR EMAIL.
NO BORRAR PARA INTENTARLO LUEGO CON OTROS PASOS REQUERIDOS POR GMAIL PARA PODER HACERLO.


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
*/