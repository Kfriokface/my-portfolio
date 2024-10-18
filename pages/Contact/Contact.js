import "./Contact.css";
import { cleanPage } from "../../utils/cleanPage";

export const Contact = () => {
  const main = document.querySelector("main");
  cleanPage(main);

  main.innerHTML = `
    ${introtext}
    ${formulario}
  `;
  
  //submit();

}

const introtext = `
  <div class="contact__text d-flex">
    <h3 class="sora-regular fs-xl">¿Quieres <span class="sora-extrabold">trabajar</span> conmigo?, <span class="sora-bold outlined-reverse">¡hablemos!</span>.</h3>
    <p class="fs-sm sora-light">Si te gusta mi trabajo y quieres contactar conmigo para realizar un proyecto, por favor rellena este formulario y cuéntame, de modo escueto, qué necesitas. Me pondré en contacto contigo lo antes posible. Gracias.</p>
    <p class="fs-sm sora-bold">design@albertosancho.es</p>
    <p class="fs-sm sora-bold">+34 000 000 000</p>
  </div>
`;

const formulario = `
  <form id="contactForm" class="contactForm">
    <input id="name" type="text" name="nombre" placeholder="Nombre completo">
    <input id="email" type="email" name="correo" placeholder="Correo electrónico">
    <input id="subject" type="text" name="asunto" placeholder="Asunto del mensaje">
    <textarea id="message" rows="4" placeholder="Escribe tu comentario aquí..."></textarea>
    <button type="submit">Enviar</button>
  </form>
`;

const submit2 = () => {
  document.querySelector('#contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener los valores de los campos
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const subject = document.querySelector('#subject').value;
    const message = document.querySelector('#message').value;

    // Validar campos
    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Aquí podrías enviar los datos a un servidor usando fetch, por ejemplo
    console.log('Nombre:', name);
    console.log('Correo electrónico:', email);
    console.log('Asunto:', subject);
    console.log('Mensaje:', message);

    // Limpiar el formulario
    document.querySelector('#contactForm').reset();
    alert('Mensaje enviado. ¡Gracias por contactarnos!');
  });
};


const submit = () => {
  document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('#contactForm');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Obtener los valores de los campos
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const subject = document.querySelector('#subject').value;
    const message = document.querySelector('#message').value;

    const payload = {
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
        body: JSON.stringify(payload),
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
  });
};
