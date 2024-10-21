import "./Contact.css";
import { cleanPage } from "../../utils/cleanPage";

export const Contact = () => {
  const main = document.querySelector("main");
  cleanPage(main);

  main.innerHTML = `
    ${introtext}
    ${formulario}
  `;
  
  submit();
}

const introtext = `
<section class="contact">
  <div class="contact-text">
    <h1>¿Quieres trabajar conmigo?, <span>¡hablemos!</span>.</h1>
    <p>Si te gusta mi trabajo y quieres contactar conmigo para realizar un proyecto, por favor rellena este formulario y cuéntame, de modo escueto, qué necesitas. Me pondré en contacto contigo lo antes posible. Gracias.</p>
  </div>  
`;

const formulario = `
  <form id="contactForm" class="contact-form">
    <input id="name" type="text" name="nombre" placeholder="Nombre completo">
    <input id="email" type="email" name="correo" placeholder="Correo electrónico">
    <input id="subject" type="text" name="asunto" placeholder="Asunto del mensaje">
    <textarea id="message" rows="4" placeholder="Escribe tu comentario aquí..."></textarea>
    <button type="submit">Enviar</button>
  </form>
</section>  
`;

const submit = () => {
  
  document.querySelector('#contactForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Obtener los valores de los campos
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const subject = document.querySelector('#subject').value;
    const message = document.querySelector('#message').value;

    const body = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    try {
      // Enviar los datos a la función de Netlify
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        alert('Email sent successfully!');
        form.reset();
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
    console.error('Error sending email:', error);
      alert('Error occurred while sending email.');
    }
  });
};
