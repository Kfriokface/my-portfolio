import "./Navbar.css";
import "./NavbarLateral.css";
import logoAs from "../../public/images/logo_AS.svg"

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeText();
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn > i");
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
  const closeMenu = document.querySelector("#closeMenuLateral");

  openMenu.addEventListener('click', (e) => {
    body.classList.add('aside-active');
    console.log(e);
  });

  closeMenu.addEventListener('click', (e) => {
    if (body.classList.contains('aside-active')) {
      body.classList.remove('aside-active');
      console.log(e);
    }
  });
  
};

export const Navbar = () => `
<nav class="navbar navbar--top">
  <figure class="navbar__logo"><img src="${logoAs}" alt="Logotipo de Alberto Sancho" width="200" height="67"></figure>
  <ul>
      <li>
          <a href="#" id="homelink">Inicio</a>
      </li>
      <li>
          <a href="#" id="projectslink">Proyectos</a>
      </li>
      <li>
          <button id="themeBtn"><i class="fa-solid fa-moon"></i></button>
      </li>
      <li id="burger">
          <i id="openMenuLateral" class="fa-solid fa-bars fa-2x" aria-hidden="true"></i>
      </li>
  </ul>

</nav>
`;

export const NavbarLateral = () => `
<nav class="navbar navbar--lateral">
  <div class="navbar--lateral__wrapper">
    <i id="closeMenuLateral" class="fa-solid fa-times fa-2x" aria-hidden="true"></i>
    <figure class="navbar__logo"><img src="${logoAs}" alt="Logotipo de Alberto Sancho" width="200" height="67"></figure>
    <ul>
        <li>
            <a href="#" id="homelink">Inicio</a>
        </li>
        <li>
            <a href="#" id="projectslink">Proyectos</a>
        </li>
    </ul>
  </div> 
</nav>
`;