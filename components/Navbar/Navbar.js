import "./Navbar.css";
import "./NavbarLateral.css";
import logoAsSMall from "../../public/images/logo_AS__small.svg"
import logoAs from "../../public/images/logo_AS.svg"

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn button");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeText();
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn button > i");
  if (themeBtn.classList.contains('fa-moon')) {
    themeBtn.classList.remove('fa-moon');
    themeBtn.classList.add('fa-sun');
  } else {
    themeBtn.classList.remove('fa-sun');
    themeBtn.classList.add('fa-moon');
  }
};

export const showMenuLateral = () => {
  const body = document.body;
  const openMenu = document.querySelector("#openMenuLateral");
  const closeMenuBtn = document.querySelectorAll(".closeMenuLateral");

  openMenu.addEventListener('click', (e) => {
    body.classList.add('aside-active');
  });

  closeMenuBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (body.classList.contains('aside-active')) {
        body.classList.remove('aside-active');
      }
    });
  });
  
};

export const Navbar = () => {
  let size = window.innerWidth < 768 ? 'fa-2x' : 'fa-lg';
  return `<nav class="navbar navbar--top">
    <figure class="navbar__logo">
      <picture>
        <source srcset="${logoAs}" media="(min-width: 576px)" />
        <img src="${logoAsSMall}" alt="Logotipo de Alberto Sancho" width="60" height="60">
      </picture>
    </figure>
    <ul>
        <li>
            <a href="#" id="homelink">Inicio</a>
        </li>
        <li>
            <a href="#" id="projectslink">Proyectos</a>
        </li>
        <li>
            <a href="#" id="contactlink">Contacto</a>
        </li>
        <li id="themeBtn">
            <button><i class="fa-solid fa-moon ${size}"></i></button>
        </li>
        <li id="burger">
            <i id="openMenuLateral" class="fa-solid fa-bars ${size}" aria-hidden="true"></i>
        </li>
    </ul>
  </nav>`
};

export const NavbarLateral = () => `
<nav class="navbar navbar--lateral">
  <div class="navbar--lateral__wrapper">
    <i id="closeMenuLateral" class="closeMenuLateral fa-solid fa-times fa-2x" aria-hidden="true"></i>
    <figure class="navbar__logo"><img src="${logoAs}" alt="Logotipo de Alberto Sancho" width="200" height="67"></figure>
    <ul>
      <li>
        <a href="#" id="homelinkLateral" class="closeMenuLateral">Inicio</a>
      </li>
      <li>
        <a href="#" id="projectslinkLateral" class="closeMenuLateral">Proyectos</a>
      </li>
      <li>
        <a href="#" id="contactlinkLateral" class="closeMenuLateral">Contacto</a>
      </li>
    </ul>
  </div> 
</nav>
`;

export const overflow = () => {
  let overflow = document.createElement("span");
  overflow.classList.add('navbar__overflow');
  let sibling = document.querySelector("header");
  document.body.insertBefore(overflow, sibling);
}
