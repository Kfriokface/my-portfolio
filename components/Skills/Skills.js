import "./Skills.css";
import { dataSkills } from "../../data/skills";

const skillsSlides = () => {
  let skillsSlides = "";
  dataSkills.forEach(skill => {
    let color = '';
    if (skill.score > 90) {
      color = 'hot';
    }
    else if(skill.score < 80) {
      color = 'warm';
    }
    let skillItem = `
    <li class="glide__slide">
      <div class="skill ${color}">
        <div class="content">
          <div class="percent" data-text="${skill.name}" style="--num: ${skill.score}">
            <i class="fa-brands fa-${skill.icon}"></i>
            <div class="dot"></div>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
          </div>
          <div class="number">
            <h2>${skill.score}<span>%</span></h2>
          </div>
        </div>
      </div>
    </li>  
    `;
    skillsSlides += skillItem;   
  });
  return skillsSlides;
}

const skillsSlidesCount = () => {
  let bullets = "";
  for (let i = 0; i < dataSkills.length; i++) {
    bullets += `
      <button class="slider__bullet glide__bullet" data-glide-dir="=${i}"></button>
    `
  }
  return bullets;
}

export const Skills = () => {
  let content = skillsSlides();
  let bullets = skillsSlidesCount();
  return `
  <h2>Skills</h2> 
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        ${content}
      </ul>
    </div>
    <div data-glide-el="controls">
      <button class="slider__arrow slider__arrow--prev glide__arrow glide__arrow--prev" data-glide-dir="<">
        <i class="fa-solid fa-chevron-left fa-lg"></i>
      </button>
      <button class="slider__arrow slider__arrow--next glide__arrow glide__arrow--next" data-glide-dir=">">
        <i class="fa-solid fa-chevron-right fa-lg"></i>
      </button>
    </div>
    <div class="slider__bullets glide__bullets" data-glide-el="controls[nav]">
      ${bullets}
    </div>
  </div>`
};
