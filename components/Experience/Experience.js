import "./Experience.css";
import { experiences } from "../../data/experiences";
import { Button } from "../Button/Button";

const experienceNav = () => {
  const nav = document.createElement('nav');
  nav.classList.add('nav-experience');

  console.log(nav);
  
  
  return nav.outerHTML;
};

const experienceContent = () => {

   return 'Hola que ases'
};

export {experienceNav, experienceContent};
