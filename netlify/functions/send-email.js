import { createTransport } from 'nodemailer';

const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: process.env.VITE_GOOGLE_DOMAIN,
    pass: process.env.VITE_GOOGLE_APPKEY,
  },
});

export async function handler(event) {
  const { name, email, subject, message } = JSON.parse(event.body);

  const mailOptions = {
    from: email,
    to: process.env.VITE_GOOGLE_DOMAIN,
    subject: `Nuevo mensaje de ${name}: ${subject}`,
    text: message,
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
      body: JSON.stringify({ error: 'Error al enviar el correo', details: error.message }),
    };
  }
}