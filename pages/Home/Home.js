import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
import { experienceHeader, experienceTabs, experienceNav, experienceContent } from "../../components/Experience/Experience";
import photoAs from "../../public/images/alberto_sancho.jpg"
import { Skills } from "../../components/Skills/Skills";
import Glide from '@glidejs/glide';

const main = document.querySelector("main");
cleanPage(main);

const mainSection = () => {
  main.innerHTML = `
    <section class="about-me">
      <div class="about-me__wrapper">
        <figure>
          <img src="${photoAs}" alt="Alberto Sancho" width="564" height="720">
        </figure>
        <div class="about-me__text"> 
          <span>Hola, soy</span>
          <h1>Alberto Sancho</h1>
          <h3>Desarrollador web y diseñador gráfico</h3>
          <p>Soy un apasionado del desarrollo web, con experiencia en la creación de sitios web dinámicos y aplicaciones interactivas. Mi enfoque se centra en utilizar tecnologías modernas como HTML, CSS, JavaScript, y frameworks como React y Angular para construir experiencias web intuitivas y eficientes. Además, siempre estoy buscando nuevas herramientas y técnicas que optimicen el rendimiento y mejoren la experiencia del usuario.</p>
          <p>En el ámbito del diseño gráfico, cuento con una sólida experiencia en la creación de identidades visuales, diseño de logotipos, y diseño de interfaces. Mi enfoque visual se basa en la estética moderna, combinando funcionalidad con creatividad, asegurando que cada pieza visual no solo sea atractiva, sino también práctica y coherente con los objetivos del proyecto.</p>
          <p>Mi formación y práctica en ambas áreas me permiten crear soluciones integrales donde el diseño y la funcionalidad trabajan en conjunto. Esto me otorga una visión completa en la creación de productos digitales, desde el concepto inicial hasta su implementación final, logrando que el desarrollo y el diseño se complementen de manera fluida.</p>
        </div>
      </div>
    </section>`;
    skillsSection();
    experiencesSection();
};

const experiencesSection = () => {
  const experiencesSection = document.createElement('section');
  experiencesSection.classList.add('experience');
  experiencesSection.innerHTML = experienceHeader() + experienceNav() + experienceContent();
  main.appendChild(experiencesSection);
  //se ejecutan las pestañas
  experienceTabs();
};

const skillsSection = () => {
  const skillSection = document.createElement('section');
  skillSection.classList.add('skills');
  skillSection.innerHTML = Skills();
  main.appendChild(skillSection);
  let glide = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3
  })
  glide.mount();
};

export {mainSection, experiencesSection};