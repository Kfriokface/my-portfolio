import "./Experience.css";
import { experiences } from "../../data/experiences";

const experienceHeader = () => {
  const header = document.createElement('h2');
  header.innerText = 'Experiencia laboral';
  return header.outerHTML;
};

const experienceTabs = () => {
  let groups = document.querySelectorAll('.experience');
  if (groups.length > 0) {
    for (let i = 0; i < groups.length; i++) {
      let tabs = groups[i].querySelectorAll('.experience__tab');
      for (let t = 0; t < tabs.length; t++) {
        tabs[t].setAttribute("index", t+1);
        if (t == 0) tabs[t].className = "experience__tab selected";
      }
      let contents = groups[i].querySelectorAll('.experience__content');
      for (let c = 0; c < contents.length; c++) {
        contents[c].setAttribute("index", c+1);
        if (c == 0) contents[c].className = "experience__content selected";
      }
    }
    let clicks = document.querySelectorAll('.experience__tab');
    for (let i = 0; i < clicks.length; i++) {
      clicks[i].onclick = function() {
        let tSiblings = this.parentElement.children;
        for (let i = 0; i < tSiblings.length; i++) {
          tSiblings[i].className = "experience__tab";
        }
        this.className = "experience__tab selected";
        let idx = this.getAttribute("index");
        let cSiblings = this.parentElement.parentElement.querySelectorAll('.experience__content');
        for (let i = 0; i < cSiblings.length; i++) {
          cSiblings[i].className = "experience__content";
          if (cSiblings[i].getAttribute("index") == idx) {
            cSiblings[i].className = "experience__content selected";
          }
        }
      };
    }
  }
}

const experienceNav = () => {
  const nav = document.createElement('ul');
  nav.classList.add('experience__tabs');
  let i = 1;
  experiences.forEach(experience => {
    let content = `
      <li class="experience__tab"><span class="number">${i}</span><span class="text">${experience.tab}</span></li> 
    `;
    nav.innerHTML += content;
    i++;
  });
  
  return nav.outerHTML;
};

const experienceContent = () => {
  const contentWrapper = document.createElement('ul');
  contentWrapper.classList.add('experience__contents');
  experiences.forEach(experience => {
    let content = `
      <li class="experience__content">
        <h3>${experience.tab}</h3>
        <div>
          <h4>${experience.title}</h4>
          <span>${experience.years}</span>
        </div>
        <p>${experience.description}</p>
      </li>
    `;
    contentWrapper.innerHTML += content;
  });

  return contentWrapper.outerHTML;
};

export { experienceHeader, experienceTabs, experienceNav, experienceContent};
