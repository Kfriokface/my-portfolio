import { createTransport } from 'nodemailer';

export async function handler (event, context) {
  const { email, message } = JSON.parse(event.body);

  let transporter = createTransport({
    service: 'gmail',
    auth: {
      user: import.meta.env.VITE_GOOGLE_DOMAIN,
      pass: import.meta.env.VITE_GOOGLE_APPKEY,
    },
  });

  const mailOptions = {
    from: email,
    to: import.meta.env.VITE_GOOGLE_DOMAIN,
    subject: 'Nuevo mensaje de contacto',
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
      body: JSON.stringify({ error: 'Error al enviar el correo' }),
    };
  }
}
