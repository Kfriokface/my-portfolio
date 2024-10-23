import "./Contact.css";
import { cleanPage } from "../../utils/cleanPage";
import Swal from 'sweetalert2';

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
    <input id="name" type="text" name="name" placeholder="Nombre completo" required>
    <input id="email" type="email" name="email" placeholder="Correo electrónico" required>
    <input id="subject" type="text" name="subject" placeholder="Asunto del mensaje" required>
    <textarea id="message" name="message" rows="4" placeholder="Escribe tu comentario aquí..." required></textarea>
    <button type="submit">Enviar</button>
  </form>
</section>  
`;

const submit = () => {
  document.querySelector('#contactForm').addEventListener('submit', async (e) => {
    console.log(e);
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const body = e.target.message.value;
    const message = `
      <div>${name}</div>
      <div>${email}</div>
      <div>${subject}</div>
      <div>${body}</div>
    `
    
    const response = await fetch('/.netlify/functions/send-email', {
      method: 'POST',
      body: JSON.stringify({ name, email, subject, message }),
    });
    
    if (response.ok) {
      Swal.fire({
        title: '¡Mensaje enviado!',
        text: 'Gracias por contactar conmigo, te responderé lo antes posible',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    } else {
      Swal.fire({
        title: '¡Ops!',
        text: 'Algo ha ido mal y tu mensaje no ha podido mandarse. Por favor vuelve a intentarlo.',
        icon: 'error',
        confirmButtonText: 'Cerrar'
      });
    }
  });
};
