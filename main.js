import "./style.css";
import { changeTheme } from "./components/Navbar/Navbar";
import { linkPage } from "./utils/linkPage";
import { Navbar, NavbarLateral, showMenuLateral, overflow } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { mainSection } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";

overflow(); 

const header = document.querySelector("header");
header.innerHTML = Navbar() + NavbarLateral();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();
const body = document.querySelector("body");

linkPage("#homelink", mainSection);
linkPage("#projectslink", Projects);

mainSection();

changeTheme();
showMenuLateral();
