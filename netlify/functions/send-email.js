const nodemailer = require('nodemailer');

// Configura el transporter de Nodemailer con tu cuenta de Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.VITE_GOOGLE_DOMAIN, // Usa las variables de entorno para ocultar tus credenciales
    pass: process.env.VITE_GOOGLE_APPKEY,
  },
});

// Exporta la función handler que será ejecutada cuando la función Lambda sea llamada
exports.handler = async (event, context) => {
  // Obtén los datos enviados desde el frontend
  const { name, email, subject, message } = JSON.parse(event.body);

  const mailOptions = {
    from: email,
    to: process.env.VITE_GOOGLE_DOMAIN,
    subject: `Nuevo mensaje de ${name}: ${subject}`,
    text: message,
  };

  try {
    // Envía el email
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Correo enviado correctamente' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al enviar el correo', details: error.message }),
    };
  }
};