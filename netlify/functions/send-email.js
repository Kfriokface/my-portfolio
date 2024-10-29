const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // Para procesar datos JSON

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.VITE_GOOGLE_DOMAIN,
    pass: process.env.VITE_GOOGLE_APPKEY,
  },
});

// Ruta para recibir los datos del formulario
app.post('/send-email', (req, res) => {
  const { email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.VITE_GOOGLE_DOMAIN,
    subject: "Mensaje enviado desde la web Alberto Sancho",
    text: message
  };

  const mailOptionsCopy = {
    from: process.env.VITE_GOOGLE_DOMAIN,
    to: email,
    subject: "Copia de tu mensaje enviado a Alberto Sancho",
    text: `Este es tu mensaje: \n\n${message}\n\nMe pondré en contacto contigo lo antes posible. Gracias.`
  };

  // Envía ambos correos
  Promise.all([
    transporter.sendMail(mailOptions),
    transporter.sendMail(mailOptionsCopy)
  ])
  .then(() => {
      res.status(200).send('Correos enviados con éxito');
  })
  .catch((error) => {
      console.error('Error enviando correos:', error);
      res.status(500).send('Error enviando correos');
  });

  // try {
  //   await transporter.sendMail(mailOptions);
  //   return {
  //     statusCode: 200,
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ message: 'Correo enviado correctamente' }),
  //   };
  // } catch (error) {
  //   return {
  //     statusCode: 500,
  //     body: JSON.stringify({
  //       error: 'Error al enviar el correo',
  //       details: error.message
  //     }),
  //   };
  // }
});