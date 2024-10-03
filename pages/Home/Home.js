import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
import { experienceHeader, experienceTabs, experienceNav, experienceContent } from "../../components/Experience/Experience";

const main = document.querySelector("main");
cleanPage(main);

const mainSection = () => {
  main.innerHTML = `
    <section class="home">
    <p>Hola, mi nombre es</p>
    <h1>Alberto Sancho</h1>
    <h3>Desarrollador web y diseñador gráfico</h3>
    <p>Me apasiona el mundo de la programación de websites y también soy diseñador gráfico desde hace más de 25 años. Te invito a que me conozcas mejor en este sitio.</p>
    </section>`;
};

const experiencesSection = () => {
  const experiencesSection = document.createElement('section');
  experiencesSection.classList.add('experience');
  experiencesSection.innerHTML = experienceHeader() + experienceNav() + experienceContent();
  main.appendChild(experiencesSection);
  //se ejecutan las pestañas
  experienceTabs();
};

export {mainSection, experiencesSection};