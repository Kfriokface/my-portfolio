import { createTransport } from 'nodemailer';

export async function handler (event, context) {
  const { email, message } = JSON.parse(event.body);

  let transporter = createTransport({
    service: 'gmail',
    auth: {
      user: 'designalbertosancho@gmail.com',
      pass: 'hhgd jdgw veyx uxjr',  // Usa una contraseña de aplicación de Gmail
    },
  });

  const mailOptions = {
    from: email,
    to: 'designalbertosancho@gmail.com',
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
