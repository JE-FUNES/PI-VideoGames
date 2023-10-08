const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const {apiGenres} = require('./controllers/GenresControllers.js');
//const nodemailer = require("nodemailer");
require('dotenv').config();
//const {GMAIL_USER, GMAIL_PASSWORD} = process.env;
require('./db.js');

// Llama a apiGenres al iniciar la aplicación
apiGenres()
  .then((result) => {
    console.log(result); 
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  const server = express();
  
  
server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(express.json());

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

/// ENVÍO DE EMAIL CON NODEMAILER

/*const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: GMAIL_USER, // Sin llaves {}
    pass: GMAIL_PASSWORD, // Sin llaves {}
  },
});

async function sendEmail(to, subject, message) {
  const mailOptions = {
    from: GMAIL_USER, 
    to,
    subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error al enviar el correo electrónico: ", error);
    throw error;
  }
}

server.post("/sendEmail", async (req, res) => {
  const { email, subject, message } = req.body;
  
  try {
    // Enviar correo al destinatario (en este caso, mi dirección de Gmail)
    await sendEmail(GMAIL_USER, subject, message);
    
    // Enviar correo de confirmación al usuario
    const confirmacionSubject = "Notification: form received - Videogames";
    const confirmacionMessage = "We have received your email correctly. Thank you!. Julia Funes | PI. Videogames | Soy Henry";

    await sendEmail(email, confirmacionSubject, confirmacionMessage);
    
    res.status(200).send("Correo electrónico enviado con éxito");
  } catch (error) {
    console.error("Error al enviar el correo electrónico: ", error);
    res.status(500).send("Error al enviar el correo electrónico");
  }
});*/

server.use('/', routes);

module.exports = server;
