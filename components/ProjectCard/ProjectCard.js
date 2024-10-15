import "./ProjectCard.css";

export const ProjectCard = (project) => {
  // comprobamos que exista GitHub
  let github = '';
  if (project.github.length > 0) {
    github = `<a href=${project.github}><i class="fa-brands fa-github"></i></a>`;
  }
  // sacamos la tarjeta
  return `
  <div class="project-card">
    <figure class="project-card__image">
      <a href=${project.link} target="_blank">
        <span><i class="fa-solid fa-plus fa-3x"></i></span> 
        <img src=${project.image} alt=${project.title}/>
      </a>
    </figure> 
    <div class="project-card__header">
      <h3>${project.title}</h3>
      <div>
        ${github}
        <a href=${project.link} target="_blank">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
    <div class="project-card__detail">
      <p>${project.description}</p>
      <p class="tech">${project.tech.join(" - ")}</p>
    </div>
  </div>
`};