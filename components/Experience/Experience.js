import "./Experience.css";
import { experiences } from "../../data/experiences";

const experienceTabs = () => {
  let groups = document.querySelectorAll('.experiences-container');
  if (groups.length > 0) {
    for (let i = 0; i < groups.length; i++) {
      let tabs = groups[i].querySelectorAll('.t-tab');
      for (let t = 0; t < tabs.length; t++) {
        tabs[t].setAttribute("index", t+1);
        if (t == 0) tabs[t].className = "t-tab selected";
      }
      let contents = groups[i].querySelectorAll('.t-content');
      for (let c = 0; c < contents.length; c++) {
        contents[c].setAttribute("index", c+1);
        if (c == 0) contents[c].className = "t-content selected";
      }
    }
    let clicks = document.querySelectorAll('.t-tab');
    for (let i = 0; i < clicks.length; i++) {
      clicks[i].onclick = function() {
        let tSiblings = this.parentElement.children;
        for (let i = 0; i < tSiblings.length; i++) {
          tSiblings[i].className = "t-tab";
        }
        this.className = "t-tab selected";
        let idx = this.getAttribute("index");
        let cSiblings = this.parentElement.parentElement.querySelectorAll('.t-content');
        for (let i = 0; i < cSiblings.length; i++) {
          cSiblings[i].className = "t-content";
          if (cSiblings[i].getAttribute("index") == idx) {
            cSiblings[i].className = "t-content selected";
          }
        }
      };
    }
  }
}

const experienceNav = () => {
  const nav = document.createElement('ul');
  nav.classList.add('t-tabs');
  experiences.forEach(experience => {
    let content = `
      <li class="t-tab">${experience.button}</li> 
    `;
    nav.innerHTML += content;
  });
  
  return nav.outerHTML;
};

const experienceContent = () => {
  const contentWrapper = document.createElement('ul');
  contentWrapper.classList.add('t-contents');
  experiences.forEach(experience => {
    let content = `
      <li class="t-content">
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

export {experienceTabs, experienceNav, experienceContent};
