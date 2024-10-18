import "./style.css";
import { changeTheme } from "./components/Navbar/Navbar";
import { linkPage } from "./utils/linkPage";
import { Navbar, NavbarLateral, showMenuLateral, overflow } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";
import { Contact } from "./pages/Contact/Contact";



overflow(); 

const header = document.querySelector("header");
header.innerHTML = Navbar() + NavbarLateral();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();
const body = document.querySelector("body");

linkPage("#homelink", Home);
linkPage("#projectslink", Projects);
linkPage("#contactlink", Contact);
linkPage("#homelinkLateral", Home);
linkPage("#projectslinkLateral", Projects);
linkPage("#contactlinkLateral", Contact);

Home();

changeTheme();
showMenuLateral();



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


