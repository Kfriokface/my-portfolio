import "./Navbar.css";
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

export const Navbar = () => `
<nav class="navbar">
  <figure class="navbar__logo"><img src="${logoAs}" alt="Logotipo de Alberto Sancho" width="200" height="67"></figure>
<ul>
    <li>
        <a href="#" id="homelink">Home</a>
    </li>
    <li>
        <a href="#" id="projectslink">Projects</a>
    </li>
    <li>
        <button id="themeBtn"><i class="fa-solid fa-moon"></i></button>
    </li>
</ul>
</nav>
`;