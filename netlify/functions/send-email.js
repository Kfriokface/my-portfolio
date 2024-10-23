import { createTransport } from 'nodemailer';

export async function handler (event, context) {
  const { name, email, subject, message } = JSON.parse(event.body);

  let transporter = createTransport({
    service: 'gmail',
    auth: {
      user: 'designalbertosancho@gmail.com',
      pass: 'hxjt ivem rtvz axhl',
    },
  });

  const mailOptions = {
    from: email,
    to: 'designalbertosancho@gmail.com',
    subject: subject,
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
