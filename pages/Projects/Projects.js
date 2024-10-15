import "./Projects.css";
import { cleanPage } from "../../utils/cleanPage";
import { projects } from "../../data/projects";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";

export const Projects = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="projects">
      <h2>Proyectos realizados</h2>
      <div class="filter">
        <label>Selecciona una opción</label>
        <select id="select">
          <option value="All">Ver todos</option>
          <option value="Drupal">Drupal</option>
          <option value="Wordpress">Wordpress</option>
          <option value="Html5">Html5</option>
          <option value="CSS3">CSS3</option>
          <option value="JavaScript">JavaScript</option>
        </select>
      </div>
      <div class="projects-container"></div>
    </section>`;

  
  const select = document.querySelector('#select');
  const container = document.querySelector(".projects-container");
  
  const renderizarObjetos = (projects) => {
    container.innerHTML = '';
    projects.forEach(project => {
      const figure = document.createElement("figure");
      figure.innerHTML = ProjectCard(project);
      container.appendChild(figure);
    });
  }

  const filtrar = () => {
    const selectedValue = select.value;
    const filteredProjects = selectedValue === 'All' ? projects :projects.filter(project => project.tech.includes(select.value));
    renderizarObjetos(filteredProjects);
  }

  select.addEventListener('change', filtrar);
  
  renderizarObjetos(projects);

};