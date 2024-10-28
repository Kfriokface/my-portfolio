import { createTransport } from 'nodemailer';

const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: process.env.VITE_GOOGLE_DOMAIN,
    pass: process.env.VITE_GOOGLE_APPKEY,
  },
});

export async function handler(event) {
  const { email, message } = JSON.parse(event.body);

  const mailOptions = {
    from: process.env.VITE_GOOGLE_DOMAIN,
    to: email,
    subject: "Copia de tu mensaje enviado a Alberto Sancho",
    text: `Este es tu mensaje: \n\n${message}\n\nMe pondré en contacto contigo lo antes posible. Gracias.`
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Correo enviado correctamente' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Error al enviar el correo',
        details: error.message
      }),
    };
  }
}